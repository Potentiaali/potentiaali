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
    startTime: utcToZonedTime(new Date(2019, 11, 14, 19, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 22, 0), "Europe/Helsinki"),
    hideDetails: false
  },
  {
    id: 3,
    companyName: "",
    location: "Physicum D104",
    title: {
      fi: "Rekry Speed Dating #1",
      "en-US": "Rekry Speed Dating #1"
    },
    description: {
      fi: "Houston Inc. , Trimble, Bluefors Oy, Foreca",
      "en-US": "Houston Inc. , Trimble, Bluefors Oy, Foreca"
    },
    fullDescription: {
      fi: "Houston Inc. , Trimble, Bluefors Oy, Foreca",
      "en-US": "Houston Inc. , Trimble, Bluefors Oy, Foreca"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 12, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 13, 30), "Europe/Helsinki"),
    hideDetails: false
  },
  {
    id: 4,
    companyName: "",
    location: "Physicum D105",
    title: {
      fi: "Rekry Speed Dating #2",
      "en-US": "Rekry Speed Dating #2"
    },
    description: {
      fi: "Futurice, Taito United Oy, Vincit Oyj, CGI",
      "en-US": "Futurice, Taito United Oy, Vincit Oyj, CGI"
    },
    fullDescription: {
      fi: "Futurice, Taito United Oy, Vincit Oyj, CGI",
      "en-US": "Futurice, Taito United Oy, Vincit Oyj, CGI"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 12, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 13, 30), "Europe/Helsinki"),
    hideDetails: false
  },
  {
    id: 4,
    companyName: "",
    location: "Physicum D104",
    title: {
      fi: "Rekry Speed Dating #3",
      "en-US": "Rekry Speed Dating #3"
    },
    description: {
      fi: "Siili Solutions Oyj, Cinia Oy, Digia Finland Oy, Reaktor",
      "en-US": "Siili Solutions Oyj, Cinia Oy, Digia Finland Oy, Reaktor"
    },
    fullDescription: {
      fi: "Siili Solutions Oyj, Cinia Oy, Digia Finland Oy, Reaktor",
      "en-US": "Siili Solutions Oyj, Cinia Oy, Digia Finland Oy, Reaktor"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 13, 45),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 15, 15), "Europe/Helsinki"),
    hideDetails: false
  },
  {
    id: 5,
    companyName: "",
    location: "Physicum D105",
    title: {
      fi: "Rekry Speed Dating #4",
      "en-US": "Rekry Speed Dating #4"
    },
    description: {
      fi: "Supermetrics, Columbia Road, VALA Group OY, IBM",
      "en-US": "Supermetrics, Columbia Road, VALA Group OY, IBM"
    },
    fullDescription: {
      fi: "Supermetrics, Columbia Road, VALA Group OY, IBM",
      "en-US": "Supermetrics, Columbia Road, VALA Group OY, IBM"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 13, 45),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 15, 15), "Europe/Helsinki"),
    hideDetails: false
  },
  {
    id: 6,
    companyName: "",
    location: "Physicum D104",
    title: {
      fi: "Rekry Speed Dating #5",
      "en-US": "Rekry Speed Dating #5"
    },
    description: {
      fi: "Bisnode Finland Oy, Ramboll Finland Oy, SSF + RD Velho, OP",
      "en-US": "Bisnode Finland Oy, Ramboll Finland Oy, SSF + RD Velho, OP"
    },
    fullDescription: {
      fi: "Bisnode Finland Oy, Ramboll Finland Oy, SSF + RD Velho, OP",
      "en-US": "Bisnode Finland Oy, Ramboll Finland Oy, SSF + RD Velho, OP"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 15, 30),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 17, 0), "Europe/Helsinki"),
    hideDetails: false
  },
  {
    id: 7,
    companyName: "",
    location: "Physicum D105",
    title: {
      fi: "Rekry Speed Dating #6",
      "en-US": "Rekry Speed Dating #6"
    },
    description: {
      fi: "TX, Dream Broker, Visma, Perfektio",
      "en-US": "TX, Dream Broker, Visma, Perfektio"
    },
    fullDescription: {
      fi: "TX, Dream Broker, Visma, Perfektio",
      "en-US": "TX, Dream Broker, Visma, Perfektio"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 15, 30),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 17, 0), "Europe/Helsinki"),
    hideDetails: false
  },
  {
    id: 8,
    companyName: "",
    location: "Physicum",
    title: {
      fi: "Kasmir",
      "en-US": "Kasmir"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi: "",
      "en-US": ""
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 20, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 21, 0), "Europe/Helsinki"),
    hideDetails: true
  },
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
