import React from "react";
import propTypes from "prop-types";
import styles from "./ScheduleSlot.module.scss";
import "./ScheduleGrid.scss";
import classNames from "classnames";
import { format } from "date-fns";
import LanguageString from "../LanguageString";

const getHoursAndMinutes = inputDate => {
  return format(inputDate, "HHmm");
};

const getFrom = inputDate => {
  return `from-${getHoursAndMinutes(inputDate)}`;
};

const getTo = inputDate => {
  return `to-${getHoursAndMinutes(inputDate)}`;
};

const ScheduleSlot = ({
  companyName,
  title,
  startTime,
  endTime,
  location,
  hideDetails
}) => {
  const fromClass = getFrom(startTime);
  const toClass = getTo(endTime);
  return (
    <div className={classNames(styles.slot, fromClass, toClass)}>
      <div className={styles["slot-bg-1"]}></div>
      <div className={styles["slot-bg-2"]}></div>
      <div className={styles["slot-content"]}>
        <ul className={styles["slot-info"]}>
          <li className={classNames(styles["slot-title"])}>
            <LanguageString languageObject={title} />
          </li>
          {companyName !== "" && (
            <li className={styles["slot-company"]}>
              <span className={styles["slot-info-title"]}>
                <i className="fas fa-briefcase"></i>
              </span>
              {companyName}
            </li>
          )}
          <li className={styles["slot-time"]}>
            <span className={styles["slot-info-title"]}>
              <i className="fas fa-clock"></i>
            </span>
            <time>{format(startTime, "HH.mm")}</time> -{" "}
            <time>{format(endTime, "HH.mm")}</time>
          </li>
          {location !== "" && (
            <li className={styles["slot-location"]}>
              <span className={styles["slot-info-title"]}>
                <i className="fas fa-home"></i>
              </span>
              {location}
            </li>
          )}
          {hideDetails === false && (
            <li className={styles["slot-link"]}>
              <a href="single_schedule.html">
                <span className={styles["slot-info-title"]}>
                  <i className="fas fa-external-link-alt"></i>
                </span>
                Details
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

ScheduleSlot.propTypes = {
  companyName: propTypes.string.isRequired,
  title: propTypes.object.isRequired,
  startTime: propTypes.any.isRequired,
  endTime: propTypes.any.isRequired,
  location: propTypes.string.isRequired,
  hideDetails: propTypes.bool.isRequired
};

export default ScheduleSlot;
