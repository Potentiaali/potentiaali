import React, { useMemo } from "react";
import styles from "./Logo.module.scss";
import { useTranslation } from "react-i18next";
import { useClock } from "../../utils/clock";
import config from "../../data/config.json";
import dayjs from "dayjs";

const Countdown = ({ start, end, interval = 1000 }) => {
  const { t } = useTranslation();
  const time = useClock(interval);

  const { days, hours, minutes, seconds, status } = useMemo(() => {
    const eventStart = dayjs(start);
    const eventEnd = dayjs(end);
    const now = dayjs(time);

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let status = 'before';

    if (eventEnd.isBefore(now)) {
      status = 'after';
    } else if (now.isAfter(eventStart) && now.isBefore(eventEnd)) {
      status = 'current';
    } else {
      const diff = eventStart.diff(now);
      seconds = Math.floor(diff / 1000);
      minutes = Math.floor(seconds / 60);
      hours = Math.floor(minutes / 60);
      days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;
    }

    return { seconds, minutes, hours, days, status };
  }, [time, start, end]); 

  if (status === 'current') {
    return t('countdown-current');
  } else if (status === 'after') {
    return t('countdown-past');
  }

  return (
    <>
      {days}<tspan className={styles["logo-countdown-unit"]}> {t('days-text', { count: days })}</tspan>{'\u00A0\u00A0'}
      {hours}<tspan className={styles["logo-countdown-unit"]}> {t('hours-text', { count: hours })}</tspan>{'\u00A0\u00A0'}
      {minutes}<tspan className={styles["logo-countdown-unit"]}> {t('minutes-text', { count: minutes })}</tspan>{'\u00A0\u00A0'}
      {seconds}<tspan className={styles["logo-countdown-unit"]}> {t('seconds-text', { count: seconds })}</tspan>
    </>
  );
};

const Logo = () => {
  const { t } = useTranslation();
  const eventDay = dayjs(config.eventDate).format("DD.MM.YYYY");

  const eventTime = config.showTime ? `${config.eventStartTime} - ${config.eventEndTime}` : null;
  const eventStartTime = dayjs(`${config.eventDate} ${config.eventStartTime}`);
  const eventEndTime = dayjs(`${config.eventDate} ${config.eventEndTime}`);

  return (
    <div className={styles["logo-wrapper"]}>
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
        <text x="25" y="160" className={styles["logo-1"]} aria-hidden="true">
          {t("kumpulas")}
        </text>
        <text x="50" y="222" className={styles["logo-2"]} aria-hidden="true">
          {t("potential")}
        </text>
        <text x="1370" y="218" className={styles["logo-3"]} textAnchor="end">
          {config.eventDate !== "" && (
            <>
              {eventDay} {eventTime}
            </>
          )}
        </text>
        <text x="1370" y="265" className={styles["logo-countdown"]} dominantBaseline="central" alignmentBaseline="central">
          <Countdown start={eventStartTime} end={eventEndTime} />
        </text>
        { config.showRegistrationInfo && (
          <text x="75" y="272.5" className={styles["logo-registration-text"]}>
            <a href="/registration">
              Registration Open Now! ➜
            </a>
          </text>
        )}
      </svg>
    </div>
  );
};

export default Logo;
