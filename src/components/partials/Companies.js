import React from "react";
import companies from "../../data/companies.json";
import { Localized } from "fluent-react/compat";

const Companies = () => (
  <section className="app-section">
    <Localized id="companies-title-text">
      <h1>Vuoden 2019 Kumpulan Potentiaali -tapahtuman yritykset</h1>
    </Localized>
    {companies
      .sort((a, b) => a.alt.localeCompare(b.alt))
      .map(company => (
        <a
          className="company-logo"
          key={company.alt}
          href={company.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt={company.alt}
            src={company.imgSrc}
            style={{
              padding: 25,
              maxHeight: 140,
              height: "auto",
              width: "auto",
              maxWidth: 220
            }}
          />
        </a>
      ))}
  </section>
);

export default Companies;
