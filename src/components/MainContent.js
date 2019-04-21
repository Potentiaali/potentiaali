import React from "react";
import PropTypes from "prop-types";
import Companies from "./../components/partials/Companies";
import { Program } from "./../components/partials/Program";
import classNames from "classnames";
import { injectIntl, defineMessages, FormattedMessage } from "react-intl";
import config from "../data/config.json";
import ilmo from "../data/ilmo.json";

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
    <div className="speedRekryGrid">
      <div className="speedRekryItem item-1">
        <div className="speedRekryItemTitle">
          <FormattedMessage
            id="main.speedRekryRegistrationGroup"
            defaultMessage="Ryhmä"
          />
          &nbsp;1
        </div>
        <div className="speedRekryItemDesc">
          {ilmo.ilmo1.companies}
          <a
            href={ilmo.open ? ilmo.ilmo1.link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("speedRekryLink", {
              "rekry-disabled": !ilmo.open || ilmo.ilmo1.full
            })}
          >
            {!ilmo.ilmo1.full ? (
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
          {!ilmo.open && (
            <FormattedMessage
              id="main.speedRekryRegistrationTime"
              defaultMessage="Ilmoittautuminen aukeaa 17.11. klo 12:00"
            />
          )}
        </div>
      </div>
      <div className="speedRekryItem item-2">
        <div className="speedRekryItemTitle">
          <FormattedMessage
            id="main.speedRekryRegistrationGroup"
            defaultMessage="Ryhmä"
          />
          &nbsp;2
        </div>
        <div className="speedRekryItemDesc">
          {ilmo.ilmo2.companies}
          <a
            href={ilmo.open ? ilmo.ilmo2.link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("speedRekryLink", {
              "rekry-disabled": !ilmo.open || ilmo.ilmo2.full
            })}
          >
            {!ilmo.ilmo2.full ? (
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
          {!ilmo.open && (
            <FormattedMessage
              id="main.speedRekryRegistrationTime"
              defaultMessage="Ilmoittautuminen aukeaa 17.11. klo 12:00"
            />
          )}
        </div>
      </div>
      <div className="speedRekryItem item-3">
        <div className="speedRekryItemTitle">
          <FormattedMessage
            id="main.speedRekryRegistrationGroup"
            defaultMessage="Ryhmä"
          />
          &nbsp;3
        </div>
        <div className="speedRekryItemDesc">
          {ilmo.ilmo3.companies}
          <a
            href={ilmo.open ? ilmo.ilmo3.link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("speedRekryLink", {
              "rekry-disabled": !ilmo.open || ilmo.ilmo3.full
            })}
          >
            {!ilmo.ilmo3.full ? (
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
          {!ilmo.open && (
            <FormattedMessage
              id="main.speedRekryRegistrationTime"
              defaultMessage="Ilmoittautuminen aukeaa 17.11. klo 12:00"
            />
          )}
        </div>
      </div>
      <div className="speedRekryItem item-4">
        <div className="speedRekryItemTitle">
          <FormattedMessage
            id="main.speedRekryRegistrationGroup"
            defaultMessage="Ryhmä"
          />
          &nbsp;4
        </div>
        <div className="speedRekryItemDesc">
          {ilmo.ilmo4.companies}
          <a
            href={ilmo.open ? ilmo.ilmo4.link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("speedRekryLink black", {
              "rekry-disabled": !ilmo.open || ilmo.ilmo4.full
            })}
          >
            {!ilmo.ilmo4.full ? (
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
          {!ilmo.open && (
            <FormattedMessage
              id="main.speedRekryRegistrationTime"
              defaultMessage="Ilmoittautuminen aukeaa 17.11. klo 12:00"
            />
          )}
        </div>
      </div>
      <div className="speedRekryItem item-5">
        <div className="speedRekryItemTitle">
          <FormattedMessage
            id="main.speedRekryRegistrationGroup"
            defaultMessage="Ryhmä"
          />
          &nbsp;5
        </div>
        <div className="speedRekryItemDesc">
          {ilmo.ilmo5.companies}
          <a
            href={ilmo.open ? ilmo.ilmo5.link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("speedRekryLink", {
              "rekry-disabled": !ilmo.open || ilmo.ilmo5.full
            })}
          >
            {!ilmo.ilmo5.full ? (
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
          {!ilmo.open && (
            <FormattedMessage
              id="main.speedRekryRegistrationTime"
              defaultMessage="Ilmoittautuminen aukeaa 17.11. klo 12:00"
            />
          )}
        </div>
      </div>
      <div className="speedRekryItem item-6">
        <div className="speedRekryItemTitle">
          <FormattedMessage
            id="main.speedRekryRegistrationGroup"
            defaultMessage="Ryhmä"
          />
          &nbsp;6
        </div>
        <div className="speedRekryItemDesc">
          {ilmo.ilmo6.companies}
          <a
            href={ilmo.open ? ilmo.ilmo6.link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("speedRekryLink", {
              "rekry-disabled": !ilmo.open || ilmo.ilmo6.full
            })}
          >
            {!ilmo.ilmo6.full ? (
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
          {!ilmo.open && (
            <FormattedMessage
              id="main.speedRekryRegistrationTime"
              defaultMessage="Ilmoittautuminen aukeaa 17.11. klo 12:00"
            />
          )}
        </div>
      </div>
      <div className="speedRekryItem item-7">
        <div className="speedRekryItemTitle">
          <FormattedMessage
            id="main.speedRekryRegistrationGroup"
            defaultMessage="Ryhmä"
          />
          &nbsp;7
        </div>
        <div className="speedRekryItemDesc">
          {ilmo.ilmo7.companies}
          <a
            href={ilmo.open ? ilmo.ilmo7.link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("speedRekryLink", {
              "rekry-disabled": !ilmo.open || ilmo.ilmo7.full
            })}
          >
            {!ilmo.ilmo7.full ? (
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
          {!ilmo.open && (
            <FormattedMessage
              id="main.speedRekryRegistrationTime"
              defaultMessage="Ilmoittautuminen aukeaa 17.11. klo 12:00"
            />
          )}
        </div>
      </div>
      <div className="speedRekryItem item-8">
        <div className="speedRekryItemTitle">
          <FormattedMessage
            id="main.speedRekryRegistrationGroup"
            defaultMessage="Ryhmä"
          />
          &nbsp;8
        </div>
        <div className="speedRekryItemDesc">
          {ilmo.ilmo8.companies}
          <a
            href={ilmo.open ? ilmo.ilmo8.link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("speedRekryLink black", {
              "rekry-disabled": !ilmo.open || ilmo.ilmo8.full
            })}
          >
            {!ilmo.ilmo8.full ? (
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
          {!ilmo.open && (
            <FormattedMessage
              id="main.speedRekryRegistrationTime"
              defaultMessage="Ilmoittautuminen aukeaa 17.11. klo 12:00"
            />
          )}
        </div>
      </div>
    </div>
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
