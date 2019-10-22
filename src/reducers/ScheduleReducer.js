const { utcToZonedTime } = require("date-fns-tz");

const schedule = [
  {
    id: 1,
    companyName: "",
    location: "Exactum",
    title: {
      fi: "Cocktail-tilaisuus",
      "en-US": "Cocktail event"
    },
    description: {
      fi: "Cocktail-tilaisuus, joka pidetään ennen jatkoja",
      "en-US": "Cocktail event held right before the afterparty"
    },
    fulldescription: {
      fi: "Cocktail-tilaisuus, joka pidetään ennen jatkoja",
      "en-US": "Cocktail event held right before the afterparty"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 17, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 18, 0), "Europe/Helsinki"),
    hideDetails: true
  },
  {
    id: 2,
    companyName: "",
    location: "Physicum",
    title: {
      fi: "Jatkot",
      "en-US": "Afterparty"
    },
    description: {
      fi: "Kumpulan Potentiaali 2019 -tapahtuman jatkot",
      "en-US": "Afterparty of Kumpula's Potential 2019"
    },
    fullDescription: {
      fi: "Kumpulan Potentiaali 2019 -tapahtuman jatkot",
      "en-US": "Afterparty of Kumpula's Potential 2019"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 18, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 22, 0), "Europe/Helsinki"),
    hideDetails: false
  }
];

const initialState = {
  events: schedule
};

const ScheduleTypes = {
  SET_EVENTS: "SET_EVENTS"
};

export const setEvents = events => ({
  type: ScheduleTypes.SET_EVENTS,
  payload: {
    events
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ScheduleTypes.SET_EVENTS:
      return { ...state, events: { ...action.payload.events } };
    default:
      return state;
  }
};
