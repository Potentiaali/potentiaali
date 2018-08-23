import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import logos from "./data/logos.json";
import config from "./data/config.json";
import menu from "./data/menu.json";
import { connect } from "react-redux";
import moment from "moment";
import {
  resetClock,
  setClockData,
  setClockInterval
} from "./reducers/ClockReducer";
import "moment/locale/fi";
import "moment/locale/en-gb";
import MainPage from "./pages/MainPage";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
/*
import Lectures from "./pages/Lectures";
import Workshops from "./pages/Workshops";
import RekrySpeedDate from "./pages/RekrySpeedDate";
import ForCompanies from "./pages/ForCompanies";
import MarkdownPage from "./components/MarkdownPage";

import testMarkdown from "./data/pages/TestPage.md";*/

moment.locale(config.defaultLocale);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

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
      }, 1000);
      this.props.setClockInterval(interval);
    } else {
      clearInterval(this.props.clockInterval);
      this.props.setClockInterval(null);
    }
  }

  /**
   * Handle menu open & close
   *
   * @param {*} event
   * @memberof App
   */
  handleClick = event => {
    event.preventDefault();
    this.setState(oldState => {
      return {
        menuOpen: !oldState.menuOpen
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Nav
          menu={menu}
          menuOpen={this.state.menuOpen}
          handleClick={this.handleClick}
        />
        <Hero
          eventDate={config.eventDate}
          daysUntil={this.props.daysUntil}
          hoursUntil={this.props.hoursUntil}
          minutesUntil={this.props.minutesUntil}
          secondsUntil={this.props.secondsUntil}
        />
        <Route
          exact
          path=""
          render={() => (
            <MainPage
              daysUntil={this.props.daysUntil}
              hoursUntil={this.props.hoursUntil}
              minutesUntil={this.props.minutesUntil}
              secondsUntil={this.props.secondsUntil}
            />
          )}
        />
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
  clockInterval: PropTypes.object
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
