import React from "react";
import PropTypes from "prop-types";

import styles from "./RegistrationButton.module.scss";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const RegistrationButton = ({ children, href, open }) => {
  const { t } = useTranslation();

  const registrationDisabled = open === false;

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
          <div style={{ marginTop: '-0.25em' }}>
            <p style={{ margin: '0' }}>{children}</p>
            <p style={{ margin: '0', marginTop: '-0.6em', fontSize: '0.75em' }}>{t("registration-event-full")}</p>
          </div>
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
