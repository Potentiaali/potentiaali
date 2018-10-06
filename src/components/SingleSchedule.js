import React from "react";
import { View } from "react-native-web";

import { StageLabels } from "./StageLabels";
import { Schedule } from "./Schedule";

export const SingleSchedule = ({ scheduleData, start, end, type }) => (
  <View style={styles.container}>
    <StageLabels schedule={scheduleData} />
    <Schedule
      schedule={scheduleData}
      start={start}
      end={end}
      type={type}
    />
  </View>
);

const styles = {
  container: {
    flex: 1,
    flexDirection: "row"
  }
};
