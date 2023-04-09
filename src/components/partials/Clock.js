import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styles from "./Clock.module.scss"
import moment from "moment"
import "moment/locale/fi"
import "moment/locale/en-gb"
import useTranslation from "next-translate/useTranslation"

const Clock = ({ eventDate }) => {
  const [timeUntil, setUntil] = useState([0, 0, 0, 0])
  const { t } = useTranslation()

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDay = moment(eventDate, "DD.MM.YYYY")
      const today = moment().format("YYYY-MM-DD HH:mm:ss")
      if (eventDay.isSameOrBefore(today)) {
        setUntil([0, 0, 0, 0])
      } else if (eventDay.isAfter(today)) {
        const remaining = eventDay.diff(today)
        let seconds = Math.floor(remaining / 1000)
        let minutes = Math.floor(seconds / 60)
        seconds = seconds % 60
        let hours = Math.floor(minutes / 60)
        minutes = minutes % 60
        const days = Math.floor(hours / 24)
        hours = hours % 24
        setUntil([seconds, minutes, hours, days])
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [eventDate])

  const [seconds, hours, minutes, days] = timeUntil

  return (
    <p className={styles.clock}>
      {days}
      <p>{t("days-text", days)}</p>
      {hours}
      <p>{t("hours-text", hours)}</p>
      {minutes}
      <p>{t("minutes-text", minutes)}</p>
      {seconds}
      <p>{t("seconds-text", seconds)}</p>
    </p>
  )
}

Clock.propTypes = {
  intl: PropTypes.any,
  eventDate: PropTypes.string.isRequired
}

export default Clock
