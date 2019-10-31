import React from "react";
import companies from "../../data/companies.json";
import style from "./Companies.module.scss";
import { Link } from "react-router-dom";
import { Localized } from "fluent-react/compat";

const Companies = () => (
  <>
    <Localized id="companies-title-text">
      Vuoden 2019 Kumpulan Potentiaali -tapahtuman yritykset
    </Localized>
    <Link to="/companies">
      <Localized id="view-all-companies">View as a list</Localized>
    </Link>
    <div className={style.companies}>
      {companies
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(company => (
          <Link
            className={style["company-logo"]}
            key={company.alt}
            to={"/company/" + company.id}
          >
            <img
              className={style["company-logo-image"]}
              alt={company.alt}
              src={company.imgSrc}
            />
          </Link>
        ))}
    </div>
  </>
);

export default Companies;
