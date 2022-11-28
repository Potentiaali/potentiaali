import React from "react";
import { useSelector } from "react-redux";
import { Language } from "../components/partials/Language";
import { format } from "date-fns";
import { Localized } from "@fluent/react";
import { Link,useParams } from "react-router-dom";

import LanguageString from "../components/LanguageString";

const SingleSchedulePage = () => {
  const events = useSelector(state => state.schedule.events)
  let params = useParams()
  const eventId = params.id
  console.log(events)
  console.log(eventId)
  if (!eventId) {
    return <Localized id="event-not-found">Tapahtumaa ei löydy</Localized>;
  }
  if (events.length === 0) {
    return <Localized id="empty-schedule">Aikataulu on tyhjä</Localized>;
  }
  const event = events.find(evt => Number(evt.id) === Number(eventId));
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
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
        <p>
          <LanguageString languageObject={event.description} />
        </p>
        </pre>
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
                <ul className="event-speakers-container">
                  {event.speakers.map(speaker => (
                    <li key={speaker}>{speaker}</li>
                  ))}
                </ul>
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
              Tämä ohjelmanumero vaatii ulkoisen ilmoittautumisen. Ilmoittaudu
              painamalla tätä linkkiä.
            </Localized>
          </a>
        </section>
      )}
      <section className="app-section">
        <h2>{<Localized id="event-description">Kuvaus</Localized>}</h2>
        <pre>
          <p className="event-full-description-container">
            {event.fullDescription ? (
              <LanguageString languageObject={event.fullDescription} />
            ) : (
              <Localized id="event-no-description">(Ei kuvausta)</Localized>
            )}
          </p>
        </pre>
      </section>
    </>
  );
};

export default SingleSchedulePage;
