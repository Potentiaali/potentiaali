import React from "react";
import scheduleData from "./scheduleData";
import { Schedule } from "./../components/Schedule";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const generateLinkText = name => {
  switch (name) {
    case "workshops":
      return "Workshopit";
    case "lectures":
      return "Luennot";
    case "speedDating":
      return "Speed dating";
    default:
      return "N/A";
  }
};

const ScheduleNav = () => (
  <div>
    {Object.keys(scheduleData).map(name => (
      <Link to={"/schedule/" + name} key={name} style={{ margin: 20 }}>
        {generateLinkText(name)}
      </Link>
    ))}
  </div>
);

export const SchedulePage = ({ match }) => {
  return (
    <div className="page">
      <h1>Aikataulu</h1>
      <ScheduleNav />
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

export const RoutedSchedulePage = withRouter(SchedulePage);
