import React from "react";
import companies from "../../data/companies.json";
import { Localized } from "fluent-react/compat";

const Companies = () => (
  <section className="two-columned">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Localized id="companies-title-text">
            <h3>
              Vuoden 2019 Kumpulan Potentiaali -tapahtumaan osallistuvat
              yritykset
            </h3>
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
        </div>
      </div>
    </div>
  </section>
);

export default Companies;
