const initialState = {
  lang: "fi"
};

export const localizationActions = {
  SET_LANGUAGE: "SET_LANGUAGE"
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
    default:
      return state;
  }
};
