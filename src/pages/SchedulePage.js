import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeSchedule } from "../reducers/ScheduleReducer";
import ScheduleLabels from "../components/schedule/ScheduleLabels";
import styles from "./SchedulePage.module.scss";
import ScheduleSlot from "../components/schedule/ScheduleSlot";

export const SchedulePage = ({ schedule }) => (
  <div className={styles.schedule}>
    <ScheduleLabels />
    <div className={styles["schedule-slots"]}>
      {schedule.map(entry => (
        <ScheduleSlot
          key={entry.id}
          companyName={entry.companyName}
          location={entry.location}
          title={entry.title}
          startTime={entry.startTime}
          endTime={entry.endTime}
        />
      ))}
    </div>
  </div>
);

SchedulePage.propTypes = {
  schedule: PropTypes.any
};

const mapStateToProps = state => {
  return {
    schedule: state.schedule.schedule
  };
};

const mapDispatchToProps = {
  changeSchedule
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchedulePage);
