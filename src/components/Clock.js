import React from "react";

const Clock = props => {
  return (
    <p className="clock">
      {props.daysUntil} päivää {props.hoursUntil} tuntia {props.minutesUntil}{" "}
      minuuttia {props.secondsUntil} sekuntia
    </p>
  );
};

export default Clock;
