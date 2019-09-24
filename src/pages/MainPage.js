import React from "react";
import { Page } from "../components/Page";
import Logo from "../components/partials/Logo";
import Companies from "../components/partials/Companies";
import { Program } from "../components/partials/Program";
import SpeedRekry from "../components/partials/SpeedRekry";
import config from "../data/config.json";
import { Localized } from "fluent-react/compat";

const MainPage = () => (
  <Page fullWidth noTopPadding>
    <Logo />
    <div className="app-statistics">
      <div className="single-stat">
        <span className="single-stat_main">1000+</span>
        <span className="single-stat_secondary">
          Student attendees<sup>*</sup>
        </span>
      </div>
      <div className="single-stat">
        <span className="single-stat_main">45+</span>
        <span className="single-stat_secondary">
          Exhibitors<sup>*</sup>
        </span>
      </div>
    </div>
    <section className="app-section">
      <small>
        <sup>*</sup>Average per year
      </small>
    </section>
    <section className="app-section">
      <div className="registration-notification">
        <h2>
          <Localized id="registration-notification-text">
            Yritysilmoittautuminen Kumpulan Potentiaali 2019 -tapahtumaan aukeaa
            10.6.2019 klo 12:00 &#34;Yritysilmoittautuminen&#34; -sivulla
          </Localized>
        </h2>
      </div>
      <Localized id="title-1">
        <h1>Mikä on Kumpulan Potentiaali?</h1>
      </Localized>
      <Localized id="main-part-1">
        <p>
          Kumpulan Potentiaali on Helsingin yliopiston
          matemaattis-luonnontieteellisen tiedekunnan opiskelijoiden järjestämä
          työelämä- ja rekrytointitapahtuma, joka järjestettiin toista kertaa
          syksyllä 2018. Toista kertaa järjestetyksi tapahtumaksi Kumpulan
          Potentiaali 2018 oli menestys niin opiskelijoiden kuin
          yritysvieraidenkin puolesta.
        </p>
      </Localized>
      <Localized id="main-part-2">
        <p>
          Palautteeseen vastanneista yritysvieraista yli 95% arvioi tapahtuman
          annin olevan vähintään hinnan väärti, ja joka neljäs koki tapahtuman
          annin olevan erinomainen hintaan nähden.
        </p>
      </Localized>
      <section className="app-section">
        <h1>Event information</h1>
        <p>
          <ul className="event-info">
            <li>
              <i className="fas fa-map-marked-alt"></i>{" "}
              <Localized id="event-location-value">
                Kumpulan kampus (Gustaf Hällströmin katu 2)
              </Localized>
            </li>
            <li>
              <i className="fas fa-calendar-day"></i>{" "}
              <time dateTime="2019-11-14 10:00">
                <Localized id="event-day">Torstai</Localized> {config.eventDate}
              </time>
            </li>
            <li>
              <i className="fas fa-clock"></i>{" "}
              <Localized id="event-time-prefix">klo</Localized>{" "}
              {config.eventTime}
            </li>
            <li>
              <a
                className="link-btn"
                alt="Show on Google Maps"
                href="https://goo.gl/maps/1rh5pJXHwgtVffeGA"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-map-marker-alt"></i>{" "}
                <Localized id="show-on-google-maps">
                  Show on Google Maps
                </Localized>
              </a>
            </li>
            <li>
              <a
                className="link-btn"
                alt="Add the event to your calendar"
                href="Kumpulan_Potentiaali_2019.ics"
                target="_blank"
              >
                <i className="fas fa-calendar-plus"></i> Add the event to your
                calendar
              </a>
            </li>
          </ul>
        </p>
      </section>
      {config.showProgramView === true && <Program />}
      {config.showSpeedRekry === true && (
        <SpeedRekry open={config.speedRekryOpen} />
      )}
      {config.showCompanies === true && <Companies />}
    </section>
  </Page>
);

export default MainPage;
