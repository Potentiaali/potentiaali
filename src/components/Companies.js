import React from "react";
const companies = require("./../data/companies.json");
const config = require("./../data/config.json");

const Companies = () => {
  return (
    <section className="two-columned">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>
              Vuoden {config.year} Kumpulan potentiaali -tapahtuman yritykset
            </h3>
            {companies.map(company => (
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
                    maxHeight: 80,
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
