import { Accordion } from "../../components/accordion/Accordion";
import { useTranslation } from "react-i18next";

const Geology = () => {
  const { t } = useTranslation("subjects");
  return (
    <Accordion isRoot accordionId={"geology"} title={t("geology-title-text")}>
      <h5>{t("subjects-introduction")}</h5>
      <p> {t("geology-introduction-text-1")}</p>
      <p>{t("geology-introduction-text-2")}</p>
      <h5>{t("work-descriptions-text")}</h5>
      <Accordion
        accordionId={"geology-researcher"}
        title={t("geology-researcher-special-researcher-title-text")}
        noShadow
      >
        <ul>
          <li>
            {t("geology-researcher-special-researcher-description-text-1")}
          </li>
          <li>
            {t("geology-researcher-special-researcher-description-text-2")}
          </li>
        </ul>
      </Accordion>
      <Accordion
        accordionId={"geology-ore-geologist"}
        title={t("geology-ore-geologist-researcher-title-text")}
        noShadow
      >
        <ul>
          <li>{t("geology-ore-geologist-description-text-1")}</li>
          <li>{t("geology-ore-geologist-description-text-2")}</li>
          <li>{t("geology-ore-geologist-description-text-3")}</li>
        </ul>
      </Accordion>
      <Accordion
        accordionId={"geology-hydro-geologist"}
        title={t("geology-hydro-geologist-researcher-title-text")}
        noShadow
      >
        <ul>
          <li>{t("geology-hydro-geologist-description-text-1")}</li>
          <li>{t("geology-hydro-geologist-description-text-2")}</li>
        </ul>
      </Accordion>
    </Accordion>
  );
};

export default Geology;
