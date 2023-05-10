import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Clock.module.scss'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { useTranslation } from 'react-i18next'
dayjs.extend(isSameOrBefore)

const formatClock = (eventDate) => {
  const eventDay = dayjs(eventDate).format('YYYY-MM-DD HH:mm:ss')
    const today = dayjs().format('YYYY-MM-DD HH:mm:ss')
    if (dayjs(eventDay).isSameOrBefore(dayjs(today))) {
      return [0, 0, 0, 0]
    } else if (dayjs(eventDay).isAfter(dayjs(today))) {
      const diff = dayjs(eventDay).diff(dayjs(today), 'days', true)
      const seconds = Math.floor(diff * 24 * 60 * 60) % 60
      const minutes = Math.floor(diff * 24 * 60) % 60
      const hours = Math.floor(diff * 24) % 24
      const days = Math.floor(diff)
 
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

  const [seconds, minutes, hours, days] = timeUntil

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
