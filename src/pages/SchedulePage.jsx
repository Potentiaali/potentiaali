import React from "react";
import ScheduleLabels from "../components/schedule/ScheduleLabels";
import styles from "./Schedule.module.scss";
import { schedule as events, tracks } from "../data/schedule";
import ScheduleSlot from "../components/schedule/ScheduleSlot";
import LanguageString from "../components/LanguageString";

export const SchedulePage = () => {
  return (
    <div className={styles.schedule} style={{ position: 'relative' }}>
      <ScheduleLabels />
      <div className={styles["schedule-slots"]}>
        {tracks.map(({ name }, i) => (
          <div style={{ '--track': i }} className={styles["schedule-track-title"]}><span><LanguageString languageObject={name} /></span></div>
        ))}
        {events.map((entry) => <ScheduleSlot slot={entry} />)}
      </div>
    </div>
  );
};

export default SchedulePage;
