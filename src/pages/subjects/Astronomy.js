import React from "react"
import { Accordion } from "../../components/accordion/Accordion"
import useTranslation from "next-translate/useTranslation"

const Astronomy = () => {
  const { t } = useTranslation()

  return (
    <Accordion
      isRoot
      accordionId={"astronomy"}
      title={t("astronomy-title-text")}
    >
      <h5> {t("subjects-introduction")}</h5>
      <p>{t("astronomy-introduction-text")}</p>
      <h5>{t("work-descriptions-text")}</h5>

      <Accordion
        accordionId={"astronomy-researcher"}
        title={t("astronomy-researcher-title-text")}
        noShadow
      >
        {t("astronomy-researcher-description-text")}
      </Accordion>
      <Accordion
        accordionId={"astronomy-programmer"}
        title={t("astronomy-programmer-title-text")}
        noShadow
      >
        {t("astronomy-programmer-description-text")}
      </Accordion>
      <Accordion
        accordionId={"astronomy-satellite-and-space"}
        title={t("astronomy-satellite-and-space-companies-title-text")}
        noShadow
      >
        {t("astronomy-satellite-and-space-companies-description-text")}
      </Accordion>
      <Accordion
        accordionId={"astronomy-popular-science"}
        title={t("astronomy-popular-science-title-text")}
        noShadow
      >
        {t("astronomy-popular-science-description-text")}
      </Accordion>
    </Accordion>
  )
}

export default Astronomy
