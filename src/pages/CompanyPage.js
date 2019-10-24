import React from "react";
import { Localized } from "fluent-react/compat";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CompanyPage = () => {
  const companies = useSelector(state => state.company.companies);
  return (
    <>
      <section className="app-section">
        <h1>
          <Localized id="companies-title-text">Companies</Localized>
        </h1>
      </section>
      <section className="app-section">
        <ul>
          {companies
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(company => (
              <li key={company.id}>
                <Link to={"/company/" + company.id}>{company.name}</Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default CompanyPage;
