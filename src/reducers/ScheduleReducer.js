 const { utcToZonedTime } = require("date-fns-tz");

const schedule = [  {
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
    startTime: utcToZonedTime(new Date(2022, 12, 8, 17, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 19, 0), "Europe/Helsinki"),
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
      fi: "Kumpulan Potentiaali 2022 -tapahtuman jatkot",
      "en-US": "Afterparty of Kumpula's Potential 2022"
    },
    fullDescription: {
      fi: "Kumpulan Potentiaali 2022 -tapahtuman jatkot",
      "en-US": "Afterparty of Kumpula's Potential 2022"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 19, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 23, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 3,
    companyName: "TBA",
    location: "Physicum D104",
    title: {
      fi: "Rekry speed dating",
      "en-US": "Rekry speed dating"
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
    startTime: utcToZonedTime(new Date(2022, 12, 8, 11, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 12, 30), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 4,
    companyName: "TBA",
    location: "Physicum D105",
    title: {
      fi: "Rekry speed dating",
      "en-US": "Rekry speed dating"
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
    startTime: utcToZonedTime(new Date(2022, 12, 8, 11, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 12, 30), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 5,
    companyName: "TBA",
    location: "Physicum D104",
    title: {
      fi: "Rekry speed dating",
      "en-US": "Rekry speed dating"
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
    startTime: utcToZonedTime(new Date(2022, 12, 8, 12, 30), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 14, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 6,
    companyName: "TBA",
    location: "Physicum D105",
    title: {
      fi: "Rekry speed dating",
      "en-US": "Rekry speed dating"
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
    startTime: utcToZonedTime(new Date(2022, 12, 8, 12, 30), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 14, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 7,
    companyName: "TBA",
    location: "Physicum D104",
    title: {
      fi: "Rekry speed dating",
      "en-US": "Rekry speed dating"
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
    startTime: utcToZonedTime(new Date(2022, 12, 8, 14, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 15, 30), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 8,
    companyName: "TBA",
    location: "Physicum D105",
    title: {
      fi: "Rekry speed dating",
      "en-US": "Rekry speed dating"
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
    startTime: utcToZonedTime(new Date(2022, 12, 8, 14, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 15, 30), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 9,
    companyName: "TBA",
    location: "Exactum B121",
    title: {
      fi: "Workshop",
      "en-US": "Workshop"
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
    startTime: utcToZonedTime(new Date(2022, 12, 8, 11, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 12, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 10,
    companyName: "TBA",
    location: "Exactum C123",
    title: {
      fi: "Workshop",
      "en-US": "Workshop"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi: "",
      "en-US": ""
    },
    speakers: [""],
    language: "en",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 14, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 15, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 11,
    companyName: "TBA",
    location: "Exactum C123",
    title: {
      fi: "Workshop",
      "en-US": "Workshop"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi: "",
      "en-US": ""
    },
    speakers: [""],
    language: "en",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 15, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 16, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 12,
    companyName: "TBA",
    location: "Exactum C123",
    title: {
      fi: "Workshop",
      "en-US": "Workshop"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi: "",
      "en-US": ""
    },
    speakers: [""],
    language: "en",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 16, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 17, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 13,
    companyName: "TBA",
    location: "Exactum B123",
    title: {
      fi: "Keynote",
      "en-US": "Keynote"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi: ``,
      "en-US": ``,
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(
      new Date(2022, 12, 8, 11, 0),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 12, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 14,
    companyName: "Think Company",
    location: "Exactum B123",
    title: {
      fi: "Think Company x Kumpulan Potentiaali: Työelämäpaneeli - Akateeminen yrittäjyys",
      "en-US": "Think Company x Kumpulan Potentiaali: Työelämäpaneeli - Akateeminen yrittäjyys"
    },
    description: {
      fi: "Millaisia yrittäjiä Kumpulan kampukselta löytyy? Millaisia ovat kumpulalaiset startupit? Mitä yrityksen perustamista miettivän ehdottomasti pitää (tai ei pidä!) tehdä?\n\nHelsinki Think Company järjestää osana Kumpulan Potentiaali -työelämätapahtumaa paneelikeskustelun teemalla Akateeminen osaaminen käytäntöön, näkökulmana yrittäjyys. Tervetuloa seuraamaan paneelikeskustelua opiskelijoiden ja alumnien ja kysymään heidän kokemuksistaan.",
      "en-US": "Millaisia yrittäjiä Kumpulan kampukselta löytyy? Millaisia ovat kumpulalaiset startupit? Mitä yrityksen perustamista miettivän ehdottomasti pitää (tai ei pidä!) tehdä?\n\nHelsinki Think Company järjestää osana Kumpulan Potentiaali -työelämätapahtumaa paneelikeskustelun teemalla Akateeminen osaaminen käytäntöön, näkökulmana yrittäjyys. Tervetuloa seuraamaan paneelikeskustelua opiskelijoiden ja alumnien ja kysymään heidän kokemuksistaan."
    },
    fullDescription: {
      fi: `Millaisia yrittäjiä Kumpulan kampukselta löytyy? Millaisia ovat kumpulalaiset startupit? Mitä yrityksen perustamista miettivän ehdottomasti pitää (tai ei pidä!) tehdä?\n\nHelsinki Think Company järjestää osana Kumpulan Potentiaali -työelämätapahtumaa paneelikeskustelun teemalla Akateeminen osaaminen käytäntöön, näkökulmana yrittäjyys. Tervetuloa seuraamaan paneelikeskustelua opiskelijoiden ja alumnien ja kysymään heidän kokemuksistaan.`,
      "en-US":`Millaisia yrittäjiä Kumpulan kampukselta löytyy? Millaisia ovat kumpulalaiset startupit? Mitä yrityksen perustamista miettivän ehdottomasti pitää (tai ei pidä!) tehdä?\n\nHelsinki Think Company järjestää osana Kumpulan Potentiaali -työelämätapahtumaa paneelikeskustelun teemalla Akateeminen osaaminen käytäntöön, näkökulmana yrittäjyys. Tervetuloa seuraamaan paneelikeskustelua opiskelijoiden ja alumnien ja kysymään heidän kokemuksistaan.`
    },
    speakers: ["Sanna Kujala", "Teemu Koivisto", "Jere Partanen", "Juho Räsänen", "Sofia Vanhala", "Paneelin juontaa Tuomas Harju"],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(
      new Date(2022, 12, 8, 17, 0),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 19, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 15,
    companyName: "TBA",
    location: "Exactum A111",
    title: {
      fi: "Keynote",
      "en-US": "Keynote"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi:
        "",
      "en-US":
        ""
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 14, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 15, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 16,
    companyName: "TBA",
    location: "Exactum A111",
    title: {
      fi: "Keynote",
      "en-US": "Keynote"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi:
        "",
      "en-US":
        ""
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 15, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 16, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 17,
    companyName: "TBA",
    location: "Exactum A111",
    title: {
      fi: "Keynote",
      "en-US": "Keynote"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi:
        "",
      "en-US":
        ""
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 16, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 17, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 18,
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
  },];

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
