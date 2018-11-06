import React from "react";
import { SingleSchedule } from "../components/Schedule/SingleSchedule";
import { connect } from "react-redux";
import classnames from "classnames";
import { changeSchedule } from "../reducers/ScheduleReducer";
const uuidv4 = require("uuid/v4");

const generateLinkText = name => {
  switch (name) {
    case "all":
      return "Kaikki";
    case "workshops":
      return "Workshopit";
    case "lectures":
      return "Luennot";
    case "speedDating":
      return "Speed dating";
    default:
      return "N/A";
  }
};

const ScheduleNav = ({ selected, schedule, changeSchedule }) => (
  <div className="schedule-nav-links">
    {["all", ...Object.keys(schedule)].map(name => (
      <span
        className={classnames({ "is-selected": selected === name })}
        onClick={e => {
          e.preventDefault();
          changeSchedule(name);
        }}
        key={name}
        style={{ margin: 20 }}
      >
        {generateLinkText(name)}
      </span>
    ))}
  </div>
);

export const SchedulePage = ({ schedule, selected, type, changeSchedule }) => {
  let scheduleComponent = null;
  let allEvents = {};
  switch (selected) {
    case "all":
      Object.keys(schedule).forEach(single => {
        Object.keys(schedule[single]).forEach(stage => {
          const randomKey = uuidv4();
          allEvents[randomKey] = schedule[single][stage];
        });
      });
      scheduleComponent = (
        <SingleSchedule
          start={"12:00"}
          end={"20:00"}
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
      <h1>Aikataulu</h1>
      <ScheduleNav
        selected={selected}
        schedule={schedule}
        changeSchedule={changeSchedule}
      />
      {scheduleComponent}
    </div>
  );
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
