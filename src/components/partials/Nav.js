import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setLanguage, changeLocales } from "../../reducers/LocalizationReducer";
import { Localized } from "fluent-react/compat";
import styles from "./Nav.module.scss";
import classNames from "classnames";

const Nav = ({ currentLocales, isFetching, changeLocales }) => {
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
        <li>
          <Localized id="changeLocaleButton" $locale={next}>
            <button
              className={classNames(
                styles["nav-link"],
                styles["localization-button"]
              )}
              onClick={() => changeLocales([next])}
              disabled={isFetching}
            >
              {"$locale"}
            </button>
          </Localized>
        </li>
      </ul>
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
