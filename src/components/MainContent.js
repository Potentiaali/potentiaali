import React from "react";
import PropTypes from "prop-types";
import Companies from "./../components/partials/Companies";
import { Program } from "./../components/partials/Program";
import { SpeedRekry } from "./../components/partials/SpeedRekry";
import config from "../data/config.json";
import { Localized } from "fluent-react/compat";

const speedRekryIlmot = [
  {
    companies: "Test 1, Test 2, Test 3",
    full: true,
    link: "https://potentiaali.com"
  }
];

const MainContent = () => {
  return (
    <section className="">
      <div className="container" data-testid="MainContent">
        <div
          style={{
            border: "2px solid",
            padding: 10,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginBottom: 30,
            backgroundColor: "#29b6f6",
            color: "black"
          }}
        >
          <h2 style={{ marginBottom: 0 }}>
            <Localized id="registration-notification-text">
              Yritysilmoittautuminen Kumpulan Potentiaali 2019 -tapahtumaan
              aukeaa 10.6.2019 klo 12:00 &#34;Yritysilmoittautuminen&#34;
              -sivulla
            </Localized>
          </h2>
        </div>
        <Localized id="title-1">
          <h1>Mikä on Kumpulan Potentiaali?</h1>
        </Localized>
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
        {config.showSpeedRekry === true && (
          <SpeedRekry ilmot={speedRekryIlmot} open={config.speedRekryOpen} />
        )}
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
