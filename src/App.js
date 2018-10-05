import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import logos from "./data/logos.json";
import config from "./data/config.json";
import { connect } from "react-redux";
import moment from "moment";
import {
  resetClock,
  setClockData,
  setClockInterval
} from "./reducers/ClockReducer";
import "moment/locale/fi";
import "moment/locale/en-gb";
import { MainPage } from "./pages/MainPage";
import Contact from "./components/Contact";
import { ScheduleNav } from "./components/ScheduleNav";
import { SubjectsPage } from "./pages/SubjectsPage";

moment.locale(config.defaultLocale);

class App extends Component {
  /**
   * Initialize clock interval
   *
   * @memberof App
   */
  componentDidMount() {
    if (this.props.clockInterval === null) {
      const interval = setInterval(() => {
        const eventDay = moment(config.eventDate, "DD.MM.YYYY");
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
      }, 1000000000);
      this.props.setClockInterval(interval);
    } else {
      clearInterval(this.props.clockInterval);
      this.props.setClockInterval(null);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
                eventDate={config.eventDate}
                daysUntil={this.props.daysUntil}
                hoursUntil={this.props.hoursUntil}
                minutesUntil={this.props.minutesUntil}
                secondsUntil={this.props.secondsUntil}
              />
            )}
          />
          <Route path="/schedule/:scheduleName" component={ScheduleNav} />
          <Route exact path="/schedule" render={() => <div>Hello</div>} />
          <Route exact path="/subjects" component={SubjectsPage} />
          <Route
            render={() => (
              <div
                style={{
                  marginTop: 25
                }}
              >
                <h1>Sivua ei löydy / Page not found</h1>
              </div>
            )}
          />
        </Switch>
        <Contact />
        <Footer logos={logos} />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  daysUntil: PropTypes.number,
  secondsUntil: PropTypes.number,
  hoursUntil: PropTypes.number,
  minutesUntil: PropTypes.number,
  setClockInterval: PropTypes.func,
  resetClock: PropTypes.func,
  setClockData: PropTypes.func,
  clockInterval: PropTypes.any
};

const MapStateToProps = state => {
  return {
    clockInterval: state.clock.clockInterval,
    daysUntil: state.clock.daysUntil,
    hoursUntil: state.clock.hoursUntil,
    minutesUntil: state.clock.minutesUntil,
    secondsUntil: state.clock.secondsUntil
  };
};

const MapDispatchToProps = {
  resetClock,
  setClockData,
  setClockInterval
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(App);
