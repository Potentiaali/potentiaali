import React from "react";
import { connect } from "react-redux";
import flatMap from "lodash/flatMap";
import { FormattedMessage } from "react-intl";

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
      <div className="page" style={{ paddingBottom: 50, paddingTop: 50 }}>
        <FormattedMessage
          id="singleSchedule.eventNotFound"
          defaultMessage="Tapahtumaa ei löydy"
        />
      </div>
    );
  }
  return (
    <div className="page" style={{ paddingBottom: 50, paddingTop: 50 }}>
      <h1>{singleSchedule.name}</h1>
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
      <b>
        {
          <FormattedMessage
            id="singleSchedule.description"
            defaultMessage="Kuvaus"
          />
        }
      </b>
      <p>
        {singleSchedule.description || (
          <FormattedMessage
            id="singleSchedule.noDescription"
            defaultMessage="(Ei kuvausta)"
          />
        )}
      </p>
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
