import scheduleData from "../data/scheduleData";

const initialState = {
  schedule: scheduleData,
  selectedSchedule: "workshops",
  start: "11:00",
  end: "20:00",
  type: "workshops"
};

const ScheduleTypes = {
  CHANGE_SCHEDULE: "CHANGE_SCHEDULE"
};

export const changeSchedule = selected => {
  return {
    type: ScheduleTypes.CHANGE_SCHEDULE,
    selected
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ScheduleTypes.CHANGE_SCHEDULE:
      return {
        ...state,
        ...{
          selectedSchedule: action.selected,
          type: action.selected
        }
      };
    default:
      return state;
  }
};
