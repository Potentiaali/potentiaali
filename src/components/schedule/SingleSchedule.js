import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native-web";

import { StageLabels } from "./StageLabels";
import { Schedule } from "./Schedule";

export const SingleSchedule = ({ scheduleData, start, end, type }) => (
  <View style={styles.container}>
    <StageLabels schedule={scheduleData} />
    <Schedule schedule={scheduleData} start={start} end={end} type={type} />
  </View>
);

SingleSchedule.propTypes = {
  end: PropTypes.string,
  start: PropTypes.string,
  type: PropTypes.string,
  selected: PropTypes.string,
  scheduleData: PropTypes.any
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#353535"
  }
};