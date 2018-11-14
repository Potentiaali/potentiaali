import React from "react";
import PropTypes from "prop-types";
import { SingleSchedule } from "../components/Schedule/SingleSchedule";
import { connect } from "react-redux";
import { changeSchedule } from "../reducers/ScheduleReducer";

const uuidv4 = require("uuid/v4");

/*
const messages = defineMessages({
  scheduleTitle: {
    id: "schedule.title",
    defaultMessage: "Aikataulu"
  },
  all: {
    id: "scheduleNav.all",
    defaultMessage: "Kaikki"
  },
  workshops: {
    id: "scheduleNav.workshops",
    defaultMessage: "Workshopit"
  },
  lectures: {
    id: "scheduleNav.lectures",
    defaultMessage: "Luennot"
  },
  speedDating: {
    id: "scheduleNav.speedDating",
    defaultMessage: "Speed dating"
  },
  notApplicable: {
    id: "scheduleNav.notApplicable",
    defaultMessage: "N/A"
  }
});
*/
/*
const ScheduleNavComponent = ({
  selected,
  schedule,
  changeSchedule,
  intl: { formatMessage }
}) => {
  const generateLinkText = name => {
    switch (name) {
      case "all":
        return formatMessage(messages.all);
      case "workshops":
        return formatMessage(messages.workshops);
      case "lectures":
        return formatMessage(messages.lectures);
      case "speedDating":
        return formatMessage(messages.speedDating);
      default:
        return "N/A";
    }
  };
  const name = "all";
  return (
    <div className="schedule-nav-links">
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
    </div>
  );
};

const ScheduleNav = injectIntl(ScheduleNavComponent);
*/
export const SchedulePage = ({ schedule, selected, type }) => {
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
