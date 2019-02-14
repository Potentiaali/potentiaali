import React from "react";
import PropTypes from "prop-types";
import { defaultStyles } from "../../styles/defaultStyles";
import { colors } from "../../colors/colors";
import { View, TouchableHighlight, Text } from "react-native-web";
import { Language } from "../Partials/Language";
import Textfit from "react-textfit";

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
  return (endMillis - startMillis) / (3600 * 1000);
};

export const TimeSlot = ({ content }) => {
  const conditionalStyles = {
    width: Math.floor(getDurationInHours(content.start, content.end) * 400),
    borderWidth: content.name === "" ? 0 : 1,
    backgroundColor: content.name === "" ? "transparent" : "white"
  };

  return (
    <View>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={"#ffffff"}
        style={[styles.container, conditionalStyles]}
      >
        {content.name === "" ? (
          <View />
        ) : (
          <View style={styles.timeSlot}>
            <Text style={[defaultStyles.title3, styles.title]}>
              <Textfit mode="single" max={20}>
                {content.name.toUpperCase()}
                {content.language && (
                  <span>
                    {"  "}(<Language lang={content.language} />)
                  </span>
                )}
              </Textfit>
            </Text>
            <Text style={styles.text2}>
              {content.start} - {content.end}
            </Text>
            <Text style={[defaultStyles.text, styles.text]}>
              <Textfit mode="multi" max={10}>
                {content.description}
              </Textfit>
            </Text>
          </View>
        )}
      </TouchableHighlight>
    </View>
  );
};

TimeSlot.propTypes = {
  content: PropTypes.any
}

const styles = {
  title: {
    width: "100%",
    margin: 0,
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 15,
    height: 15,
    padding: 10
  },
  text: {
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text2: {
    width: "100%",
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "9pt"
  },
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "white",
    overflow: "hidden",
    borderColor: colors.orange,
    margin: 0
  }
};
