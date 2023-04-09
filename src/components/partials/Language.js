import React from "react"
import PropTypes from "prop-types"
import useTranslation from "next-translate/useTranslation"

export const Language = ({ lang }) => {
  const { t } = useTranslation()

  switch (lang) {
    case "fi":
      return <span>{t("finnish-language-text")}</span>
    case "en-US":
      return <span>{t("english-language-text")}</span>

    case "fi/en-US":
      return <span>{t("english-finnish-language-text")}</span>

    case "en-US/fi":
      return <span>{t("english-finnish-language-text")}</span>
    default:
      return <span />
  }
}

Language.propTypes = {
  lang: PropTypes.string.isRequired
}
