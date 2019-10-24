import React from "react";
import companies from "../../data/companies.json";
import style from "./Companies.module.scss";
import { Localized } from "fluent-react/compat";
import { Textfit } from "react-textfit";

const Companies = () => (
  <>
    <Textfit mode="single" max={20}>
      <h1>
        <Localized id="companies-title-text">
          Vuoden 2019 Kumpulan Potentiaali -tapahtuman yritykset
        </Localized>
      </h1>
    </Textfit>
    <div className={style.companies}>
      {companies
        .sort((a, b) => a.alt.localeCompare(b.alt))
        .map(company => (
          <a
            className={style["company-logo"]}
            key={company.alt}
            href={company.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={style["company-logo-image"]}
              alt={company.alt}
              src={company.imgSrc}
            />
          </a>
        ))}
    </div>
  </>
);

export default Companies;
