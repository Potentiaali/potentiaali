import React from "react"
import styles from "./RegistrationButton.module.scss"
import config from "./../data/config.json"
import classNames from "classnames"
import { useTranslation } from "react-i18next"

/**
 * Returns the registration link.
 * @param {boolean} registrationDisabled
 */
const navigateTo = (registrationDisabled) => {
  if (!registrationDisabled) {
    return config.companyRegistrationLink
  }
  return "#"
}

const RegistrationButton = () => {
  const { t } = useTranslation()
  const regDate = config.companyRegistrationStartDate
  const regTime = config.companyRegistrationStartTime
  const canRegister = +new Date() - regDate
  let registrationDisabled = true
  if (canRegister >= 0) {
    registrationDisabled = false
  }
  return (
    <a
      href={navigateTo(registrationDisabled)}
      className={classNames({
        [styles.registrationButton]: true,
        [styles.registrationDisabled]: registrationDisabled
      })}
    >
      <div className={styles.bg1}></div>
      <div className={styles.bg2}></div>
      <div className={styles.buttonText}>
        {registrationDisabled ? (
          <p>{t("registration-event-full", regDate, regTime)}</p>
        ) : (
          <>
            <i className="fas fa-external-link-alt"></i>&nbsp;&nbsp;&nbsp;
            <p>{t("register-now-text")}</p>
          </>
        )}
      </div>
    </a>
  )
}

export { RegistrationButton }
