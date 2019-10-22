import React from "react";
import PropTypes from "prop-types";
import styles from "./SpeedRekryItem.module.scss";
import { Localized } from "fluent-react/compat";
import classNames from "classnames";

export const SpeedRekryItem = ({ companies, full, link, open, id }) => {
  const luokka = "item-" + id;

  return (
    <div
      className={classNames({
        [styles.speedRekryItem]: true,
        [styles[luokka]]: true
      })}
    >
      <div className={styles.speedRekryItemTitle}>
        <Localized id="group-text">Ryhmä</Localized>
        &nbsp; {id}
      </div>
      <div className={styles.speedRekryItemDesc}>
        <div className={styles.speedRekryCompanies}>
          {companies
            .split(",")
            .map(company => company.trim())
            .map(company => (
              <div className={styles.speedRekryCompany} key={company}>
                {company}
              </div>
            ))}
        </div>

        {open && (
          <a
            href={open ? link : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames([styles.speedRekryLink], {
              [styles["rekry-disabled"]]: !open || full
            })}
          >
            {!full ? (
              <Localized id="signup-text">Ilmoittaudu</Localized>
            ) : (
              <Localized id="full-text">Täynnä</Localized>
            )}
          </a>
        )}
        {!open && (
          <Localized id="registration-opens">
            <p className={styles.closedRegistration}>
              Ilmoittautuminen aukeaa myöhemmin syksyllä
            </p>
          </Localized>
        )}
      </div>
    </div>
  );
};

SpeedRekryItem.propTypes = {
  companies: PropTypes.string.isRequired,
  full: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};
