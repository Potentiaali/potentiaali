import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const defaultLocale = "en-US";

const LanguageString = ({ languageObject, html = false }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const keys = [
    currentLocale,
    currentLocale.split('-')[0],
    defaultLocale,
    defaultLocale.split('-')[0],
    Object.keys(languageObject)[0],
  ];

  const text = keys.map((key) => languageObject[key]).find(Boolean);

  // Opt-in: render trusted strings from our own data files as HTML (e.g. links)
  return html ? <span dangerouslySetInnerHTML={{ __html: text }} /> : text;
};

LanguageString.propTypes = {
  languageObject: PropTypes.any.isRequired,
  html: PropTypes.bool,
};

export default LanguageString;
