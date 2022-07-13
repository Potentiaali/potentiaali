import React from "react";
import styles from "./RegistrationButton.module.scss";
import config from "./../data/config.json";
import classNames from "classnames";
import { Localized } from "@fluent/react";

/**
 * Returns the registration link.
 * @param {boolean} registrationDisabled
 */
const navigateTo = registrationDisabled => {
  if (!registrationDisabled) {
    return config.companyRegistrationLink;
  }
  return "#";
};

const RegistrationButton = () => {
  // const regDate = +new Date(config.companyRegistrationStarts);
  // const canRegister = +new Date() - regDate;
  const registrationDisabled = true;
  // if (canRegister >= 0) {
  //   registrationDisabled = false;
  // }
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
          <Localized
            id="registration-event-full"
            $regDate={config.companyRegistrationStartDate}
            $regTime={config.companyRegistrationStartTime}
          >
            {
              "Ilmoittautuminen tästä linkistä alkaen { $regDate } klo { $regTime }"
            }
          </Localized>
        ) : (
          <>
            <i className="fas fa-external-link-alt"></i>&nbsp;&nbsp;&nbsp;
            <Localized id="register-now-text">
              Ilmoittaudu Kumpulan Potentiaaliin nyt!
            </Localized>
          </>
        )}
      </div>
    </a>
  );
};

export { RegistrationButton };
