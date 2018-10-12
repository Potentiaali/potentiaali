import React from "react";
import { SingleSchedule } from "../components/Schedule/SingleSchedule";
import { connect } from "react-redux";
import classnames from "classnames";
import { changeSchedule } from "../reducers/ScheduleReducer";

const generateLinkText = name => {
  switch (name) {
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
    {Object.keys(schedule).map(name => (
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
  return (
    <div className="page">
      <h1>Aikataulu</h1>
      <ScheduleNav
        selected={selected}
        schedule={schedule}
        changeSchedule={changeSchedule}
      />
      {selected !== "" ? (
        <SingleSchedule
          start={"11:00"}
          end={"20:00"}
          scheduleData={schedule}
          selected={selected}
          type={type}
        />
      ) : (
        <div>No match</div>
      )}
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
