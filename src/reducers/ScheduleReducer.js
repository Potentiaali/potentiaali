const { utcToZonedTime } = require("date-fns-tz");

const schedule = [
  {
    id: 1,
    companyName: "",
    location: "Exactum",
    title: "Cocktail event",
    descroption: "Cocktail event held right before the afterparty",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 17, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 18, 0), "Europe/Helsinki"),
    hideDetails: true
  },
  {
    id: 2,
    companyName: "",
    location: "Physicum",
    title: "Afterparty",
    description: "Afterparty of Kumpula's Potential 2019",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 18, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 22, 0), "Europe/Helsinki"),
    hideDetails: true
  }
];

const initialState = {
  schedule
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
