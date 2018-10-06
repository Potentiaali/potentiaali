import React from "react";
import { View } from "react-native-web";

import { StageLabels } from "./StageLabels";
import { Schedule } from "./Schedule";
import PropTypes from "prop-types";

export const SingleSchedule = ({
  scheduleData,
  selected,
  start,
  end,
  type
}) => (
  <View style={styles.container}>
    <StageLabels schedule={scheduleData[selected]} />
    <Schedule
      schedule={scheduleData[selected]}
      start={start}
      end={end}
      type={type}
    />
  </View>
);

SingleSchedule.propTypes = {
  scheduleData: PropTypes.any,
  selected: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  type: PropTypes.string
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#353535"
  }
};
