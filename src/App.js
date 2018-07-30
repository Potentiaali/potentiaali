import React, { Component } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import logos from "./data/logos.json";
import config from "./data/config.json";
import menu from "./data/menu.json";
import moment from "moment";
import "moment/locale/fi";
import "moment/locale/en-gb";

moment.locale(config.defaultLocale);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockInterval: null,
      daysUntil: 0,
      hoursUntil: 0,
      minutesUntil: 0,
      secondsUntil: 0,
      menuOpen: false
    };
  }

  /**
   * Clear clock update interval
   *
   * @memberof App
   */
  componentWillMount() {
    if (this.state.clockInterval !== null) {
      clearInterval(this.state.clockInterval);
      this.setState({ clockInterval: null });
    }
  }

  /**
   * Initialize clock interval
   *
   * @memberof App
   */
  componentDidMount() {
    if (this.state.clockInterval === null) {
      const interval = setInterval(() => {
        const eventDay = moment(config.eventDate, "DD.MM.YYYY");
        const today = moment().format("YYYY-MM-DD HH:mm:ss");
        if (eventDay.isSame(today)) {
          this.setState({
            daysUntil: 0,
            hoursUntil: 0,
            minutesUntil: 0,
            secondsUntil: 0
          });
        } else {
          const remaining = eventDay.diff(today);
          let seconds = Math.floor(remaining / 1000);
          let minutes = Math.floor(seconds / 60);
          seconds = seconds % 60;
          let hours = Math.floor(minutes / 60);
          minutes = minutes % 60;
          const days = Math.floor(hours / 24);
          hours = hours % 24;
          this.setState({
            daysUntil: days,
            hoursUntil: hours,
            minutesUntil: minutes,
            secondsUntil: seconds
          });
        }
      }, 1000);
      this.setState({ clockInterval: interval });
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
          daysUntil={this.state.daysUntil}
          hoursUntil={this.state.hoursUntil}
          minutesUntil={this.state.minutesUntil}
          secondsUntil={this.state.secondsUntil}
        />
        <MainContent />
        <Contact />
        <Footer logos={logos} />
      </React.Fragment>
    );
  }
}

export default App;
