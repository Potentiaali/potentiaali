import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { defineMessages, injectIntl } from "react-intl";
import styles from "./Clock.module.scss";
import moment from "moment";
import "moment/locale/fi";
import "moment/locale/en-gb";

// TODO: Move translations to Fluent syntax

const clockMessages = defineMessages({
  days: {
    id: "clock.days",
    defaultMessage: "päivää"
  },
  hours: {
    id: "clock.hours",
    defaultMessage: "tuntia"
  },
  minutes: {
    id: "clock.minutes",
    defaultMessage: "minuuttia"
  },
  seconds: {
    id: "clock.seconds",
    defaultMessage: "sekuntia"
  }
});

const Clock = ({ intl: { formatMessage }, eventDate }) => {
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

  return (
    <p className={styles.clock}>
      {timeUntil[3]} {formatMessage(clockMessages.days)} {timeUntil[2]}{" "}
      {formatMessage(clockMessages.hours)} {timeUntil[1]}{" "}
      {formatMessage(clockMessages.minutes)} {timeUntil[0]}{" "}
      {formatMessage(clockMessages.seconds)}
    </p>
  );
};

Clock.propTypes = {
  intl: PropTypes.any,
  eventDate: PropTypes.string.isRequired
};

export default injectIntl(Clock);
