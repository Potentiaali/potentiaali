import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const defaultLocale = "en-US";

const LanguageString = ({ languageObject }) => {
  const [currentLocale] = useSelector(
    state => state.localization.currentLocales
  );
  if (languageObject[currentLocale] === undefined) {
    return <>{languageObject[defaultLocale]}</>;
  }
  return <>{languageObject[currentLocale]}</>;
};

LanguageString.propTypes = {
  languageObject: PropTypes.any.isRequired
};

export default LanguageString;
