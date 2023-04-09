import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"
import setLanguage from "next-translate/setLanguage"
import styles from "./Nav.module.scss"
import classNames from "classnames"
import { useRouter } from "next/router"

const Nav = () => {
  const router = useRouter()
  const { t, i18n } = useTranslation()
  const current = router.locale
  const available = ["en", "fi"]
  const next = available[(available.indexOf(current) + 1) % available.length]

  const changeLanguageHandler = () => {
    console.log(next)
    setLanguage(next)
  }

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
        en: "Frontpage"
      }
    } /*
    {
      id: "companyPage",
      name: "Yritykset",
      linkName: "companies",
      link: "/companies",
      disabled: false,
      icon: "fa-file-alt",
      ariaLabel: {
        fi: "Yrtiykset",
        "en": "Companies",
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
        "en": "Schedule",
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
        "en": "Map",
      },
    },*/,
    {
      id: "fieldsOfStudiesPage",
      name: "Aineiden esittely",
      linkName: "subjects",
      link: "/subjects",
      disabled: false,
      icon: "fa-dna",
      ariaLabel: {
        fi: "Aineiden esittely",
        en: "Subjects"
      }
    }
  ]
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
                    <Link
                      tabIndex={0}
                      exact="true"
                      href={menuItem.link}
                      key={menuItem.linkName}
                      activeclassname="active-link"
                      className={styles["nav-link"]}
                      aria-label={menuItem.ariaLabel[current]}
                    >
                      <p>
                        {menuItem.icon !== undefined && (
                          <i className={classNames("fas", menuItem.icon)}>
                            &nbsp;&nbsp;
                          </i>
                        )}
                        {t(menuItem.id)}
                      </p>
                    </Link>
                  </li>
                )
            )}
          <li>
            <button
              className={classNames(
                styles["nav-link"],
                styles["localization-button"]
              )}
              onClick={() => changeLanguageHandler()}
              aria-label={`Change page language to ${next}`}
            >
              <i className="fas fa-globe">&nbsp;&nbsp;</i>
              <span id="changeLocaleButton">{next}</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

Nav.propTypes = {
  intl: PropTypes.any,
  lang: PropTypes.string,
  setLanguage: PropTypes.func,
  isFetching: PropTypes.bool,
  changeLocales: PropTypes.func
}
export default Nav
