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
      fi: 'Sali Exactum B121',
      en: 'In Exactum B121'
    },
  },
  {
    name: {
      fi: 'Sali Physicum D101',
      en: 'In Physicum D101'
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
    {
    id: 2,
    companyName: "TEK",
    location: "Exactum B121",
    title: {
      fi: 'TEK Networking Workshop',
      "en-US": 'TEK Networking Workshop',
    },
    description: "Workshop for students who want to make it easier for themselves to talk to employers, and network with others. Workshop includes a guide on how to get the most out of a recruitment event, and an interactive exercise with a chance to win prizes.",
    fullDescription: {
      fi: "Sign up for TEK Networking Workshop and get the most out of discussing with employers: learn what to say, what to ask, and how to make it feel natural. The Workshop is for students who want to make it easier for themselves to talk to employers, and network with others. Workshop includes tips on how to get the most out of a recruitment event, and an interactive exercise with a chance to win small prizes. The workshop will be held in English and led by TEK career coaches.",
      "en-US": "Sign up for TEK Networking Workshop and get the most out of discussing with employers: learn what to say, what to ask, and how to make it feel natural. The Workshop is for students who want to make it easier for themselves to talk to employers, and network with others. Workshop includes tips on how to get the most out of a recruitment event, and an interactive exercise with a chance to win small prizes. The workshop will be held in English and led by TEK career coaches.",
    },
    speakers: ["Markus Lindholm", "Minni Hurme"],
    language: "en",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeA-sCLYaSlOV6FmcC0e-z_jVQrzumzalZRdce3WvZrHlrH3Q/viewform",
    startTime: dayjs.tz(new Date(2025, 12, 4, 12, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2025, 12, 4, 13, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
  },
    {
    id: 3,
    companyName: "Netlight",
    location: "Exactum B121",
    title: {
      fi: 'Ace the Interview: Mastering Your Winning Pitch',
      "en-US": 'Ace the Interview: Mastering Your Winning Pitch',
    },
    description: "Workshop for students who want to make it easier for themselves to talk to employers, and network with others. Workshop includes a guide on how to get the most out of a recruitment event, and an interactive exercise with a chance to win prizes.",
    fullDescription: {
      fi: "Ready to land your dream job? Join our interactive workshop to learn how to ace job interviews! Discover what interviewers are really looking for, craft a powerful personal pitch, showcase your competence with confidence, and avoid common mistakes. Whether you already have a bunch of interviews under your belt or are just starting out, this workshop will give you the tools to stand out and shine in any interview setting. Our seasoned interview experts Ella Veijalainen and Mats Jalas will share the secrets behind strong interview skills and help you unlock future opportunities.",
      "en-US": "Ready to land your dream job? Join our interactive workshop to learn how to ace job interviews! Discover what interviewers are really looking for, craft a powerful personal pitch, showcase your competence with confidence, and avoid common mistakes. Whether you already have a bunch of interviews under your belt or are just starting out, this workshop will give you the tools to stand out and shine in any interview setting. Our seasoned interview experts Ella Veijalainen and Mats Jalas will share the secrets behind strong interview skills and help you unlock future opportunities.",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2025, 12, 4, 13, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2025, 12, 4, 14, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
  },    
  {
    id: 4,
    companyName: "Reddal",
    location: "Exactum B121",
    title: {
      fi: 'How to succeed in case interviews',
      "en-US": 'How to succeed in case interviews',
    },
    description: "This workshop provides a practical, hands-on introduction to case interviews. Participants will learn the core skills tested in case interviews and practice applying them through real example cases. The session covers the main case types, walks through a clear problem-solving process, and highlights key best practices and common pitfalls. Through interactive examples and guidance, attendees will gain confidence in structuring problems, forming hypotheses, interpreting data, and synthesizing actionable recommendations.",
    fullDescription: {
      fi: "This workshop provides a practical, hands-on introduction to case interviews. Participants will learn the core skills tested in case interviews and practice applying them through real example cases. The session covers the main case types, walks through a clear problem-solving process, and highlights key best practices and common pitfalls. Through interactive examples and guidance, attendees will gain confidence in structuring problems, forming hypotheses, interpreting data, and synthesizing actionable recommendations.",
      "en-US": "This workshop provides a practical, hands-on introduction to case interviews. Participants will learn the core skills tested in case interviews and practice applying them through real example cases. The session covers the main case types, walks through a clear problem-solving process, and highlights key best practices and common pitfalls. Through interactive examples and guidance, attendees will gain confidence in structuring problems, forming hypotheses, interpreting data, and synthesizing actionable recommendations.",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2025, 12, 4, 14, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2025, 12, 4, 15, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
  },  
  {
    id: 5,
    companyName: "Kumpula doctoral programmes",
    location: "Physicum D101",
    title: {
      fi: 'Considering an Academic career? A few words on what to think about and expect',
      "en-US": 'Considering an Academic career? A few words on what to think about and expect',
    },
    description: "Eemu Ranta is a postdoctoral researcher at the Department of Geosciences and Geography at the University of Helsinki. His research focuses on deciphering Earth’s interior processes by analysing the chemical composition of volcanoes. He has Geology degrees from three different Nordic countries: a BSc from Stockholm University (2015), a MSc from the University of Helsinki (2017), and a PhD from the University of Iceland (2022). His postdoc career involved a short stint at the Iceland Meteorological Office before returning to Helsinki for his current position. Eemu will talk about what you may want to consider before embarking on a PhD, if it was worth it, and what to expect from life as an early career researcher in the academic landscape.",
    fullDescription: {
      fi: "Eemu Ranta is a postdoctoral researcher at the Department of Geosciences and Geography at the University of Helsinki. His research focuses on deciphering Earth’s interior processes by analysing the chemical composition of volcanoes. He has Geology degrees from three different Nordic countries: a BSc from Stockholm University (2015), a MSc from the University of Helsinki (2017), and a PhD from the University of Iceland (2022). His postdoc career involved a short stint at the Iceland Meteorological Office before returning to Helsinki for his current position. Eemu will talk about what you may want to consider before embarking on a PhD, if it was worth it, and what to expect from life as an early career researcher in the academic landscape.",
      "en-US": "Eemu Ranta is a postdoctoral researcher at the Department of Geosciences and Geography at the University of Helsinki. His research focuses on deciphering Earth’s interior processes by analysing the chemical composition of volcanoes. He has Geology degrees from three different Nordic countries: a BSc from Stockholm University (2015), a MSc from the University of Helsinki (2017), and a PhD from the University of Iceland (2022). His postdoc career involved a short stint at the Iceland Meteorological Office before returning to Helsinki for his current position. Eemu will talk about what you may want to consider before embarking on a PhD, if it was worth it, and what to expect from life as an early career researcher in the academic landscape.",
    },
    speakers: ["Eemu Ranta"],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2025, 12, 4, 11, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2025, 12, 4, 11, 45), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
  },  
  {
    id: 6,
    companyName: "Ilmatieteenlaitos",
    location: "Physicum D101",
    title: {
      fi: 'Sääennuste',
      "en-US": 'Sääennuste',
    },
    description: "Sääennuste tuleville päiville TV-meteorologi Laura Tuomolan toimesta",
    fullDescription: {
      fi: "Sääennuste tuleville päiville TV-meteorologi Laura Tuomolan toimesta",
      "en-US": "Sääennuste tuleville päiville TV-meteorologi Laura Tuomolan toimesta",
    },
    speakers: ["Laura Tuomola"],
    language: "fi",
    link: "",
    startTime: dayjs.tz(new Date(2025, 12, 4, 11, 45), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2025, 12, 4, 12, 30), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 7,
    companyName: "Maanmittauslaitos",
    location: "Physicum D101",
    title: {
      fi: 'Paikkatieto kaikkialla - miksi paikkatiedon moninaisuuden ymmärtäminen auttaa rakentamaan kestävämpää tulevaisuutta',
      "en-US": 'Paikkatieto kaikkialla - miksi paikkatiedon moninaisuuden ymmärtäminen auttaa rakentamaan kestävämpää tulevaisuutta',
    },
    description: "Paikkatieto käsitteenä laajemmin - eli mitä sillä tarkoitetaan, missä kaikkialla paikkatietoa on, mitä se tarkoittaa eri yhteiskunnan sektoreille ja miten se voidaan valjastaa hyötykäyttöön eri tavoin",
    fullDescription: {
      fi: "Paikkatieto käsitteenä laajemmin - eli mitä sillä tarkoitetaan, missä kaikkialla paikkatietoa on, mitä se tarkoittaa eri yhteiskunnan sektoreille ja miten se voidaan valjastaa hyötykäyttöön eri tavoin",
      "en-US": "Paikkatieto käsitteenä laajemmin - eli mitä sillä tarkoitetaan, missä kaikkialla paikkatietoa on, mitä se tarkoittaa eri yhteiskunnan sektoreille ja miten se voidaan valjastaa hyötykäyttöön eri tavoin",
    },
    speakers: ["Jenna Pohjalainen"],
    language: "fi",
    link: "",
    startTime: dayjs.tz(new Date(2025, 12, 4, 12, 30), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2025, 12, 4, 13, 15), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
  },
    {
    id: 1,
    companyName: "",
    location: "Kumpulan kampus",
    title: {
      fi: 'Afterparty!!!',
      "en-US": 'Afterparty!!!',
    },
    description: "",
    fullDescription: {
      fi: "Tapahtuman tarkempi aikataulu ja yksityiskohdat tarkentuvat syksyn 2025 aikana.",
      "en-US": "The schedule and details of the event will be published during the fall of 2025.",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2025, 12, 4, 19, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2025, 12, 4, 23, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
  },
];

export default schedule;
