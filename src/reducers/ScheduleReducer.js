const { utcToZonedTime } = require('date-fns-tz')

const things = [
  {
    id: 1,
    companyName: "Test company",
    location: "A111",
    title: "Keynote",
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 10, 0),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 12, 0), "Europe/Helsinki")
  }
]

const initialState = {
  schedule: things
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
