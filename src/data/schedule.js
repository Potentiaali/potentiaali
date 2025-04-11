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
      fi: 'Sali A111',
      en: 'In A111'
    },
  },
  {
    name: {
      fi: 'Sali A114',
      en: 'In A114'
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
    location: "Kumpulan kampus",
    title: {
      fi: 'Kumpulan Potentiaali 2025',
      "en-US": 'Kumpulan Potentiaali 2025',
    },
    description: "",
    fullDescription: {
      fi: "Tapahtuman tarkempi aikataulu ja yksityiskohdat tarkentuvat syksyn 2025 aikana.",
      "en-US": "The schedule and details of the event will be published during the fall of 2025.",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2025, 12, 4, 11, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2025, 12, 4, 23, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
  },
];

export default schedule;
