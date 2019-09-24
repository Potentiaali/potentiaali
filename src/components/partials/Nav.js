import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setLanguage, changeLocales } from "../../reducers/LocalizationReducer";
import { Localized } from "fluent-react/compat";
import styles from "./Nav.module.scss";

const Nav = ({
  lang,
  setLanguage,
  currentLocales,
  isFetching,
  changeLocales
}) => {
  const [current] = currentLocales;
  const available = ["en-US", "fi"];
  const next = available[(available.indexOf(current) + 1) % available.length];

  const menu = [
    {
      id: "frontPage",
      name: "Etusivu",
      linkName: "",
      link: "/",
      disabled: false
    },
    {
      id: "companyRegistrationPage",
      name: "Yritysilmoittautuminen",
      linkName: "registration",
      link: "/registration",
      disabled: false
    },
    {
      id: "schedulePage",
      name: "Aikataulu",
      linkName: "schedule",
      link: "/schedule",
      disabled: false
    },
    {
      id: "mapPage",
      name: "Kartta",
      linkName: "map",
      link: "/map",
      disabled: false
    },
    {
      id: "fieldsOfStudiesPage",
      name: "Aineiden esittely",
      linkName: "subjects",
      link: "/subjects",
      disabled: false
    }
  ];
  /*
  <nav id="navigation">
            <ul id="navigation-link-container">
                <li class="menu-toggle-container"><label for="navigation-toggle" id="navigation-menu-toggle"><i
                            class="fas fa-bars"></i> Menu</label></li>
                <li><a href="index.html" class="nav-link"><i class="fas fa-home"></i> Frontpage</a></li>
                <li><a href="#" class="nav-link"><i class="fas fa-clipboard-list"></i> Registration</a></li>
                <li><a href="schedule.html" class="nav-link"><i class="fas fa-clock"></i> Schedule</a></li>
                <li><a href="map.html" class="nav-link"><i class="fas fa-map"></i> Event map</a></li>
                <li><a href="#" class="nav-link"><i class="fas fa-university"></i> Fields of study</a></li>
            </ul>
        </nav>
  */

  return (
    <nav className={styles.navigation}>
      <ul className={styles["navigation-link-container"]}>
        <li className={styles["menu-toggle-container"]}>
          <label htmlFor="navigation-toggle" id="navigation-menu-toggle">
            <i className="fas fa-bars"></i> Menu
          </label>
        </li>
        {menu &&
          menu.map(
            menuItem =>
              !menuItem.disabled && (
                <li key={menuItem.id}>
                  <Localized id={menuItem.id}>
                    <NavLink
                      exact
                      to={menuItem.link}
                      key={menuItem.linkName}
                      activeClassName="active-link"
                      className={styles["nav-link"]}
                    >
                      {menuItem.name}
                    </NavLink>
                  </Localized>
                </li>
              )
          )}
      </ul>
      <Localized id="changeLocaleButton" $locale={next}>
        <button
          className={styles.changeLanguage}
          onClick={() => {
            setLanguage(lang === "fi" ? "en" : "fi");
            changeLocales([next]);
          }}
          disabled={isFetching}
        >
          {"$locale"}
        </button>
      </Localized>
    </nav>
  );
};

Nav.propTypes = {
  intl: PropTypes.any,
  lang: PropTypes.string,
  setLanguage: PropTypes.func,
  currentLocales: PropTypes.array,
  isFetching: PropTypes.bool,
  changeLocales: PropTypes.func
};

const mapStateToProps = state => {
  return {
    lang: state.localization.lang,
    currentLocales: state.localization.currentLocales,
    isFetching: state.localization.isFetching
  };
};

const mapDispatchToProps = {
  setLanguage,
  changeLocales
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);
