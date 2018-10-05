import React from "react";
import "./Schedule.scss";
import moment from "moment";
import { TimeSlot } from "./TimeSlot";

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
    <div className="schedule">
      <div className="backgroundImageContainer">
        <img src="crowd.jpg" />
      </div>
      <div style={{ flex: 1 }}>
        <div className="timelineContainer">
          {generateHourStrings(start, end).map(hour => (
            <div style={{ flex: 1 }} key={hour}>
              {hour}
            </div>
          ))}
        </div>
        {// loops stage schedules
        Object.keys(schedule).map(key => {
          const stage = schedule[key];
          return (
            <div className="scheduleRow" key={stage.name}>
              {fillEmptySlots(stage.schedule, start, end).map(slot => {
                return <TimeSlot content={slot} key={slot.start} type={type} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
