import React from "react";
import companies from "../../data/companies.json";
import style from "./Companies.module.scss";
import { Link } from "react-router-dom";
import { Localized } from "@fluent/react";

const Companies = () => (
  <>
    <Localized id="companies-title-text">
      Vuoden 2022 Kumpulan Potentiaali -tapahtuman yritykset
    </Localized>
    <br />
    <Link to="/companies">
      <Localized id="view-all-companies">View as a list</Localized>
    </Link>
    <div className={style.companies}>
      {companies
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(company => (
          <Link
            className={style["company-logo"]}
            key={company.name}
            to={"/company/" + company.id}
          >
            <img
              className={style["company-logo-image"]}
              alt={`${company.name} logo`}
              src={company.imgSrc}
            />
          </Link>
        ))}
    </div>
  </>
);

export default Companies;
