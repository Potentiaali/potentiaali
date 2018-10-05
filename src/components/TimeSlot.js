import React from "react";
import "./TimeSlot.scss";
import "./DefaultStyles.scss";

const getDurationInHours = function(start, end) {
  const startTime = {
    hours: parseInt(start.split(".")[0]),
    minutes: isNaN(parseInt(start.split(".")[1]))
      ? 0
      : parseInt(start.split(".")[1])
  };
  const endTime = {
    hours: parseInt(end.split(".")[0]),
    minutes: isNaN(parseInt(end.split(".")[1]))
      ? 0
      : parseInt(end.split(".")[1])
  };

  const endMillis = new Date(0, 0, 0, endTime.hours, endTime.minutes);
  const startMillis = new Date(0, 0, 0, startTime.hours, startTime.minutes);
  return (
    (endMillis.getMilliseconds() - startMillis.getMilliseconds()) / (1000 * 60)
  );
};

export const TimeSlot = ({ content }) => {
  const conditionalStyles = {
    width: getDurationInHours(content.start, content.end) * 6,
    borderWidth: content.name === "" ? 0 : 1,
    backgroundColor: content.name === "" ? "transparent" : "white"
  };

  const containerStyle = {
    flex: 1,
    padding: 10,
    overflow: "hidden",
    border: "2px solid orange",
    margin: 0
  };

  return (
    <div
      className="timeslot-container"
      style={[containerStyle, conditionalStyles]}
    >
      {content.name === "" ? (
        <div />
      ) : (
        <div>
          <span className="title title3">{content.name.toUpperCase()}</span>
          <span className="text">{content.description}</span>
        </div>
      )}
    </div>
  );
};
