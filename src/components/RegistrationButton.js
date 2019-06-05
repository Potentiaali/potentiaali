import React from "react";
import styles from "./RegistrationButton.module.scss";
import config from "./../data/config.json";
import classNames from "classnames";
import { Localized } from "fluent-react/compat";

const navigateTo = registrationDisabled => {
  if (!registrationDisabled) {
    return config.companyRegistrationLink;
  }
  return "#";
};

const RegistrationButton = () => {
  const regDate = +new Date(config.companyRegistrationStarts);
  const canRegister = +new Date() - regDate;
  let registrationDisabled = true;
  if (canRegister >= 0) {
    registrationDisabled = false;
  }
  return (
    <a
      href={navigateTo(registrationDisabled)}
      className={classNames({
        [styles.registrationButton]: true,
        [styles.registrationDisabled]: registrationDisabled
      })}
    >
      {registrationDisabled ? (
        <Localized
          id="registration-starting-from-text"
          $regDate={config.companyRegistrationStartDate}
          $regTime={config.companyRegistrationStartTime}
        >
          {
            "Ilmoittautuminen tästä linkistä alkaen { $regDate } klo { $regTime }"
          }
        </Localized>
      ) : (
        <Localized id="register-now-text">
          Ilmoittaudu Kumpulan Potentiaaliin nyt!
        </Localized>
      )}
    </a>
  );
};

export { RegistrationButton };
