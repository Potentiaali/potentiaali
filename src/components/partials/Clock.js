import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Clock.module.scss";
import moment from "moment";
import "moment/locale/fi";
import "moment/locale/en-gb";
import { Localized } from "fluent-react/compat";

const Clock = ({ eventDate }) => {
  const [timeUntil, setUntil] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDay = moment(eventDate, "DD.MM.YYYY");
      const today = moment().format("YYYY-MM-DD HH:mm:ss");
      if (eventDay.isSameOrBefore(today)) {
        setUntil([0, 0, 0, 0]);
      } else if (eventDay.isAfter(today)) {
        const remaining = eventDay.diff(today);
        let seconds = Math.floor(remaining / 1000);
        let minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        let hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        const days = Math.floor(hours / 24);
        hours = hours % 24;
        setUntil([seconds, minutes, hours, days]);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [seconds, hours, minutes, days] = timeUntil;

  return (
    <p className={styles.clock}>
      {days}{" "}
      {
        <Localized id="days-text" $days={days}>
          {"päivää"}
        </Localized>
      }{" "}
      {hours}{" "}
      {
        <Localized id="hours-text" $hours={hours}>
          {"tuntia"}
        </Localized>
      }{" "}
      {minutes}{" "}
      {
        <Localized id="minutes-text" $minutes={minutes}>
          {"minuuttia"}
        </Localized>
      }{" "}
      {seconds}{" "}
      {
        <Localized id="seconds-text" $seconds={seconds}>
          {"sekuntia"}
        </Localized>
      }
    </p>
  );
};

Clock.propTypes = {
  intl: PropTypes.any,
  eventDate: PropTypes.string.isRequired
};

export default Clock;
