import React from "react";
import propTypes from "prop-types";
import styles from "./ScheduleSlot.module.scss";
import "./ScheduleGrid.scss";
import classNames from "classnames";
import { format } from "date-fns";

const getHoursAndMinutes = inputDate => {
  return format(inputDate, "HHmm");
};

const getFrom = inputDate => {
  return `from-${getHoursAndMinutes(inputDate)}`;
};

const getTo = inputDate => {
  return `to-${getHoursAndMinutes(inputDate)}`;
};

const ScheduleSlot = ({ companyName, title, startTime, endTime, location }) => {
  const fromClass = getFrom(startTime);
  const toClass = getTo(endTime);
  return (
    <div className={classNames(styles.slot, fromClass, toClass)}>
      <div className={styles["slot-bg-1"]}></div>
      <div className={styles["slot-bg-2"]}></div>
      <div className={styles["slot-content"]}>
        <span className={styles["slot-title"]}>{title}</span>
        <span className={styles["slot-company"]}>
          <i className="fas fa-briefcase"></i> {companyName}
        </span>
        <span className={styles["slot-time"]}>
          <i className="fas fa-clock"></i>{" "}
          <time>{format(startTime, "HH.mm")}</time> -{" "}
          <time>{format(endTime, "HH.mm")}</time>
        </span>
        <span className={styles["slot-location"]}>
          <i className="fas fa-home"></i> {location}
        </span>
        <span className={styles["slot-link"]}>
          <a href="single_schedule.html">
            <i className="fas fa-external-link-alt"></i>
            Details
          </a>
        </span>
      </div>
    </div>
  );
};

ScheduleSlot.propTypes = {
  companyName: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  startTime: propTypes.string.isRequired,
  endTime: propTypes.string.isRequired,
  location: propTypes.string.isRequired
};

export default ScheduleSlot;
