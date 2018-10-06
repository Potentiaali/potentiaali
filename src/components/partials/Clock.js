import React from "react";
import PropTypes from "prop-types";

const Clock = props => {
  return (
    <p className="clock">
      {props.daysUntil} päivää {props.hoursUntil} tuntia {props.minutesUntil}{" "}
      minuuttia {props.secondsUntil} sekuntia
    </p>
  );
};

Clock.propTypes = {
  daysUntil: PropTypes.number,
  hoursUntil: PropTypes.number,
  minutesUntil: PropTypes.number,
  secondsUntil: PropTypes.number
};

export default Clock;
