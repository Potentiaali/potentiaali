import { FluentBundle } from "fluent/compat";
import { negotiateLanguages } from "fluent-langneg/compat";

import ftl from "../public/*.ftl";

const fetchMessages = async locale => {
  const response = await fetch(ftl[locale]);
  const messages = await response.text();
  return { [locale]: messages };
};

export const changeLocales = userLocales => {
  return async dispatch => {
    dispatch({ type: "CHANGE_LOCALES_REQUEST" });

    const currentLocales = negotiateLanguages(userLocales, ["fi-FI", "en-US"], {
      defaultLocale: "fi-FI"
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

    dispatch({
      type: "CHANGE_LOCALES_RESPONSE",
      userLocales,
      currentLocales,
      bundles: generateBundles()
    });
  };
};
