import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { useTranslation } from "react-i18next";

const ComputerScience = () => {
  const { t } = useTranslation("subjects");
  return (
    <Accordion
      isRoot
      accordionId={"compsci"}
      title={t("computer-science-title-text")}
    >
      <h5>{t("subjects-introduction")}</h5>

      <p>{t("computer-science-introduction-text")}</p>
      <h5>{t("work-descriptions-text")}</h5>
      <Accordion
        accordionId={"compsci-full-stack"}
        title={t("computer-science-full-stack-developer-title-text")}
        noShadow
      >
        {t("computer-science-full-stack-developer-description-text")}
      </Accordion>
      <Accordion
        accordionId={"compsci-data-scientist"}
        title={t("computer-science-data-sciencist-title-text")}
        noShadow
      >
        {t("computer-science-data-sciencist-description-text")}
      </Accordion>
      <Accordion
        accordionId={"compsci-science-security"}
        title={t("computer-science-security-networking-expert-title-text")}
        noShadow
      >
        {t("computer-science-security-networking-expert-description-text")}
      </Accordion>
      <Accordion
        accordionId={"compsci-software-architect"}
        title={t("computer-science-software-architect-title-text")}
        noShadow
      >
        {t("computer-science-software-architect-description-text")}
      </Accordion>
    </Accordion>
  );
};

export default ComputerScience;
