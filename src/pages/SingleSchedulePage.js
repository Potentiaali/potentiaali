import React from "react";
import { connect } from "react-redux";
import flatMap from "lodash/flatMap";
import { Language } from "../components/partials/Language";
import PropTypes from "prop-types";
import { Localized } from "fluent-react/compat";
import { Page } from "../components/Page";

// A mapping function to parse the schedule json into a better format.
const mapSchedule = schedule =>
  flatMap(
    flatMap(Object.values(schedule), stages => Object.values(stages)),
    inner2 => [
      ...inner2.schedule.map(event => {
        return { ...event, stage: inner2.name };
      })
    ]
  );

const SingleSchedulePage = ({ schedule, match }) => {
  if (!match) {
    return (
      <Page usePadding>
        <Localized id="event-not-found">Tapahtumaa ei löydy</Localized>
      </Page>
    );
  }
  if (!schedule) {
    return (
      <Page usePadding>
        <Localized id="empty-schedule">Aikataulu on tyhjä</Localized>
      </Page>
    );
  }
  const singleSchedule = mapSchedule(schedule).find(
    singleSchedule => singleSchedule.id === match.params.id
  );
  if (!singleSchedule) {
    return (
      <Page usePadding>
        <Localized id="event-not-found">Tapahtumaa ei löydy</Localized>
      </Page>
    );
  }
  return (
    <Page usePadding style={{ paddingBottom: 50, paddingTop: 20 }}>
      <h1>{singleSchedule.name}</h1>
      <h3>{singleSchedule.description}</h3>
      <b>
        <Localized id="event-location">Sijainti</Localized>:{" "}
      </b>
      {singleSchedule.stage}
      <br />
      <b>{<Localized id="event-time">Aika</Localized>}: </b>
      {singleSchedule.start} - {singleSchedule.end}
      <br />
      {singleSchedule.language && (
        <span>
          <b>
            <Localized id="event-language">Kieli</Localized>
          </b>
          : <Language lang={singleSchedule.language} />
        </span>
      )}
      {singleSchedule.language && <br />}
      {singleSchedule.link && (
        <b>
          <Localized id="event-registration-link">
            Ilmoittautumislinkki
          </Localized>
          :{" "}
          <a
            className="basic-link break-word"
            href={singleSchedule.link}
            target="__blank"
          >
            {singleSchedule.link}
          </a>
        </b>
      )}
      {singleSchedule.link && <br />}
      {singleSchedule.speakers && (
        <span>
          <b>
            <Localized id="event-speakers">Puhujat</Localized>
          </b>
          : {singleSchedule.speakers}
        </span>
      )}
      {singleSchedule.speakers && <br />}
      <b>{<Localized id="event-description">Kuvaus</Localized>}</b>
      <br />
      {singleSchedule.fullDescription ? (
        <pre>{singleSchedule.fullDescription}</pre>
      ) : (
        <Localized id="event-no-description">(Ei kuvausta)</Localized>
      )}
    </Page>
  );
};

SingleSchedulePage.propTypes = {
  schedule: PropTypes.any,
  match: PropTypes.any
};

const mapStateToProps = state => {
  return {
    schedule: state.schedule.schedule
  };
};

export default connect(mapStateToProps)(SingleSchedulePage);
