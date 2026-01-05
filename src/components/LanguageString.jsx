import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const defaultLocale = "en-US";

const LanguageString = ({ languageObject }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const keys = [
    currentLocale,
    currentLocale.split('-')[0],
    defaultLocale,
    defaultLocale.split('-')[0],
    Object.keys(languageObject)[0],
  ];

  return keys.map((key) => languageObject[key]).find(Boolean);
};

LanguageString.propTypes = {
  languageObject: PropTypes.any.isRequired,
};

export default LanguageString;
