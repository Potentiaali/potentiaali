import React from "react";
import PropTypes from "prop-types";
import Companies from "./../components/partials/Companies";
import { Program } from "./../components/partials/Program";
import classNames from "classnames";
import { injectIntl, defineMessages, FormattedMessage } from "react-intl";
import config from "../data/config.json";

let ilmot = [
  {
    "companies": "IBM Finland, Kesko Oyj, OP, Sogeti Finland",
    "full": true,
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSdPMgRDVtP9wZfuIIwU8PI2L1jvvm4uHtoPPHdAfCtiBXPKIQ/viewform"
  }, {
    "companies": "Columbia Road, DAIN Studios, Eatech Oy, Futurice",
    "full": true,
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSe2GCC_oX7-6MXYy09n_2jh0Q45y_kp428rEsI0IG3kKfRSqg/viewform"
  }, {
    "companies": "Codento Oy, Eficode Oy, Keskinäinen Eläkevakuutusyhtiö Ilmarinen, Nokia",
    "full": true,
    "link": "https://docs.google.com/forms/d/e/1FAIpQLScCo3P5ChXFCBnJaG_ami7o_gyKq3BaSkebQf6yBR6HqqLpwg/viewform"
  }, {
    "companies": "Bluefors Oy, Robu Oy, Terveystalo, Vincit",
    "full": true,
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSep5C00FYF65G3ASsL2xgOlx9nxdBnjRdVAc6_8sR3aRgo8Mg/viewform"
  }, {
    "companies": "Accenture Oy, Dream Broker, Streamr",
    "full": true,
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSfNzFvJr-uRFstrnZbTgN083jKpTczPrYDOgDiouyYAjhF8_Q/viewform"
  }, {
    "companies": "Devisioona Oy, Digia Oyj, Foreca Oy, Reaktor Innovations Oy, VALA Group",
    "full": true,
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSfSV90aukQxJ47Mtfnbqo0L-J6MD6d5J46I6sZr4nXyZUqF6Q/viewform"
  }, {
    "companies": "CGI, Perfektio Oy, Siili Solutions Oyj, Taito United Oy, Webscale Oy",
    "full": true,
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSfxrx2I76vNRDzvV8uH8yHpnTIMHODUpABNv5qQV1RRL67e8A/viewform"
  }, {
    "companies": "CSC - Tieteen tietotekniikan keskus Oy, Elisa, Trimble Solutions Oy, Funidata Oy & Unigrafia Oy",
    "full": true,
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSdOuXXx0AcgOjIU4ux1vNqnH1ENdIAHgbnfNsBQ49Pwbm4-Sg/viewform"
  }
]

const open = false;


const SpeedRekryItem = ({ companies, full, link, open, id }) => {

  const luokka = "item-" + id;

  return (
    <div className={classNames({
      speedRekryItem: true,
      [luokka]: true
    })}>
      <div className="speedRekryItemTitle">
        <FormattedMessage
          id="main.speedRekryRegistrationGroup"
          defaultMessage="Ryhmä"
        />
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
            <FormattedMessage
              id="main.speedRekryRegistrationSignUp"
              defaultMessage="Ilmoittaudu"
            />
          ) : (
              <FormattedMessage
                id="main.speedRekryRegistrationFull"
                defaultMessage="Täynnä"
              />
            )}
        </a>
        {!open && (
          <FormattedMessage
            id="main.speedRekryRegistrationTime"
            defaultMessage="Ilmoittautuminen aukeaa 17.11. klo 12:00"
          />
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


const mainMessages = defineMessages({
  title: {
    id: "main.title1",
    defaultMessage: "Opiskelija, ennakkoilmoittautuminen alkaa pian!"
  },
  part1: {
    id: "main.part1",
    defaultMessage:
      "Kumpulan Potentiaali on Helsingin yliopiston matemaattis-luonnontieteellisen " +
      "tiedekunnan opiskelijoiden järjestämä työelämä- ja rekrytointitapahtuma, joka järjestettiin " +
      "ensi kertaa viime syksynä. Ensi kertaa järjestetyksi tapahtumaksi Kumpulan Potentiaali 2017 " +
      "oli menestys niin opiskelijoiden kuin yritysvieraidenkin puolesta."
  },
  part2: {
    id: "main.part2",
    defaultMessage:
      "Palautteeseen vastanneista yritysvieraista yli 95% arvioi tapahtuman" +
      "annin olevan vähintään hinnan väärti, ja joka neljäs koki tapahtuman" +
      "annin olevan erinomainen hintaan nähden."
  },
  eventInformationTitle: {
    id: "main.eventInformationTitle",
    defaultMessage: "TAPAHTUMATIEDOT"
  },
  location: {
    id: "main.locationTitle",
    defaultMessage: "Paikka"
  },
  time: {
    id: "main.timeTitle",
    defaultMessage: "Aika"
  },
  eventDay: {
    id: "main.eventDay",
    defaultMessage: "Torstai"
  },
  eventLocation: {
    id: "main.eventLocation",
    defaultMessage: "Kumpulan kampus (Gustaf Hällströmin katu 2)"
  }
});

// TODO: Move to its own component
const SpeedRekry = () => (
  <div>
    <h2>
      <FormattedMessage
        id="main.speedRekryRegistrationTitle"
        defaultMessage="Ilmoittaudu Speed rekryyn"
      />
    </h2>
    {config.speedRekryOpen === true && <div className="speedRekryGrid">
      {ilmot.map((ilmo, i) =>
        <SpeedRekryItem key={i} {...ilmo} id={i + 1} open={open} />
      )}
    </div>}
  </div>
);

const MainContent = ({ intl: { formatMessage } }) => {
  return (
    <section className="">
      <div className="container">
        <h2>{formatMessage(mainMessages.title)}</h2>
        <br />
        <p>{formatMessage(mainMessages.part1)}</p>
        <br />
        <p>{formatMessage(mainMessages.part2)}</p>
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
        <h3>{formatMessage(mainMessages.eventInformationTitle)}</h3>
        <ul>
          <li>
            <b>{formatMessage(mainMessages.location)}</b>:{" "}
            {formatMessage(mainMessages.eventLocation)}
          </li>
          <li>
            <b>{formatMessage(mainMessages.time)}</b>:{" "}
            {formatMessage(mainMessages.eventDay)} {config.eventDate}{" "}
            <FormattedMessage id="hero.timePrefix" defaultMessage="klo" />{" "}
            {config.eventTime}
          </li>
        </ul>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  intl: PropTypes.any
};

export default injectIntl(MainContent);
