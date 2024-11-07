import React, { useState, useRef, useEffect } from "react";
import ScheduleLabels from "../components/schedule/ScheduleLabels";
import styles from "./Schedule.module.scss";
import { schedule as events, tracks } from "../data/schedule";
import ScheduleSlot from "../components/schedule/ScheduleSlot";
import LanguageString from "../components/LanguageString";
import { useClock } from "../utils/clock";

export const SchedulePage = () => {
  const now = useClock(60 * 1000);
  const minutes = now.getHours() * 60 + now.getMinutes() - 9.5 * 60;
  const segments = minutes / 15;
  const timelineRef = useRef();
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    if (follow && timelineRef.current) {
      const offset = -200;
      const y = timelineRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }, [now, follow]);

  return (
    <div className={styles.schedule} style={{ position: 'relative' }}>
      <div ref={timelineRef} onClick={() => setFollow(!follow)} className={styles.timeline} style={{ top: `calc(${segments} * var(--slot-size) + 10px)` }} data-label={ follow ? 'Now! (F)' : 'Now!' } />
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
