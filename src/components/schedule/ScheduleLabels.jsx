import { Fragment } from "react";
import styles from "./ScheduleLabels.module.scss";

const ScheduleLabels = () => (
  <div className={styles["schedule-labels"]}>
    <div />
    {Array.from({ length: 29 }).map((_, i) => {
      const hour = 9 + Math.floor(i / 2);
      const minutes = i % 2 === 0 ? "00" : "30";

      return (
        <Fragment key={i}>
          <div className={styles["main-label"]}>
            {hour}:{minutes}
          </div>
          <div />
        </Fragment>
      );
    })}
  </div>
);

export default ScheduleLabels;
