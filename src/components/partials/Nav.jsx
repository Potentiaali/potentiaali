import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Nav.module.scss";
import config from "../../data/config.json";
import classNames from "classnames";

const NavToggle = ({ open, onChange }) => {
  const classes = open
    ? classNames("fas", "fa-times", styles["navigation-icon"])
    : classNames("fas", "fa-bars", styles["navigation-icon"])

  return (
    <div onClick={() => onChange(!open)} className={classNames(styles['navigation-toggle'], 'navigation-toggle')}>
      <div className={styles['navigation-icon-wrapper']}>
        <i className={classes} />
      </div>
      <span className={classNames(styles["navigation-icon-label"])}>
        Menu
      </span>
    </div>
  );
};

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState();
  const current = i18n.language;
  const available = ["en", "fi"];
  const next = available[(available.indexOf(current) + 1) % available.length];

  const changeLanguageHandler = () => {
    console.log(next);
    i18n.changeLanguage(next);
  };

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
        en: "Frontpage",
      },
    },
    {
      id: "companyPage",
      name: "Yritykset",
      linkName: "companies",
      link: "/companies",
      disabled: false,
      icon: "fa-file-alt",
      ariaLabel: {
        fi: "Yrtiykset",
        en: "Companies",
      },
    },
    {
      id: "companyRegistrationPage",
      name: "Yritysilmoittautuminen",
      linkName: "registration",
      link: "/registration",
      disabled: false,
      icon: "fa-file-alt",
      ariaLabel: {
        fi: "Yritys ilmoittautuminen",
        "en": "Company registration",
      },
    },
    {
      id: "schedulePage",
      name: "Aikataulu",
      linkName: "schedule",
      link: "/schedule",
      disabled: false,
      icon: "fa-clock",
      ariaLabel: {
        fi: "Aikataulu",
        en: "Schedule",
      },
    },
    {
      id: "mapPage",
      name: "Kartta",
      linkName: "map",
      link: "/map",
      disabled: false,
      icon: "fa-map",
      ariaLabel: {
        fi: "Kartta",
        en: "Map",
      },
    },
    {
      id: "fieldsOfStudiesPage",
      name: "Aineiden esittely",
      linkName: "subjects",
      link: "/subjects",
      disabled: false,
      icon: "fa-dna",
      ariaLabel: {
        fi: "Aineiden esittely",
        en: "Subjects",
      },
    },
  ];
  return (
    <nav className={classNames(styles["navigation"], { [styles["open"]]: open })}>
      <NavToggle onChange={setOpen} open={open} />
      <ul className={styles["navigation-link-container"]}>
        {menu &&
          menu.map(
            (menuItem) =>
              !menuItem.disabled && (
                <li key={menuItem.id}>
                  <NavLink
                    tabIndex={0}
                    exact="true"
                    to={menuItem.link}
                    key={menuItem.linkName}
                    activeClassName="active-link"
                    className={styles["nav-link"]}
                    onClick={() => setOpen(false)}
                    aria-label={menuItem.ariaLabel[current]}
                  >
                    {menuItem.icon !== undefined && (
                      <div className={styles['navigation-icon-wrapper']}>
                        <i className={classNames("fas", menuItem.icon, styles['navigation-icon'])} />
                      </div>
                    )}
                    {t(menuItem.id)}
                  </NavLink>
                </li>
              ),
          )}
        {/*<li>
          <a className={styles["nav-link"]} href={config.studentFeedbackForm}>
            <p>
              <div className={styles['navigation-icon-wrapper']}>
                <i className={classNames("fas", "fa-pen", styles['navigation-icon'])} />
              </div>
              {t("feedback-link")}
            </p>
          </a>
        </li>*/}
      </ul>
      <button
        className={classNames(
          styles["nav-link"],
          styles["localization-button"],
        )}
        data-current={current}
        onClick={() => changeLanguageHandler()}
        aria-label={`Change page language to ${next}`}
      >
        {available.map((lang) => (
          <div className={current === lang ? styles.active : ''}>{lang}</div>
        ))}
      </button>
    </nav>
  );
};

Nav.propTypes = {
  intl: PropTypes.any,
  lang: PropTypes.string,
  setLanguage: PropTypes.func,
  isFetching: PropTypes.bool,
  changeLocales: PropTypes.func,
};
export default Nav;
