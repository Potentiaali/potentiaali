import React from "react"
import { Accordion } from "../../components/accordion/Accordion"
import useTranslation from "next-translate/useTranslation"

const Geophysics = () => {
  const { t } = useTranslation()
  return (
    <Accordion
      isRoot
      accordionId={"geophysics"}
      title={t("geophysics-title-text")}
    >
      <h5>{t("subjects-introduction")}</h5>
      <p>{t("geophysics-introduction-text")}</p>
      <h5>{t("work-descriptions-text")}</h5>
      <Accordion
        accordionId={"geophysics-consultant"}
        title={t("geophysics-consultant-title-text")}
        noShadow
      >
        {t("geophysics-consultant-description-text")}
      </Accordion>
      <Accordion
        accordionId={"geophysics-hydrologist"}
        title={t("geophysics-hydrologist-title-text")}
        noShadow
      >
        {t("geophysics-hydrologist-description-text")}
      </Accordion>
      <Accordion
        accordionId={"geophysics-design"}
        title={t("geophysics-design-engineer-title-text")}
        noShadow
      >
        {t("geophysics-design-engineer-description-text")}
      </Accordion>
      <Accordion
        accordionId={"geophysics-geophysicist"}
        title={t("geophysics-geophysicist-title-text")}
        noShadow
      >
        {t("geophysics-geophysicist-description-text")}
      </Accordion>
      <Accordion
        accordionId={"geophysics-research-assistant"}
        title={t("geophysics-research-assistant-title-text")}
        noShadow
      >
        {t("geophysics-research-assistant-description-text")}
      </Accordion>
    </Accordion>
  )
}

export default Geophysics
