import { FluentBundle } from "fluent/compat";
import { negotiateLanguages } from "fluent-langneg/compat";

// Localization files
import fi from "../lang/fi.ftl";
import enUS from "../lang/en-US.ftl";

const ftl = {
  fi,
  "en-US": enUS
};

const initialState = {
  lang: "fi",
  isFetching: false,
  userLocales: ["fi", "en-US"],
  currentLocales: ["fi", "en-US"],
  bundles: null
};

const fetchMessages = async locale => {
  const response = await fetch(ftl[locale]);
  const messages = await response.text();
  return { [locale]: messages };
};

// https://github.com/projectfluent/fluent.js/blob/master/fluent-react/examples/redux-async/src/actions.js
export const changeLocales = userLocales => {
  return async dispatch => {
    dispatch(changeLocalesRequest());

    const currentLocales = negotiateLanguages(userLocales, ["fi", "en-US"], {
      defaultLocale: "fi"
    });

    const fetched = await Promise.all(currentLocales.map(fetchMessages));

    const messages = fetched.reduce((obj, cur) => Object.assign(obj, cur));

    const generateBundles = function*() {
      for (const locale of currentLocales) {
        const bundle = new FluentBundle(locale);
        bundle.addMessages(messages[locale]);
        yield bundle;
      }
    };

    dispatch(
      changeLocalesResponse({
        userLocales,
        currentLocales,
        bundles: generateBundles()
      })
    );
  };
};

export const localizationActions = {
  SET_LANGUAGE: "SET_LANGUAGE",
  CHANGE_LOCALES_RESPONSE: "CHANGE_LOCALES_RESPONSE",
  CHANGE_LOCALES_REQUEST: "CHANGE_LOCALES_REQUEST"
};

export const changeLocalesResponse = ({
  userLocales,
  currentLocales,
  bundles
}) => {
  return {
    type: localizationActions.CHANGE_LOCALES_RESPONSE,
    userLocales,
    currentLocales,
    bundles
  };
};

export const changeLocalesRequest = () => {
  return {
    type: localizationActions.CHANGE_LOCALES_REQUEST
  };
};

export const setLanguage = lang => {
  return {
    type: localizationActions.SET_LANGUAGE,
    lang
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case localizationActions.SET_LANGUAGE:
      return { ...state, lang: action.lang };
    case localizationActions.CHANGE_LOCALES_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case localizationActions.CHANGE_LOCALES_RESPONSE: {
      const { userLocales, currentLocales, bundles } = action;
      return {
        ...state,
        isFetching: false,
        userLocales,
        currentLocales,
        bundles
      };
    }
    default:
      return state;
  }
};
