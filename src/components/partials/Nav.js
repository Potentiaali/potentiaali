import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setLanguage, changeLocales } from "../../reducers/LocalizationReducer";
import { Localized } from "fluent-react/compat";
import classNames from "classnames";
import styles from "./Nav.module.scss";

const Nav = ({
  lang,
  setLanguage,
  currentLocales,
  isFetching,
  changeLocales
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      id: "fieldsOfStudiesPage",
      name: "Aineiden esittely",
      linkName: "subjects",
      link: "/subjects",
      disabled: false
    }
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles["navigation-container"]} data-testid="Navigation">
        <NavLink to="/" className={styles["nav-logo"]}>
          <img
            className=""
            src="/logos/potentiaali-black.png"
            alt="Kumpulan Potentiaali"
          />
        </NavLink>
        <a
          href="#menu"
          className={styles["mobile-menu"]}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={classNames({
              fa: true,
              "fa-bars": !menuOpen,
              "fa-close": menuOpen,
              "mobile-menu-icon": true
            })}
          />
        </a>
        {menuOpen && (
          <div className={styles["mobile-nav-links"]}>
            {menu &&
              menu.map(
                menuItem =>
                  !menuItem.disabled && (
                    <Localized id={menuItem.id} key={menuItem.id + "_mobile"}>
                      <NavLink
                        exact
                        to={menuItem.link}
                        key={menuItem.linkName}
                        activeClassName="active-link"
                        className={styles["mobile-nav-link"]}
                      >
                        {menuItem.name}
                      </NavLink>
                    </Localized>
                  )
              )}
            <Localized id="changeLocaleButton" $locale={current}>
              <button
                className={styles.changeLanguageMobile}
                onClick={() => {
                  setLanguage("fi");
                  changeLocales([next]);
                }}
                disabled={isFetching}
              >
                {"$locale"}
              </button>
            </Localized>
          </div>
        )}
        <div className={styles["nav-links"]}>
          {menu &&
            menu.map(
              menuItem =>
                !menuItem.disabled && (
                  <Localized id={menuItem.id} key={menuItem.id}>
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
                )
            )}
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
        </div>
      </div>
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
