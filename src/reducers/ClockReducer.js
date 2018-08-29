const initialState = {
  clockInterval: null,
  daysUntil: 0,
  hoursUntil: 0,
  minutesUntil: 0,
  secondsUntil: 0
};

export const resetClock = () => {
  return {
    type: "RESET_CLOCK"
  };
};

export const setClockData = data => {
  return {
    type: "SET_CLOCK_DATA",
    daysUntil: data.daysUntil,
    hoursUntil: data.hoursUntil,
    minutesUntil: data.minutesUntil,
    secondsUntil: data.secondsUntil
  };
};

export const setClockInterval = interval => {
  return {
    type: "SET_CLOCK_INTERVAL",
    interval
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RESET_CLOCK":
      return {
        ...state,
        daysUntil: 0,
        hoursUntil: 0,
        minutesUntil: 0,
        secondsUntil: 0,
        clockInterval: null
      };
    case "SET_CLOCK_DATA":
      return {
        ...state,
        daysUntil: action.daysUntil,
        hoursUntil: action.hoursUntil,
        minutesUntil: action.minutesUntil,
        secondsUntil: action.secondsUntil
      };
    case "SET_CLOCK_INTERVAL":
      return {
        ...state,
        clockInterval: action.interval
      };
    default:
      return state;
  }
};
