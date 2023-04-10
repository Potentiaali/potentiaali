import React from "react"
import propTypes from "prop-types"
import styles from "./ScheduleSlot.module.scss"
import classNames from "classnames"
import { format } from "date-fns"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import LanguageString from "../LanguageString"
import "./ScheduleGrid.scss"

const getHoursAndMinutes = (inputDate) => {
  return format(inputDate, "HHmm")
}

const getFrom = (inputDate) => {
  return `from-${getHoursAndMinutes(inputDate)}`
}

const getTo = (inputDate) => {
  return `to-${getHoursAndMinutes(inputDate)}`
}

const ScheduleSlot = ({
  id,
  companyName,
  title,
  startTime,
  endTime,
  location,
  hideDetails,
  hideTime
}) => {
  const fromClass = getFrom(startTime)
  const toClass = getTo(endTime)
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.slot, fromClass, toClass)}>
      <div className={styles["slot-bg-1"]}></div>
      <div className={styles["slot-bg-2"]}></div>
      <div className={styles["slot-content"]}>
        <ul className={styles["slot-info"]}>
          <li className={classNames(styles["slot-title"])}>
            <LanguageString languageObject={title} />
          </li>
          {companyName !== "" && (
            <li className={styles["slot-company"]}>
              <span className={styles["slot-info-title"]}>
                <i className="fas fa-briefcase"></i>
              </span>
              <span className={styles["slot-info-value"]}>{companyName}</span>
            </li>
          )}
          {hideTime === false && (
            <li className={styles["slot-time"]}>
              <span className={styles["slot-info-title"]}>
                <i className="fas fa-clock"></i>
              </span>
              <span className={styles["slot-info-value"]}>
                <time>{format(startTime, "HH.mm")}</time> -{" "}
                <time>{format(endTime, "HH.mm")}</time>
              </span>
            </li>
          )}
          {location !== "" && (
            <li className={styles["slot-location"]}>
              <span className={styles["slot-info-title"]}>
                <i className="fas fa-home"></i>
              </span>
              <span className={styles["slot-info-value"]}>{location}</span>
            </li>
          )}
          {hideDetails === false && (
            <li className={styles["slot-link"]}>
              <Link to={"/schedule/" + id}>
                <span className={styles["slot-info-title"]}>
                  <i className="fas fa-external-link-alt"></i>
                </span>
                <span className={styles["slot-info-value"]}>
                  <span>{t("schedule-slot-details")}</span>
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

ScheduleSlot.propTypes = {
  id: propTypes.number.isRequired,
  companyName: propTypes.string.isRequired,
  title: propTypes.object.isRequired,
  startTime: propTypes.any.isRequired,
  endTime: propTypes.any.isRequired,
  location: propTypes.string.isRequired,
  hideDetails: propTypes.bool.isRequired,
  hideTime: propTypes.bool.isRequired
}

export default ScheduleSlot
