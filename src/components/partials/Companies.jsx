import companies from "../../data/companies.json";
import style from "./Companies.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getText } from "../../utils/getText";

const sortedCompanies = [...companies].sort((a, b) =>
  a.booth.localeCompare(b.booth, undefined, { numeric: true }),
);

const Companies = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.slice(0, 2);
  return (
    <>
      <p>{t("companies-title-text")}</p>
      <br />
      <Link to="/companies">
        <p>{t("view-all-companies")}</p>
      </Link>
      <div className={style.companies}>
        {sortedCompanies.map((company) => (
          <Link
            className={style["company-logo"]}
            key={company.id}
            to={"/company/" + company.id}
          >
            <img
              className={style["company-logo-image"]}
              alt={`${getText(company.name, lang)} logo`}
              src={company.imgSrc}
              loading="lazy"
              decoding="async"
            />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Companies;
