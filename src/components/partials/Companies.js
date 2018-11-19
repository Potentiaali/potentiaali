import React from "react";
import { FormattedMessage } from "react-intl";
import companies from "../../data/companies.json";

const Companies = () => {
  return (
    <section className="two-columned">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>
              {
                <FormattedMessage
                  id="companies.title"
                  defaultMessage="Vuoden 2018 Kumpulan potentiaali -tapahtuman yritykset"
                />
              }
            </h3>
            {companies.sort((a,b) => a.alt.localeCompare(b.alt)).map(company => (
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
                    maxHeight: 90,
                    height: "auto",
                    width: "auto",
                    maxWidth: 120
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
