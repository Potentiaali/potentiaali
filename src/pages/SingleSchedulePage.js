import React from "react";
import { connect } from "react-redux";
import flatMap from "lodash/flatMap";
import { FormattedMessage } from "react-intl";
import { Language } from "../components/partials/Language";

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
      <div className="page" style={{ paddingBottom: 50, paddingTop: 50 }}>
        <FormattedMessage
          id="singleSchedule.eventNotFound"
          defaultMessage="Tapahtumaa ei löydy"
        />
      </div>
    );
  }
  if (!schedule) {
    return (
      <div className="page" style={{ paddingBottom: 50, paddingTop: 50 }}>
        <FormattedMessage
          id="singleSchedule.emptySchedule"
          defaultMessage="Aikataulu on tyhjä"
        />
      </div>
    );
  }
  const singleSchedule = mapSchedule(schedule).find(
    singleSchedule => singleSchedule.id === match.params.id
  );
  if (!singleSchedule) {
    return (
      <div className="page" style={{ paddingBottom: 50, paddingTop: 20 }}>
        <FormattedMessage
          id="singleSchedule.eventNotFound"
          defaultMessage="Tapahtumaa ei löydy"
        />
      </div>
    );
  }
  return (
    <div className="page" style={{ paddingBottom: 50, paddingTop: 20 }}>
      <h1>{singleSchedule.name}</h1>
      <h3>{singleSchedule.description}</h3>
      <b>
        {
          <FormattedMessage
            id="singleSchedule.location"
            defaultMessage="Sijainti"
          />
        }
        :{" "}
      </b>
      {singleSchedule.stage}
      <br />
      <b>
        {<FormattedMessage id="singleSchedule.time" defaultMessage="Aika" />}:{" "}
      </b>
      {singleSchedule.start} - {singleSchedule.end}
      <br />
      {singleSchedule.language && (
        <span>
          <b>
            <FormattedMessage
              id="singleSchedule.language"
              defaultMessage="Kieli"
            />
          </b>
          : <Language lang={singleSchedule.language} />
        </span>
      )}
      {singleSchedule.language && <br />}
      {singleSchedule.link && (
        <b>
          <FormattedMessage
            id="singleSchedule.linkText"
            defaultMessage="Ilmoittautumislinkki"
          />
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
            <FormattedMessage
              id="singleSchedule.speakersText"
              defaultMessage="Puhujat"
            />
          </b>
          : {singleSchedule.speakers}
        </span>
      )}
      {singleSchedule.speakers && <br />}
      <b>
        {
          <FormattedMessage
            id="singleSchedule.description"
            defaultMessage="Kuvaus"
          />
        }
      </b>
      <br/>
      {singleSchedule.fullDescription ? (
        <pre>{singleSchedule.fullDescription}</pre>
      ) : (
        <FormattedMessage
          id="singleSchedule.noDescription"
          defaultMessage="(Ei kuvausta)"
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    schedule: state.schedule.schedule
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleSchedulePage);
