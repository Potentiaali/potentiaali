import React from 'react'
import styles from './Logo.module.scss'
import { useTranslation } from 'react-i18next'
import config from '../../data/config.json'

const Logo = () => {
  const { t } = useTranslation()
  return (
    <svg
      viewBox="0 0 1440 230"
      className={styles['logo-container']}
      height="230"
    >
      <polygon
        points="0,230 1440,110 1440,0 0,0"
        className={styles['bottom-fill-orange-2']}
      />
      <polygon
        points="0,170 1440,50 1440,0 0,0"
        className={styles['bottom-fill-orange-1']}
      />
      <image
        xlinkHref="assets/lamp_brightorange.svg"
        className={styles['logo-image']}
        x="355"
        y="20"
        height="160"
      />
      <text x="25" y="162" className={styles['logo-1']} aria-hidden="true">
        {t('kumpulas')}
      </text>
      <text x="50" y="226" className={styles['logo-2']} aria-hidden="true">
        {t('potential')}
      </text>
      <text x="750" y="221" className={styles['logo-3']}>
        {config.eventDate !== '' && (
          <>
            {config.eventDate} {/* {t("at-clock")} {config.eventTime}*/}
          </>
        )}
      </text>
    </svg>
  )
}

export default Logo
