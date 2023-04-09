import React from "react"
import PropTypes from "prop-types"
import { useRouter } from "next/router"

const defaultLocale = "en-US"

const LanguageString = ({ languageObject }) => {
  const router = useRouter()
  const currentLocale = router.locale
  if (languageObject[currentLocale] === undefined) {
    return <>{languageObject[defaultLocale]}</>
  }
  return <>{languageObject[currentLocale]}</>
}

LanguageString.propTypes = {
  languageObject: PropTypes.any.isRequired
}

export default LanguageString
