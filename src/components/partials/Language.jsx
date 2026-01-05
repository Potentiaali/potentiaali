import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const Language = ({ lang }) => {
  const { t } = useTranslation();

  switch (lang) {
    case "fi":
      return <span>{t("finnish-language-text")}</span>;
    case "en":
      return <span>{t("english-language-text")}</span>;

    case "fi/en":
      return <span>{t("english-finnish-language-text")}</span>;

    case "en/fi":
      return <span>{t("english-finnish-language-text")}</span>;
    default:
      return <span />;
  }
};

Language.propTypes = {
  lang: PropTypes.string.isRequired,
};
