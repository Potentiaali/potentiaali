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
          <h2>Back to schedule</h2>
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
        <p>
          <b>
            <Localized id="event-location">Sijainti</Localized>:{" "}
          </b>
          {event.location}
        </p>
        <p>
          <b>{<Localized id="event-time">Aika</Localized>}: </b>
          <time>{format(event.startTime, "HH.mm")}</time> -{" "}
          <time>{format(event.endTime, "HH.mm")}</time>
        </p>
        {event.language && (
          <p>
            <b>
              <Localized id="event-language">Kieli</Localized>
            </b>
            : <Language lang={event.language} />
          </p>
        )}
        {event.link && (
          <p>
            <b>
              <Localized id="event-registration-link">
                Ilmoittautumislinkki
              </Localized>
              :{" "}
              <a
                className="basic-link break-word"
                href={event.link}
                target="__blank"
              >
                {event.link}
              </a>
            </b>
          </p>
        )}
        {event.speakers && (
          <p>
            <b>
              <Localized id="event-speakers">Puhujat</Localized>
            </b>
            : {event.speakers}
          </p>
        )}
      </section>
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
