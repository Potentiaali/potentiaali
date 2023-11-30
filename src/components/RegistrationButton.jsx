import React from "react";
import PropTypes from "prop-types";

import styles from "./RegistrationButton.module.scss";
import config from "./../data/config.json";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

const RegistrationButton = ({ children, href }) => {
  const { t } = useTranslation();
  const regDate = config.companyRegistrationStartDate;
  const regTime = config.companyRegistrationStartTime;
  const canRegister = dayjs(dayjs(regDate)).isBefore(new Date());
  console.log(canRegister);
  let registrationDisabled = true;
  if (canRegister >= 0) {
    registrationDisabled = false;
  }
  return (
    <a
      href={registrationDisabled ? "#" : href}
      className={classNames({
        [styles.registrationButton]: true,
        [styles.registrationDisabled]: registrationDisabled,
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
            <p className={styles.buttonParagraph}>{children}</p>
          </>
        )}
      </div>
    </a>
  );
};

RegistrationButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export { RegistrationButton };
