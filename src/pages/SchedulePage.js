import React from "react";
import PropTypes from "prop-types";
import { SingleSchedule } from "../components/schedule/SingleSchedule";
import { connect } from "react-redux";
import { changeSchedule } from "../reducers/ScheduleReducer";

const uuidv4 = require("uuid/v4");

export const SchedulePage = ({ schedule, selected, type }) => {
  let scheduleComponent = null;
  let allEvents = {};
  switch (selected) {
    case "all":
      Object.keys(schedule).forEach(single => {
        Object.keys(schedule[single]).forEach(stage => {
          const randomKey = uuidv4();
          allEvents = { ...allEvents, [randomKey]: schedule[single][stage] };
        });
      });
      scheduleComponent = (
        <SingleSchedule
          start={"12:00"}
          end={"23:00"}
          scheduleData={allEvents}
          selected={selected}
          type={type}
        />
      );
      break;
    case "":
      scheduleComponent = <div>No match</div>;
      break;
    default:
      scheduleComponent = (
        <SingleSchedule
          start={"12:00"}
          end={"20:00"}
          scheduleData={schedule[selected]}
          selected={selected}
          type={type}
        />
      );
      break;
  }
  return (
    <div className="page">
      {/*<h1>{formatMessage(messages.scheduleTitle)}</h1>*/}
      {scheduleComponent}
    </div>
  );
};

SchedulePage.propTypes = {
  schedule: PropTypes.any,
  selected: PropTypes.string,
  type: PropTypes.string,
  changeSchedule: PropTypes.func,
  intl: PropTypes.object
};

const mapStateToProps = state => {
  return {
    schedule: state.schedule.schedule,
    selected: state.schedule.selectedSchedule,
    type: state.schedule.type
  };
};

const mapDispatchToProps = {
  changeSchedule
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchedulePage);
