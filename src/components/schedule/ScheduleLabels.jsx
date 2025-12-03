import React from "react";
import styles from "./ScheduleLabels.module.scss";

const ScheduleLabels = () => (
  <div className={styles["schedule-labels"]}>
    <div />
    {new Array(28).fill(true).map((_, i) => (
      <>
        <div className={styles["main-label"]}>{Math.floor((i + 18) / 2)}:{(i + 18) % 2 ? '30' : '00'}</div>
        <div></div>
      </>
    ))}
  </div>
);

export default ScheduleLabels;
