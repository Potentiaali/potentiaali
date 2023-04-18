import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Clock.module.scss'
import moment from 'moment'
import 'moment/locale/fi'
import 'moment/locale/en-gb'
import { useTranslation } from 'react-i18next'

const Clock = ({ eventDate }) => {
  const [timeUntil, setUntil] = useState([0, 0, 0, 0])
  const { t } = useTranslation()

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDay = moment(eventDate, 'DD.MM.YYYY')
      const today = moment().format('YYYY-MM-DD HH:mm:ss')
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

  const style = {
    margin: '0.5em'
  }

  return (
    <div className={styles.clock}>
      <div style={style}>
        <p>{days}</p>
        <p>{t('days-text', { count: days })}</p>
      </div>
      <div style={style}>
        <p>{hours}</p>
        <p>{t('hours-text', { count: hours })}</p>
      </div>
      <div style={style}>
        <p>{minutes}</p>
        <p>{t('minutes-text', { count: minutes })}</p>
      </div>
      <div style={style}>
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
