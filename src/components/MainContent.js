import React from "react";
import PropTypes from "prop-types";
import Companies from "./../components/partials/Companies";
import { Program } from "./../components/partials/Program";

import { injectIntl, defineMessages, FormattedMessage } from "react-intl";

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
        <Program />
        <br />
        <br />
        <h2>
          <FormattedMessage
            id="main.speedRekryRegistrationTitle"
            defaultMessage="Ilmoittaudu Speed rekryyn"
          />
        </h2>
        <div className="speedRekryGrid">
          <div className="speedRekryItem item-1 full">
            <div className="speedRekryItemTitle">
              <FormattedMessage
                id="main.speedRekryRegistrationGroup"
                defaultMessage="Ryhmä"
              />
              &nbsp;1
            </div>
            <div className="speedRekryItemDesc">
              IBM Finland, Kesko Oyj, OP, Sogeti Finland
              <a href="#" target="_blank" className="speedRekryLink">
                <FormattedMessage
                  id="main.speedRekryRegistrationSignUp"
                  defaultMessage="Ilmoittaudu"
                />
              </a>
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
              Columbia Road, Eatech Oy, Futurice, SAS Institute Oy
              <a href="#" target="_blank" className="speedRekryLink">
                <FormattedMessage
                  id="main.speedRekryRegistrationSignUp"
                  defaultMessage="Ilmoittaudu"
                />
              </a>
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
              Codento Oy, Eficode Oy, Keskinäinen Eläkevakuutusyhtiö Ilmarinen,
              Nokia
              <a href="#" target="_blank" className="speedRekryLink">
                <FormattedMessage
                  id="main.speedRekryRegistrationSignUp"
                  defaultMessage="Ilmoittaudu"
                />
              </a>
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
              Bluefors Oy, Robu Oy, Terveystalo, Vincit
              <a href="#" target="_blank" className="speedRekryLink black">
                <FormattedMessage
                  id="main.speedRekryRegistrationSignUp"
                  defaultMessage="Ilmoittaudu"
                />
              </a>
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
              Accenture Oy, DAIN Studios, Dream Broker, Solita Oy, Streamr
              <a href="#" target="_blank" className="speedRekryLink">
                <FormattedMessage
                  id="main.speedRekryRegistrationSignUp"
                  defaultMessage="Ilmoittaudu"
                />
              </a>
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
              Devisioona Oy, Digia Oyj, Foreca Oy, Reaktor Innovations Oy, VALA
              Group
              <a href="#" target="_blank" className="speedRekryLink">
                <FormattedMessage
                  id="main.speedRekryRegistrationSignUp"
                  defaultMessage="Ilmoittaudu"
                />
              </a>
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
              CGI, Perfektio Oy, Siili Solutions Oyj, Taito United Oy, Webscale
              Oy
              <a href="#" target="_blank" className="speedRekryLink">
                <FormattedMessage
                  id="main.speedRekryRegistrationSignUp"
                  defaultMessage="Ilmoittaudu"
                />
              </a>
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
              CSC - Tieteen tietotekniikan keskus Oy, Elisa, Trimble Solutions
              Oy, Funidata Oy & Unigrafia Oy
              <a href="#" target="_blank" className="speedRekryLink black">
                <FormattedMessage
                  id="main.speedRekryRegistrationSignUp"
                  defaultMessage="Ilmoittaudu"
                />
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Companies />
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
            {formatMessage(mainMessages.eventDay)} 22.11.2018
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
