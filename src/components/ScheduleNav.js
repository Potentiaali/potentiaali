import React from "react";
import scheduleData from "./scheduleData";
import { Schedule } from "./../components/Schedule";
import { Link } from "react-router-dom";

const generateLinkText = name => {
  switch (name) {
    case "workshops":
      return "Workshopit";
    case "lectures":
      return "Luennot";
    case "speedDating":
      return "Speed dating";
  }
};

export const ScheduleNav = ({ match }) => {
  return (
    <div className="page">
      <h1>Aikataulu</h1>
      {Object.keys(scheduleData).map(name => (
        <Link
          to={"/schedule/" + name}
          key={name}
          style={{ margin: 20}}
        >
          {generateLinkText(name)}
        </Link>
      ))}
      {match && match.params && match.params.scheduleName ? (
        <Schedule
          start={"14"}
          end={"20"}
          schedule={scheduleData[match.params.scheduleName]}
        />
      ) : (
        <div>No match</div>
      )}
    </div>
  );
};
