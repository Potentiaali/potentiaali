import React, { useState } from "react";
import { Localized } from "fluent-react/compat";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CompanyPage = () => {
  const companies = useSelector(state => state.company.companies);
  const [inputText, setInputText] = useState("");
  return (
    <>
      <section className="app-section">
        <h1>
          <Localized id="companies-title-text">Companies</Localized>
        </h1>
      </section>
      <section className="app-section">
        <input
          className="all-companies-filter"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Search..."
        />
      </section>
      <section className="app-section">
        <div className="all-companies-list">
          {[...companies.sort((a, b) => a.name.localeCompare(b.name))]
            .filter(company =>
              company.name.toLowerCase().includes(inputText.toLowerCase())
            )
            .map(company => (
              <div className="all-companies-list--company" key={company.id}>
                <Link to={"/company/" + company.id}>{company.name}</Link>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default CompanyPage;
