import React from "react";
import PropTypes from "prop-types";
import styles from "./SpeedRekryItem.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

export const SpeedRekryItem = ({ companies, full, link, open, id }) => {
  const luokka = "item-" + id;
  const { t } = useTranslation();
  return (
    <div
      className={classNames({
        [styles.speedRekryItem]: true,
        [styles[luokka]]: true,
      })}
    >
      <div className={styles.speedRekryItemTitle}>
        <span> {t("group-text")}</span>
        &nbsp; {id}
      </div>
      <div className={styles.speedRekryItemDesc}>
        <div className={styles.speedRekryCompanies}>
          {companies
            .split(",")
            .map((company) => company.trim())
            .filter((company) => company !== "")
            .map((company) => (
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
              [styles["rekry-disabled"]]: !open || full,
            })}
          >
            {!full ? (
              <span> {t("signup-text")}</span>
            ) : (
              <span> {t("full-text")}</span>
            )}
          </a>
        )}
        {!open && (
          <p className={styles.closedRegistration}>{t("registration-opens")}</p>
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
  id: PropTypes.number.isRequired,
};
