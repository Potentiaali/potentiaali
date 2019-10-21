import React from "react";
import Logo from "../components/partials/Logo";
import Companies from "../components/partials/Companies";
import { Program } from "../components/partials/Program";
import SpeedRekry from "../components/partials/SpeedRekry";
import config from "../data/config.json";
import { Localized } from "fluent-react/compat";

const MainPage = () => (
  <>
    <Logo />
    <div className="app-statistics">
      <div className="single-stat">
        <span className="single-stat_main">1000+</span>
        <span className="single-stat_secondary">
          <Localized id="student-attendees">Student attendees</Localized>
          <sup>*</sup>
        </span>
      </div>
      <div className="single-stat">
        <span className="single-stat_main">45+</span>
        <span className="single-stat_secondary">
          <Localized id="exhibitors">Exhibitors</Localized>
          <sup>*</sup>
        </span>
      </div>
    </div>
    <section className="app-section">
      <small>
        <sup>*</sup>
        <Localized id="average-per-year">Average per year</Localized>
      </small>
    </section>
    <section className="app-section">
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
    </section>
    <section className="app-section">
      <Localized id="event-info-title">
        <h1>Event information</h1>
      </Localized>
      <p>
        <ul className="event-info">
          <li>
            <span className="event-info-title">
              <i className="fas fa-map-marked-alt"></i>
            </span>
            <span className="event-info-value">
              <Localized id="event-location">Location</Localized>
              {": "}
              <Localized id="event-location-value">
                Kumpulan kampus (Gustaf Hällströmin katu 2)
              </Localized>
            </span>
          </li>
          <li>
            <span className="event-info-title">
              <i className="fas fa-calendar-day"></i>
            </span>
            <span className="event-info-value">
              <Localized id="event-date">Date</Localized>
              {": "}
              <time dateTime="2019-11-14 10:00">
                <Localized id="event-day">Torstai</Localized> {config.eventDate}
              </time>
            </span>
          </li>
          <li>
            <span className="event-info-title">
              <i className="fas fa-clock"></i>
            </span>
            <span className="event-info-value">
              <Localized id="event-time">Time</Localized>
              {": "}
              <Localized id="event-time-prefix">klo</Localized>{" "}
              {config.eventTime}
            </span>
          </li>
          <li>
            <a
              className="link-btn"
              alt="Show on Google Maps"
              href="https://goo.gl/maps/1rh5pJXHwgtVffeGA"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="event-info-title">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span className="event-info-value">
                <Localized id="show-on-google-maps">
                  Show on Google Maps
                </Localized>
              </span>
            </a>
          </li>
          <li>
            <a
              className="link-btn"
              alt="Add the event to your calendar"
              href="Kumpulan_Potentiaali_2019.ics"
              target="_blank"
            >
              <span className="event-info-title">
                <i className="fas fa-calendar-plus"></i>
              </span>
              <span className="event-info-value">
                <Localized id="add-to-calendar">
                  Add the event to your calendar (.ics)
                </Localized>
              </span>
            </a>
          </li>
        </ul>
      </p>
    </section>
    <section className="app-section">
      {config.showProgramView === true && <Program />}
    </section>
    <section className="app-section">
      {config.showSpeedRekry === true && (
        <SpeedRekry open={config.speedRekryOpen} />
      )}
    </section>
    <section className="app-section">
      {config.showCompanies === true && <Companies />}
    </section>
  </>
);

export default MainPage;
