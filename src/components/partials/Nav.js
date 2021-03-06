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
      disabled: false,
      icon: "fa-home",
      ariaLabel: {
        fi: "Etusivu",
        "en-US": "Frontpage",
      },
    },
    /*{
      id: "companyPage",
      name: "Yritykset",
      linkName: "companies",
      link: "/companies",
      disabled: false,
      icon: "fa-file-alt"
    },
    {
      id: "companyRegistrationPage",
      name: "Yritysilmoittautuminen",
      linkName: "registration",
      link: "/registration",
      disabled: true,
      icon: "fa-file-alt"
    },
    {
      id: "schedulePage",
      name: "Aikataulu",
      linkName: "schedule",
      link: "/schedule",
      disabled: false,
      icon: "fa-clock"
    },
    {
      id: "mapPage",
      name: "Kartta",
      linkName: "map",
      link: "/map",
      disabled: false,
      icon: "fa-map"
    },*/
    {
      id: "fieldsOfStudiesPage",
      name: "Aineiden esittely",
      linkName: "subjects",
      link: "/subjects",
      disabled: false,
      icon: "fa-dna",
      ariaLabel: {
        fi: "Aineiden esittely",
        "en-US": "Subjects",
      },
    },
  ];

  return (
    <>
      <input
        className={styles["navigation-toggle"]}
        type="checkbox"
        id="navigation-toggle"
      />
      <nav className={styles.navigation}>
        <ul className={styles["navigation-link-container"]}>
          <li className={styles["menu-toggle-container"]}>
            <label
              htmlFor="navigation-toggle"
              className={styles["navigation-menu-toggle"]}
            >
              <i
                className={classNames(
                  "fas",
                  "fa-times",
                  styles["navigation-close-cross"]
                )}
              ></i>
              <i
                className={classNames(
                  "fas",
                  "fa-bars",
                  styles["navigation-open-hamburger"]
                )}
              ></i>{" "}
              <span className={classNames(styles["navigation-icon-label"])}>
                Menu
              </span>
            </label>
          </li>
          {menu &&
            menu.map(
              (menuItem) =>
                !menuItem.disabled && (
                  <li key={menuItem.id}>
                    <NavLink
                      tabIndex={0}
                      exact
                      to={menuItem.link}
                      key={menuItem.linkName}
                      activeClassName="active-link"
                      className={styles["nav-link"]}
                      aria-label={menuItem.ariaLabel[current]}
                    >
                      {menuItem.icon !== undefined && (
                        <i className={classNames("fas", menuItem.icon)}>
                          &nbsp;&nbsp;
                        </i>
                      )}
                      <Localized id={menuItem.id}>{menuItem.name}</Localized>
                    </NavLink>
                  </li>
                )
            )}
          <li>
            <button
              className={classNames(
                styles["nav-link"],
                styles["localization-button"]
              )}
              onClick={() => changeLocales([next])}
              disabled={isFetching}
              aria-label={`Change page language to ${next}`}
            >
              <i className="fas fa-globe">&nbsp;&nbsp;</i>
              <Localized id="changeLocaleButton" $locale={next}>
                {"$locale"}
              </Localized>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

Nav.propTypes = {
  intl: PropTypes.any,
  lang: PropTypes.string,
  setLanguage: PropTypes.func,
  currentLocales: PropTypes.array,
  isFetching: PropTypes.bool,
  changeLocales: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    currentLocales: state.localization.currentLocales,
    isFetching: state.localization.isFetching,
  };
};

const mapDispatchToProps = {
  setLanguage,
  changeLocales,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
