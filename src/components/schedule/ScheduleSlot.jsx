import React from "react";
import propTypes from "prop-types";
import styles from "./ScheduleSlot.module.scss";
import classNames from "classnames";
import dayjs from "dayjs";
import { useClock } from "../../utils/clock";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageString from "../LanguageString";
import "./ScheduleGrid.scss";
import { tracks } from "../../data/schedule";

const getHoursAndMinutes = (inputDate) => {
  return dayjs(inputDate).format("HHmm");
};

const getFrom = (inputDate) => {
  return `from-${getHoursAndMinutes(inputDate)}`;
};

const getTo = (inputDate) => {
  return `to-${getHoursAndMinutes(inputDate)}`;
};

const ScheduleSlot = ({ slot }) => {
  const fromClass = getFrom(dayjs(slot.startTime).toString());
  const toClass = getTo(dayjs(slot.endTime).toString());
  const { t } = useTranslation();
  const time = useClock(60 * 1000);
  const now = dayjs(time).isAfter(slot.startTime) && dayjs(time).isBefore(slot.endTime);
  const track = tracks[slot.track -1];

  return (
    <div className={classNames(styles.slot, fromClass, toClass)} style={{ '--track': slot.track, '--hue': `${track?.hue}deg` }}>
      <div className={styles["slot-bg-1"]}></div>
      <div className={styles["slot-bg-2"]}></div>
      <div className={styles["slot-content"]}>
        <ul className={styles["slot-info"]}>
          <li className={classNames(styles["slot-title"])}>
            <LanguageString languageObject={slot.title} />
            { now && <span className={styles.now}>{t('slot-now')}</span> }
          </li>
          {slot.companyName !== "" && (
            <li className={styles["slot-company"]}>
              <span className={styles["slot-info-title"]}>
                <i className="fas fa-briefcase"></i>
              </span>
              <span className={styles["slot-info-value"]}>{slot.companyName}</span>
            </li>
          )}
          {slot.hideTime === false && (
            <li className={styles["slot-time"]}>
              <span className={styles["slot-info-title"]}>
                <i className="fas fa-clock"></i>
              </span>
              <span className={styles["slot-info-value"]}>
                <time>{dayjs(dayjs(slot.startTime)).format("HH:mm")}</time>{" – "}
                <time>{dayjs(dayjs(slot.endTime)).format("HH:mm")}</time>
                <div style={{ whiteSpace: 'nowrap' }}>{' '}({dayjs(dayjs(slot.startTime)).locale('fi').fromNow()})</div>
              </span>
            </li>
          )}
          {slot.location !== "" && (
            <li className={styles["slot-location"]}>
              <span className={styles["slot-info-title"]}>
                <i className="fas fa-home"></i>
              </span>
              <span className={styles["slot-info-value"]}>{slot.location}</span>
            </li>
          )}
          {slot.description && (
            <li style={{ display: 'block', margin: '1em 0', whiteSpace: 'pre-wrap' }}>
              <LanguageString languageObject={slot.description} />
            </li>
          )}
          {slot.hideDetails === false && (
            <li className={styles["slot-link"]}>
              <Link to={"/schedule/" + slot.id}>
                <span className={styles["slot-info-title"]}>
                  <i className="fas fa-external-link-alt"></i>
                </span>
                <span className={styles["slot-info-value"]}>
                  <span>{t("schedule-slot-details")}</span>
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

ScheduleSlot.propTypes = {
  id: propTypes.number.isRequired,
  companyName: propTypes.string.isRequired,
  title: propTypes.object.isRequired,
  startTime: propTypes.any.isRequired,
  endTime: propTypes.any.isRequired,
  location: propTypes.string.isRequired,
  hideDetails: propTypes.bool.isRequired,
  hideTime: propTypes.bool.isRequired,
};

export default ScheduleSlot;
