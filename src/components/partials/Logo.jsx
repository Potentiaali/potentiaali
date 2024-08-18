import React from "react";
import styles from "./Logo.module.scss";
import { useTranslation } from "react-i18next";
import config from "../../data/config.json";
import dayjs from "dayjs";

const Logo = () => {
  const { t } = useTranslation();
  const eventDay = dayjs(config.eventDate).format("DD.MM.YYYY");

  const eventTime = config.showTime ? `${config.eventStartTime} - ${config.eventEndTime}` : null;

  return (
    <svg
      viewBox="0 0 1440 290"
      className={styles["logo-container"]}
      height="230"
    >
      <polygon
        points="0,290 1440,170 1440,0 0,0"
        className={styles["bottom-fill-orange-1"]}
      />
      <polygon
        points="0,230 1440,110 1440,0 0,0"
        className={styles["bottom-fill-orange-2"]}
      />
      <polygon
        points="0,170 1440,50 1440,0 0,0"
        className={styles["bottom-fill-orange-1"]}
      />
      <image
        xlinkHref="assets/lamp_brightorange.svg"
        className={styles["logo-image"]}
        x="385"
        y="45"
        height="120"
      />
      <text x="25" y="162" className={styles["logo-1"]} aria-hidden="true">
        {t("kumpulas")}
      </text>
      <text x="50" y="226" className={styles["logo-2"]} aria-hidden="true">
        {t("potential")}
      </text>
      <text x="750" y="221" className={styles["logo-3"]}>
        {config.eventDate !== "" && (
          <>
            {eventDay} {eventTime}
          </>
        )}
      </text>
      <text x="75" y="272.5" className={styles["logo-registration-text"]}>
        <a href="/registration">
          Registration Open Now! ➜
        </a>
      </text>
    </svg>
  );
};

export default Logo;
