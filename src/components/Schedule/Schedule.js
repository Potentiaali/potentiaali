import React from "react";
import moment from "moment";
import { TimeSlot } from "./TimeSlot";
import { colors } from "../../colors/colors";
import { View, ScrollView, Text } from "react-native-web";

const fillEmptySlots = function(schedule, programStart, programEnd) {
  let filledSchedule = schedule
    .sort((a, b) => a.start > b.start)
    .reduce((newSchedule, slot, i) => {
      newSchedule.push(slot);
      const next = schedule.find(x => x.start === slot.end);

      // if no slot starting with current slot's ending time found, add one with empty name
      if (
        !next &&
        i < schedule.length - 1 &&
        slot.end !== schedule[i + 1].start
      ) {
        newSchedule.push({
          start: slot.end,
          end: schedule[i + 1].start,
          name: ""
        });
      }

      return newSchedule;
    }, []);

  // if no slot starting at programs starting time, add on with empty name
  if (filledSchedule[0].start > programStart) {
    filledSchedule.unshift({
      start: programStart,
      end: filledSchedule[0].start,
      name: ""
    });
  }

  // if no slot ending at programs ending time, add on with empty name
  if (filledSchedule[filledSchedule.length - 1].end < programEnd) {
    filledSchedule.push({
      start: filledSchedule[filledSchedule.length - 1].end,
      end: programEnd,
      name: ""
    });
  }
  return filledSchedule;
};

const generateHourStrings = function(start, end) {
  const startHour = moment()
    .hours(start)
    .minutes(0);
  const endHour = moment()
    .hours(end)
    .minutes(0);
  let hours = [];

  for (let i = +startHour; i <= +endHour; i = i + 30 * 60 * 1000) {
    hours.push(moment(i).format("HH.mm"));
  }

  hours.pop();

  return hours;
};

export const Schedule = ({ schedule, start, end, type }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal bounces={false}>
        <View style={{ flex: 1 }}>
          <View style={styles.timelineContainer}>
            {generateHourStrings(start, end).map(hour => (
              <View style={{ flex: 1 }} key={hour}>
                <Text>{hour}</Text>
              </View>
            ))}
          </View>
          {Object.keys(schedule).map(key => {
            const stage = schedule[key];
            return (
              <View style={styles.scheduleRow} key={stage.name}>
                {fillEmptySlots(stage.schedule, start, end).map(slot => {
                  return (
                    <TimeSlot content={slot} key={slot.start} type={type} />
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 5,
    backgroundColor: colors.gray
  },
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  image: {
    resizeMode: "cover",
    flex: 1
  },
  scheduleRow: {
    flex: 4,
    flexDirection: "row"
  },
  timelineContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.orange,
    borderWidth: 1,
    borderTopWidth: 0
  }
};
