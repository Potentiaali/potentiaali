import React from "react";
import "./TimeSlot.scss";
import { defaultStyles } from "./defaultStyles";
import { colors } from "./colors";
import { View, TouchableHighlight, Text } from "react-native-web";

const getDurationInHours = function(start, end) {
  const startTime = {
    hours: parseInt(start.split(".")[0]),
    minutes: isNaN(parseInt(start.split(".")[1]))
      ? 0
      : parseInt(start.split(".")[1])
  };
  const endTime = {
    hours: parseInt(end.split(".")[0]),
    minutes: isNaN(parseInt(end.split(".")[1]))
      ? 0
      : parseInt(end.split(".")[1])
  };

  const endMillis = new Date(0, 0, 0, endTime.hours, endTime.minutes);
  const startMillis = new Date(0, 0, 0, startTime.hours, startTime.minutes);
  return (
    (endMillis.getMilliseconds() - startMillis.getMilliseconds()) / (1000 * 60)
  );
};

export const TimeSlot = ({ content }) => {
  const conditionalStyles = {
    width: getDurationInHours(content.start, content.end) * 6,
    borderWidth: content.name === "" ? 0 : 1,
    backgroundColor: content.name === "" ? "transparent" : "white"
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={"#ffffff"}
        style={[styles.container, conditionalStyles]}
      >
        {content.name === "" ? (
          <View />
        ) : (
          <View>
            <Text style={[defaultStyles.title3, styles.title]}>
              {content.name.toUpperCase()}
            </Text>
            <Text style={defaultStyles.text}>{content.description}</Text>
          </View>
        )}
      </TouchableHighlight>
    </View>
  );
};

const styles = {
  title: {
    textAlign: "left",
    fontSize: 17
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    overflow: "hidden",
    borderColor: colors.orange,
    margin: 0
  }
};
