import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export const tracks = [
  {
    name: {
      fi: 'Auloissa',
      en: 'In Lobbies',
    },
  },
  {
    name: {
      fi: 'Saleissa',
      en: 'In Lecture halls'
    },
  },
  {
    name: {
      fi: 'Yritysedustajille',
      en: 'For company representatives',
    },
    hue: 215
  },
];

export const schedule = [
  {
    id: 1,
    companyName: "",
    location: "Physicum & Exactum",
    title: {
      fi: 'Ständit auki',
      "en-US": 'Booths open',
    },
    description: "",
    fullDescription: {
      fi: "Tapahtuman tarkempi aikataulu ja yksityiskohdat tarkentuvat syksyn 2024 aikana.",
      "en-US": "The schedule and details of the event will be published during the fall of 2024.",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 11, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 17, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false,
  },
  {
    id: 2,
    companyName: "",
    location: "Physicum lobby",
    title: {
      fi: "Viralliset jatkot",
      "en-US": "Official afterparty",
    },
    description: "",
    fullDescription: {
      fi: "Lisää tietoa tulossa myöhemmin.",
      "en-US": "More information coming later."
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 19, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 23, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },
];

export default schedule;
