import { negotiateLanguages } from "@fluent/langneg";
import config from "./../data/config.json";
//import { ReactLocalization } from "@fluent/react";
// Localization files
import { FluentBundle, FluentResource } from "@fluent/bundle";
import fi from "../lang/fi.ftl";
import enUS from "../lang/en-US.ftl";
import { ReactLocalization } from "@fluent/react";

const ftl = {
  fi,
  "en-US": enUS
};

const initialState = {
  lang: config.defaultLocale || "fi",
  isFetching: false,
  userLocales: ["fi", "en-US"],
  currentLocales: ["fi", "en-US"],
  bundles: null
};

async function fetchMessages(locale) {
  let response = await fetch((ftl[locale]));
  let messages = await response.text();
  return [locale, messages];
}

function* lazilyParsedBundles(fetchedMessages) {
  for (let [locale, messages] of fetchedMessages) {
    let resource = new FluentResource(messages);
    let bundle = new FluentBundle(locale);
    bundle.addResource(resource);
    yield bundle;
  }
}

// old: https://github.com/projectfluent/fluent.js/blob/master/fluent-react/examples/redux-async/src/actions.js
// new: https://github.com/projectfluent/fluent.js/tree/master/fluent-react/example
export const changeLocales = userLocales => {
  return async dispatch => {
    dispatch(changeLocalesRequest());
    const currentLocales = negotiateLanguages(userLocales, ["fi", "en-US"], {
      defaultLocale: "fi"
    });


    let fetchedMessages = await Promise.all(currentLocales.map(fetchMessages));

    let bundles = lazilyParsedBundles(fetchedMessages);
    let l10n = new ReactLocalization(bundles)
    dispatch(
      changeLocalesResponse({
        userLocales,
        currentLocales,
        bundles: l10n
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
