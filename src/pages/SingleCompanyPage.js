import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Localized } from "fluent-react/compat";
import { Link, withRouter } from "react-router-dom";
import LanguageString from "../components/LanguageString";
import { BoothBadge } from "../components/partials/badges/BoothBadge";

const SingleCompanyPage = ({ match, history }) => {
  const companies = useSelector(state => state.company.companies);
  if (!match) {
    return <Localized id="company-not-found">Yritystä ei löydy</Localized>;
  }
  if (companies.length === 0) {
    return (
      <Localized id="empty-schedule">Ei yrityksiä järjestelmässä</Localized>
    );
  }
  const company = companies.find(
    cmpny => Number(cmpny.id) === Number(match.params.id)
  );
  if (company === undefined) {
    return <Localized id="company-not-found">Yritystä ei löydy</Localized>;
  }
  return (
    <>
      <section className="app-section">
        <Link to="" onClick={() => history.goBack()}>
          <h3>
            <i className="fas fa-chevron-left"></i>&nbsp;&nbsp;
            <Localized id="go-back">Go back</Localized>
          </h3>
        </Link>
      </section>
      <section className="app-section">
        <h1>{company.name}</h1>
        <p>
          <h2>
            <BoothBadge name={company.booth} />
          </h2>
        </p>
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            display: "inline-block"
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
          <p>
            <LanguageString languageObject={company.description} />
          </p>
        </pre>
      </section>
      <section className="app-section">
        <Link to="/companies">
          <h3>
            <Localized id="go-to-company-listing">
              Go to companies attending Kumpula&apos;s Potential 2019
            </Localized>
          </h3>
        </Link>
      </section>
    </>
  );
};

SingleCompanyPage.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any
};

export default withRouter(SingleCompanyPage);
