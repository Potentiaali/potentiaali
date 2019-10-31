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
    hideDetails: true,
    hideTime: false
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
    hideDetails: false,
    hideTime: false
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
    hideDetails: false,
    hideTime: false
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
    hideDetails: false,
    hideTime: false
  },
  {
    id: 5,
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
    hideDetails: false,
    hideTime: false
  },
  {
    id: 6,
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
    hideDetails: false,
    hideTime: false
  },
  {
    id: 7,
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
    hideDetails: false,
    hideTime: false
  },
  {
    id: 8,
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
    hideDetails: false,
    hideTime: false
  },
  {
    id: 9,
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
    hideDetails: true,
    hideTime: false
  },
  {
    id: 10,
    companyName: "",
    location: "Exactum B121",
    title: {
      fi: "Workshop: Harjoitteluinfo",
      "en-US": "Workshop: Harjoitteluinfo"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi:
        "Harjoitteluinfossa saat tietoa työnhausta, opintoihin kuuluvan harjoittelun suorittamisesta, harjoittelupaikan hakemisesta sekä harjoittelun rahoituksesta. Infossa on mukana myös liikkuvuuspalveluiden asiantuntija kertomassa ulkomailla tehtävän harjoittelun rahoitusvaihtoehdoista. \n Tervetuloa mukaan! \n Ilmoittaudu linkin kautta: https://www.lyyti.fi/reg/harjoitteluinfot",
      "en-US":
        "Harjoitteluinfossa saat tietoa työnhausta, opintoihin kuuluvan harjoittelun suorittamisesta, harjoittelupaikan hakemisesta sekä harjoittelun rahoituksesta. Infossa on mukana myös liikkuvuuspalveluiden asiantuntija kertomassa ulkomailla tehtävän harjoittelun rahoitusvaihtoehdoista. \n Tervetuloa mukaan! \n Ilmoittaudu linkin kautta: https://www.lyyti.fi/reg/harjoitteluinfot"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 16, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 17, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 11,
    companyName: "",
    location: "Exactum B121",
    title: {
      fi: "Workshop by Loimu",
      "en-US": "Workshop by Loimu"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi: "",
      "en-US": ""
    },
    speakers: ["Loimu"],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 14, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 15, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 12,
    companyName: "",
    location: "Exactum B121",
    title: {
      fi: "Workshop: Working in Finland as an International Student",
      "en-US": "Workshop: Working in Finland as an International Student"
    },
    description: {
      fi: "Working in Finland as an International Student",
      "en-US": "Working in Finland as an International Student"
    },
    fullDescription: {
      fi: "",
      "en-US": ""
    },
    speakers: ["Saija Repo"],
    language: "en",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 13, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 14, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 13,
    companyName: "",
    location: "Exactum B121",
    title: {
      fi: "Workshop: Coach Cafe",
      "en-US": "Workshop: Coach Cafe"
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
    startTime: utcToZonedTime(new Date(2019, 11, 14, 15, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 16, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 14,
    companyName: "",
    location: "Exactum B123",
    title: {
      fi: "Paneeli koneoppimisesta",
      "en-US": "Paneeli koneoppimisesta"
    },
    description: {
      fi: "OP, Visma, Ramboll, Relex ja Yle",
      "en-US": "OP, Visma, Ramboll, Relex and Yle"
    },
    fullDescription: {
      fi: "",
      "en-US": ""
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 12, 30),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 14, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 15,
    companyName: "",
    location: "",
    title: {
      fi: "Keynote",
      "en-US": "Keynote"
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
    startTime: utcToZonedTime(new Date(2019, 11, 14, 14, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 14, 30), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 16,
    companyName: "",
    location: "",
    title: {
      fi: "Keynote by OP",
      "en-US": "Keynote by OP"
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
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 14, 30),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 15, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 17,
    companyName: "",
    location: "",
    title: {
      fi: "Keynote by Bluefors",
      "en-US": "Keynote by Bluefors"
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
    startTime: utcToZonedTime(new Date(2019, 11, 14, 15, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 15, 30), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 18,
    companyName: "",
    location: "",
    title: {
      fi: "Keynote by Digia",
      "en-US": "Keynote by Digia"
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
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 15, 30),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 16, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 19,
    companyName: "",
    location: "",
    title: {
      fi: "Keynote by Futurice",
      "en-US": "Keynote by Futurice"
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
    startTime: utcToZonedTime(new Date(2019, 11, 14, 16, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 16, 30), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 20,
    companyName: "",
    location: "",
    title: {
      fi: "Ständit esillä",
      "en-US": "Booths open"
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
    startTime: utcToZonedTime(new Date(2019, 11, 14, 11, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 17, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 21,
    companyName: "Helsinki Think Company",
    location: "Exactum",
    title: {
      fi: "Helsinki Think Company esittäytyy",
      "en-US": "Helsinki Think Company introduction"
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
    startTime: utcToZonedTime(new Date(2019, 11, 14, 17, 30), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 19, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
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
