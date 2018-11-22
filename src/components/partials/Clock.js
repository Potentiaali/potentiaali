import React from "react";
import PropTypes from "prop-types";
import {
  resetClock,
  setClockData,
  setClockInterval
} from "./../../reducers/ClockReducer";
import { connect } from "react-redux";
// import moment from "moment";
import "moment/locale/fi";
import "moment/locale/en-gb";

import { injectIntl } from "react-intl";
/*
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
*/
class Clock extends React.Component {
  /**
   * Initialize clock interval
   *
   * @memberof App
   */
  componentDidMount() {
    /*
    if (this.props.clockInterval === null) {
      const interval = setInterval(() => {
        const eventDay = moment(this.props.eventDate, "DD.MM.YYYY");
        const today = moment().format("YYYY-MM-DD HH:mm:ss");
        if (eventDay.isSame(today)) {
          this.props.resetClock();
        } else {
          const remaining = eventDay.diff(today);
          let seconds = Math.floor(remaining / 1000);
          let minutes = Math.floor(seconds / 60);
          seconds = seconds % 60;
          let hours = Math.floor(minutes / 60);
          minutes = minutes % 60;
          const days = Math.floor(hours / 24);
          hours = hours % 24;
          this.props.setClockData({
            daysUntil: days,
            hoursUntil: hours,
            minutesUntil: minutes,
            secondsUntil: seconds
          });
        }
      }, 1000);
      this.props.setClockInterval(interval);
    } else {
      clearInterval(this.props.clockInterval);
      this.props.setClockInterval(null);
    }
    */
  }

  render() {
    return (
      <p className="clock">
        {/*{this.props.daysUntil} {formatMessage(clockMessages.days)}{" "}
        {this.props.hoursUntil} {formatMessage(clockMessages.hours)}{" "}
        {this.props.minutesUntil} {formatMessage(clockMessages.minutes)}{" "}
    {this.props.secondsUntil} {formatMessage(clockMessages.seconds)}*/}
      </p>
    );
  }
}

Clock.propTypes = {
  daysUntil: PropTypes.number,
  hoursUntil: PropTypes.number,
  minutesUntil: PropTypes.number,
  secondsUntil: PropTypes.number,
  clockInterval: PropTypes.any,
  resetClock: PropTypes.func,
  setClockInterval: PropTypes.func,
  setClockData: PropTypes.func,
  eventDate: PropTypes.string,
  intl: PropTypes.any
};

const mapStateToProps = state => {
  return {
    clockInterval: state.clock.clockInterval,
    daysUntil: state.clock.daysUntil,
    hoursUntil: state.clock.hoursUntil,
    minutesUntil: state.clock.minutesUntil,
    secondsUntil: state.clock.secondsUntil
  };
};

const mapDispatchToProps = {
  resetClock,
  setClockData,
  setClockInterval
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Clock));
