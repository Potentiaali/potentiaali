import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const defaultLocale = 'en-US'

const LanguageString = ({ languageObject }) => {
  const { i18n } = useTranslation()
  const currentLocale = i18n.language

  if (languageObject[currentLocale] === undefined) {
    return <>{languageObject[defaultLocale]}</>
  }
  return <>{languageObject[currentLocale]}</>
}

LanguageString.propTypes = {
  languageObject: PropTypes.any.isRequired
}

export default LanguageString
