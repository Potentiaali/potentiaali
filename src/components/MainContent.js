import React from "react";
import PropTypes from "prop-types";
import Companies from "./../components/partials/Companies";
import { Program } from "./../components/partials/Program";
import classNames from "classnames";
import config from "../data/config.json";
import { Localized } from "fluent-react/compat";

const ilmot = [
  {
    companies: "IBM Finland, Kesko Oyj, OP, Sogeti Finland",
    full: true,
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLSdPMgRDVtP9wZfuIIwU8PI2L1jvvm4uHtoPPHdAfCtiBXPKIQ/viewform"
  },
  {
    companies: "Columbia Road, DAIN Studios, Eatech Oy, Futurice",
    full: true,
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLSe2GCC_oX7-6MXYy09n_2jh0Q45y_kp428rEsI0IG3kKfRSqg/viewform"
  },
  {
    companies:
      "Codento Oy, Eficode Oy, Keskinäinen Eläkevakuutusyhtiö Ilmarinen, Nokia",
    full: true,
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLScCo3P5ChXFCBnJaG_ami7o_gyKq3BaSkebQf6yBR6HqqLpwg/viewform"
  },
  {
    companies: "Bluefors Oy, Robu Oy, Terveystalo, Vincit",
    full: true,
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLSep5C00FYF65G3ASsL2xgOlx9nxdBnjRdVAc6_8sR3aRgo8Mg/viewform"
  },
  {
    companies: "Accenture Oy, Dream Broker, Streamr",
    full: true,
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLSfNzFvJr-uRFstrnZbTgN083jKpTczPrYDOgDiouyYAjhF8_Q/viewform"
  },
  {
    companies:
      "Devisioona Oy, Digia Oyj, Foreca Oy, Reaktor Innovations Oy, VALA Group",
    full: true,
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLSfSV90aukQxJ47Mtfnbqo0L-J6MD6d5J46I6sZr4nXyZUqF6Q/viewform"
  },
  {
    companies:
      "CGI, Perfektio Oy, Siili Solutions Oyj, Taito United Oy, Webscale Oy",
    full: true,
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLSfxrx2I76vNRDzvV8uH8yHpnTIMHODUpABNv5qQV1RRL67e8A/viewform"
  },
  {
    companies:
      "CSC - Tieteen tietotekniikan keskus Oy, Elisa, Trimble Solutions Oy, Funidata Oy & Unigrafia Oy",
    full: true,
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLSdOuXXx0AcgOjIU4ux1vNqnH1ENdIAHgbnfNsBQ49Pwbm4-Sg/viewform"
  }
];

const open = false;

const SpeedRekryItem = ({ companies, full, link, open, id }) => {
  const luokka = "item-" + id;

  return (
    <div
      className={classNames({
        speedRekryItem: true,
        [luokka]: true
      })}
    >
      <div className="speedRekryItemTitle">
        <Localized id="group-text">Ryhmä</Localized>
        &nbsp; {id}
      </div>
      <div className="speedRekryItemDesc">
        {companies}
        <a
          href={open ? link : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames("speedRekryLink", {
            "rekry-disabled": !open || full
          })}
        >
          {!full ? (
            <Localized id="signup-text">Ilmoittaudu</Localized>
          ) : (
            <Localized id="full-text">Täynnä</Localized>
          )}
        </a>
        {!open && (
          <Localized id="registration-opens">
            Ilmoittautuminen aukeaa myöhemmin syksyllä
          </Localized>
        )}
      </div>
    </div>
  );
};

SpeedRekryItem.propTypes = {
  companies: PropTypes.string.isRequired,
  full: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

// TODO: Move to its own component
const SpeedRekry = () => (
  <div>
    <h2>
      <Localized id="register-to-speed-rekry">
        Ilmoittaudu Speed rekryyn
      </Localized>
    </h2>
    <div className="speedRekryGrid">
      {ilmot.map((ilmo, i) => (
        <SpeedRekryItem key={i} {...ilmo} id={i + 1} open={open} />
      ))}
    </div>
  </div>
);

const MainContent = () => {
  return (
    <section className="">
      <div className="container">
        <Localized id="title-1">
          <h2>Mikä on Kumpulan Potentiaali?</h2>
        </Localized>
        <br />
        <Localized id="main-part-1">
          <p>
            Kumpulan Potentiaali on Helsingin yliopiston
            matemaattis-luonnontieteellisen tiedekunnan opiskelijoiden
            järjestämä työelämä- ja rekrytointitapahtuma, joka järjestettiin
            toista kertaa syksyllä 2018. Toista kertaa järjestetyksi
            tapahtumaksi Kumpulan Potentiaali 2018 oli menestys niin
            opiskelijoiden kuin yritysvieraidenkin puolesta.
          </p>
        </Localized>
        <br />
        <Localized id="main-part-2">
          <p>
            Palautteeseen vastanneista yritysvieraista yli 95% arvioi tapahtuman
            annin olevan vähintään hinnan väärti, ja joka neljäs koki tapahtuman
            annin olevan erinomainen hintaan nähden.
          </p>
        </Localized>
        <br />
        <br />
        {config.showProgramView === true && <Program />}
        <br />
        <br />
        {config.speedRekryOpen === true && <SpeedRekry />}
        <br />
        <br />
        {config.showCompanies === true && <Companies />}
        <br />
        <br />
        <Localized id="event-info-title">
          <h3>Tapahtumatiedot</h3>
        </Localized>
        <ul>
          <li>
            <Localized id="event-location">
              <b>Sijainti</b>
            </Localized>
            :{" "}
            <Localized id="event-location-value">
              Kumpulan kampus (Gustaf Hällströmin katu 2)
            </Localized>
          </li>
          <li>
            <Localized id="event-time">
              <b>Aika</b>
            </Localized>
            : <Localized id="event-day">Torstai</Localized> {config.eventDate}{" "}
            <Localized id="event-time-prefix">klo</Localized> {config.eventTime}
          </li>
        </ul>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  intl: PropTypes.any
};

export default MainContent;
