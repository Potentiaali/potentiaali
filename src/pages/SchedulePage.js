import React from "react";
import { useSelector } from "react-redux";
import ScheduleLabels from "../components/schedule/ScheduleLabels";
import styles from "./SchedulePage.module.scss";
import ScheduleSlot from "../components/schedule/ScheduleSlot";

export const SchedulePage = () => {
  const events = useSelector(state => state.schedule.events);
  return (
    <div className={styles.schedule}>
      <ScheduleLabels />
      <div className={styles["schedule-slots"]}>
        {events.map(entry => (
          <ScheduleSlot
            id={entry.id}
            key={entry.id}
            companyName={entry.companyName}
            location={entry.location}
            title={entry.title}
            startTime={entry.startTime}
            endTime={entry.endTime}
            hideDetails={entry.hideDetails}
            hideTime={entry.hideTime}
          />
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
