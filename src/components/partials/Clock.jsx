import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Clock.module.scss'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { useTranslation } from 'react-i18next'
dayjs.extend(isSameOrBefore)

const formatClock = (eventDate) => {
  const eventDay = dayjs(eventDate).format('YYYY-MM-DD')
    const today = dayjs().format('YYYY-MM-DD HH:mm:ss')
    if (dayjs(eventDay).isSameOrBefore(dayjs(today))) {
      return [0, 0, 0, 0]
    } else if (dayjs(eventDay).isAfter(dayjs(today))) {
      const remaining = dayjs(eventDay).diff(dayjs(today))
      let seconds = Math.floor(remaining / 1000)
      let minutes = Math.floor(seconds / 60)
      seconds = seconds % 60
      let hours = Math.floor(minutes / 60)
      minutes = minutes % 60
      const days = Math.floor(hours / 24)
      hours = hours % 24
      return [seconds, minutes, hours, days]
    }
}

const Clock = ({ eventDate }) => {
  const [timeUntil, setUntil] = useState(formatClock(eventDate))
  const { t } = useTranslation()

  useEffect(() => {
    const interval = setInterval(() => {
      setUntil(formatClock(eventDate))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [eventDate])

  const [seconds, hours, minutes, days] = timeUntil

  return (
    <div className={styles.clock}>
      <div className={styles.text}>
        <p>{days}</p>
        <p>{t('days-text', { count: days })}</p>
      </div>
      <div className={styles.text}>
        <p>{hours}</p>
        <p>{t('hours-text', { count: hours })}</p>
      </div>
      <div className={styles.text}>
        <p>{minutes}</p>
        <p>{t('minutes-text', { count: minutes })}</p>
      </div>
      <div className={styles.text}>
        <p>{seconds}</p>
        <p>{t('seconds-text', { count: seconds })}</p>
      </div>
    </div>
  )
}

Clock.propTypes = {
  intl: PropTypes.any,
  eventDate: PropTypes.string.isRequired
}

export default Clock
