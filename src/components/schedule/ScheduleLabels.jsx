import { Fragment } from "react";
import styles from "./ScheduleLabels.module.scss";
import { START_HOUR } from "../../data/schedule";

const ScheduleLabels = () => (
  <div className={styles["schedule-labels"]}>
    <div />
    {Array.from({ length: (24 - START_HOUR) * 2 - 1 }).map((_, i) => {
      const hour = START_HOUR + Math.floor(i / 2);
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
