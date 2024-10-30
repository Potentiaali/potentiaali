import React from "react";
import styles from "./SingleCompanyPage.module.scss";
import companies from "../data/companies.json";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import LanguageString from "../components/LanguageString";
import { BoothBadge } from "../components/partials/badges/BoothBadge";

const SingleCompanyPage = () => {
  const { t , i18n} = useTranslation();
  const currentLocale = i18n.language;

  const params = useParams();
  const companyId = params.id;

  if (!companyId) {
    return <span> {t("company-not-found")}</span>;
  }

  if (companies.length === 0) {
    return <span> {t("empty-schedule")}</span>;
  }

  const company = companies.find(
    (cmpny) => Number(cmpny.id) === Number(companyId),
  );

  if (company === undefined) {
    return <span> {t("company-not-found")}</span>;
  }

  return (
    <>
      <section className="app-section">
        <Link to="/companies">
          <h3>
            <i className="fas fa-chevron-left"></i>&nbsp;&nbsp;
            <span> {t("go-back")}</span>
          </h3>
        </Link>
      </section>
      <section className="app-section">
        <h1>{company.name}</h1>
        <BoothBadge name={company.booth} />
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            display: "inline-block",
          }}
        >
          <img alt={company.name} src={"/" + company.imgSrc} width={200} />
        </div>
        <p>
          <a
            href={company.websiteUrl}
            alt={company.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>&nbsp;&nbsp;
            {company.websiteUrl}
          </a>
        </p>
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          { !company.description[currentLocale] && Object.values(company.description).find(Boolean) && (
            <div class={styles.descriptionNotAvailable}>{t("description-not-available-in-current-language")}</div>
          ) }
          <p>
            { company.description[currentLocale] ?? Object.values(company.description)[0] }
          </p>
        </pre>
      </section>
      <section className="app-section">
        <Link to="/companies">
          <h3>
            <span> {t("go-to-company-listing")}</span>
          </h3>
        </Link>
      </section>
    </>
  );
};

export default SingleCompanyPage;
