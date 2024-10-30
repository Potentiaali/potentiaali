import React from "react";
import ScheduleLabels from "../components/schedule/ScheduleLabels";
import styles from "./Schedule.module.scss";
import events from "../data/schedule";
import ScheduleSlot from "../components/schedule/ScheduleSlot";

export const SchedulePage = () => {
  return (
    <div className={styles.schedule} style={{ position: 'relative' }}>
      <ScheduleLabels />
      <div className={styles["schedule-slots"]}>
        {events.map((entry) => <ScheduleSlot slot={entry} />)}
      </div>
    </div>
  );
};

export default SchedulePage;
