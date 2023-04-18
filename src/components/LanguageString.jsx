import React from "react"
import PropTypes from "prop-types"

const defaultLocale = "en"

const LanguageString = ({ languageObject }) => {
  const { i18n } = useTranslation()
  currentLocale = i18n.language

  if (languageObject[currentLocale] === undefined) {
    return <>{languageObject[defaultLocale]}</>
  }
  return <>{languageObject[currentLocale]}</>
}

LanguageString.propTypes = {
  languageObject: PropTypes.any.isRequired
}

export default LanguageString
