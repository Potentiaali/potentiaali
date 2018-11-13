import React from "react";
import Companies from "./../components/partials/Companies";
import { Program } from "./../components/partials/Program";

import { injectIntl, defineMessages } from "react-intl";

const mainMessages = defineMessages({
  title: {
    id: "main.title1",
    defaultMessage: "Kumpulan Potentiaali vuodelle 2018 on täynnä!"
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

export default injectIntl(MainContent);
