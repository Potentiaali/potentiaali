import React from "react";
import MainContent from "./../components/MainContent";
import config from "./../data/config.json";
import { Hero } from "../components/Hero";
import PropTypes from "prop-types";

export const MainPage = props => {
  return (
    <React.Fragment>
      {" "}
      <Hero
        eventDate={config.eventDate}
        daysUntil={props.daysUntil}
        hoursUntil={props.hoursUntil}
        minutesUntil={props.minutesUntil}
        secondsUntil={props.secondsUntil}
      />
      <MainContent />
    </React.Fragment>
  );
};

MainPage.propTypes = {
  daysUntil: PropTypes.number.isRequired,
  hoursUntil: PropTypes.number.isRequired,
  minutesUntil: PropTypes.number.isRequired,
  secondsUntil: PropTypes.number.isRequired,
  eventDate: PropTypes.string.isRequired
};
