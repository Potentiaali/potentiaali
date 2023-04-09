import React from "react"
import useTranslation from "next-translate/useTranslation"

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1>{t("pageNotFound")}</h1>
    </>
  )
}
export default NotFoundPage
