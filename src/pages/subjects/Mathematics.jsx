import { Accordion } from "../../components/accordion/Accordion";
import { useTranslation } from "react-i18next";

const Mathematics = () => {
  const { t } = useTranslation("subjects");
  return (
    <Accordion
      isRoot
      accordionId={"mathematics"}
      title={t("mathematics-title-text")}
    >
      <h5>{t("subjects-introduction")}</h5>
      <p>{t("mathematics-introduction-text")}</p>
      <p> {t("work-descriptions-text")}</p>
      <Accordion
        accordionId={"mathematics-insurance"}
        title={t("mathematics-insurance-mathematician-title-text")}
        noShadow
      >
        {t("mathematics-insurance-mathematician-description-text")}
      </Accordion>
      <Accordion
        accordionId={"mathematics-software-designer"}
        title={t("mathematics-software-designer-title-text")}
        noShadow
      >
        {t("mathematics-software-designer-description-text")}
      </Accordion>
      <Accordion
        accordionId={"mathematics-analytician"}
        title={t("mathematics-analytician-title-text")}
        noShadow
      >
        {t("mathematics-analytician-description-text")}
      </Accordion>
      <Accordion
        accordionId={"mathematics-teacher"}
        title={t("mathematics-teacher-title-text")}
        noShadow
      >
        {t("mathematics-teacher-description-text")}
      </Accordion>
      <Accordion
        accordionId={"mathematics-reseacher"}
        title={t("mathematics-researcher-title-text")}
        noShadow
      >
        {t("mathematics-researcher-description-text")}
      </Accordion>
    </Accordion>
  );
};

export default Mathematics;
