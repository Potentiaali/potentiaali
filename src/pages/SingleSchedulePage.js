import React from "react";
import { useSelector } from "react-redux";
import { Language } from "../components/partials/Language";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { Localized } from "fluent-react/compat";
import { Link } from "react-router-dom";
import LanguageString from "../components/LanguageString";

const SingleSchedulePage = ({ match }) => {
  const events = useSelector(state => state.schedule.events);
  if (!match) {
    return <Localized id="event-not-found">Tapahtumaa ei löydy</Localized>;
  }
  if (events.length === 0) {
    return <Localized id="empty-schedule">Aikataulu on tyhjä</Localized>;
  }
  const event = events.find(evt => Number(evt.id) === Number(match.params.id));
  if (event === undefined) {
    return <Localized id="event-not-found">Tapahtumaa ei löydy</Localized>;
  }
  return (
    <>
      <section className="app-section">
        <Link to="/schedule">
          <h3>
            <i className="fas fa-chevron-left"></i>&nbsp;&nbsp;
            <Localized id="back-to-schedule">Back to schedule</Localized>
          </h3>
        </Link>
      </section>
      <section className="app-section">
        <h1>
          <LanguageString languageObject={event.title} />
        </h1>
        <p>
          <LanguageString languageObject={event.description} />
        </p>
      </section>
      <section className="app-section">
        <ul className="event-info">
          <li>
            <span className="event-info-title">
              <i className="fas fa-map-marked-alt"></i>
            </span>
            <span className="event-info-value">
              <Localized id="event-location">Location</Localized>
              {": "}
              {event.location}
            </span>
          </li>
          <li>
            <span className="event-info-title">
              <i className="fas fa-clock"></i>
            </span>
            <span className="event-info-value">
              <Localized id="event-time">Time</Localized>
              {": "}
              <time>{format(event.startTime, "HH.mm")}</time> -{" "}
              <time>{format(event.endTime, "HH.mm")}</time>
            </span>
          </li>
          {event.language && (
            <li>
              <span className="event-info-title">
                <i className="fas fa-globe"></i>
              </span>
              <span className="event-info-value">
                <Localized id="event-language">Language</Localized>
                {": "}
                <Language lang={event.language} />
              </span>
            </li>
          )}
          {event.speakers.length > 0 && (
            <li>
              <span className="event-info-title">
                <i className="fas fa-users"></i>
              </span>
              <span className="event-info-value">
                <Localized id="event-speakers">Speakers</Localized>
                {": "}
                {event.speakers.join(", ")}
              </span>
            </li>
          )}
        </ul>
      </section>
      {event.link !== "" && (
        <section className="app-section">
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i>&nbsp;
            <Localized id="enrollment-link">
              Tämä ohjelmanumero vaatii ulkoisen ilmoittautumisen.
              Ilmoittaudu painamalla tätä linkkiä.
            </Localized>
          </a>
        </section>
      )}
      <section className="app-section">
        <h2>{<Localized id="event-description">Kuvaus</Localized>}</h2>
        <p>
          {event.fullDescription ? (
            <LanguageString languageObject={event.fullDescription} />
          ) : (
            <Localized id="event-no-description">(Ei kuvausta)</Localized>
          )}
        </p>
      </section>
    </>
  );
};

SingleSchedulePage.propTypes = {
  match: PropTypes.any
};

export default SingleSchedulePage;
