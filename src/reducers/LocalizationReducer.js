const initialState = {
  lang: "fi",
  isFetching: false,
  userLocales: ["fi", "en-US"],
  currentLocales: ["fi", "en-US"],
  bundles: null
};

export const localizationActions = {
  SET_LANGUAGE: "SET_LANGUAGE",
  CHANGE_LOCALES_RESPONSE: "CHANGE_LOCALES_RESPONSE",
  CHANGE_LOCALES_REQUEST: "CHANGE_LOCALES_REQUEST"
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
