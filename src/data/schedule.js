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
    location: "Physicum & Exactum",
    title: {
      fi: 'Ständit auki',
      en: 'Booths open',
    },
    description: {
      fi: "Tutustu yritysten toimintaan ja työtarjontaan vierailemalla Physicumin ja Exactumin auloissa sijaitsevilla ständeillä.\n\nÄlä myöskään unohda tänä aikana tapahtuvia luentoja ja työpajoja!",
      en: "Get to know the participating companies and their job offerings by visiting their booths in the lobbies of Physicum and Exactum.\n\nDon't forget the keynotes and workoshops also happening during this time!"
    },
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
    track: 1,
  },
  {
    id: 2,
    companyName: "",
    location: "Physicum lobby",
    title: {
      fi: "Viralliset jatkot",
      "en-US": "Official afterparty",
    },
    description: {
      en: "Open bar, free snacks and a food truck with performances by Spekti and Kimbe!",
      fi: "Avoin baari, ilmaista naposteltavaa sekä ruokarekka \u2013 unohtamatta illan pääesiintyjää Spektiä ja lämppärinä toimivaa Kimbeä!",
    },
    fullDescription: {
      fi: "Tapahtuma huipentuu totta kai klo. 19 Physicumissa alkaviin jatkoihin, joiden pääesiintyjänä tänä vuonna on Spekti. Jano tai nälkä eivät myöskään pääse illalla juhlijoita yllättämään, sillä jatkoilla on ilmainen avoin baari (myös alkoholittomia vaihtoehtoja on tarjolla), ilmaista naposteltavaa sekä ruokarekka, josta jatkovieraat voivat ostaa syötävää.\n\nJatkoille pääsyyn vaaditaan ranneke, joita jaetaan Physicumin aulan infopisteessä tapahtumapäivänä 7.11. Valmistauduthan näyttämään opiskelijakorttisi rannekkeen noudon yhteydessä.",
      "en-US": "The event will culminate with an afterparty at Physicum starting at 7 PM. The main artist will this year be Spekti spekti with a warm-up gig by Kimbe. Partygoers will not need to worry about hunger or thirst, as the afterparty will have a free open bar, free snacks and a food truck from which guests can purchase bites to eat!\n\nEntry to the afterparty requires a wristband, which will be distributed at the info desk in Physicum during the main event on November the 7th. Please be ready to show your student ID when picking up the wristband."
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 19, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 23, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 3,
    companyName: "",
    location: "Exactum Atrium (East)",
    title: {
      fi: "Yritysedustajien cocktailtilaisuus",
      "en-US": "Company representatives' cocktail hour",
    },
    description: "",
    fullDescription: {
      fi: "Lisää tietoa tulossa myöhemmin.",
      "en-US": "More information coming later."
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 17, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 19, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false,
    track: 4
  },
  /*{
    id: 3,
    companyName: "Reddal",
    location: "Exactum A111",
    title: {
      fi: "Luento",
      "en-US": "Keynote",
    },
    description: "",
    fullDescription: {
      fi: "Lisää tietoa tulossa myöhemmin.",
      "en-US": "More information coming later."
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 12, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 12, 45), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false
  },*/
  {
    id: 4,
    companyName: "University of Helsinki, Urapalvelut",
    location: "Exactum A111",
    title: {
      en: "Create good luck in your career – planned happenstance in practice",
    },
    description: "",
    fullDescription: {
      en: "Good luck doesn’t just happen by chance – you can affect it with your own actions! Learn to create relevant career opportunities and good luck by utilizing the planned happenstance theory in practice."
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 14, 30), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 15, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
    track: 2
  },
  {
    id: 5,
    companyName: "Netlight",
    location: "Exactum A111",
    title: {
      en: "Case Interviews Uncovered: How to Tackle Case Interviews",
    },
    description: "",
    fullDescription: {
      en: "Have you ever been to a case interview? Netlight’s consultants will shed light about how we work with cases in our interview process, why we have them and how to approach them. You will also get to solve a real-live case in a group!"
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 16, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 17, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
    track: 2
  },
  {
    id: 6,
    companyName: "TEK",
    location: "Exactum A114",
    title: {
      en: "Get a Summer Job! – From student to Finnish working life",
    },
    description: {
      en: "Streamed event with a TEK career councellor present in-person to answer any of your questions.\n\nThe event is aimed especially at international students, but all students are welcome."
    },
    fullDescription: {
      en: "How do Finnish employers expect an application to look, and what can you do to succeed? What are your legal rights, and what do you need to look out for? Do you have to be paid, and if so how much? At the “Get a Summer Job!” event, experts from TEK aim to answer some of those questions, and give you tips for both entering and thriving in Finnish working life. The event is aimed especially at international students, but all students are welcome. It will be held completely in English on Thursday 7.11. from 14.15-16.00. The stream will then be recorded for later viewing.\n\nNote that this event is streamed from Tampere. There will be a TEK career councellor present in-person to help answer any of your questions.\n\nThe event is aimed especially at international students, but all students are welcome."
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 14, 30), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 16, 15), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
    track: 3
  },
  {
    id: 7,
    companyName: "",
    location: "Physicum D115",
    title: {
      fi: "Aamupala",
      "en-US": "Breakfast",
    },
    description: "",
    fullDescription: {
      fi: "Lisää tietoa tulossa myöhemmin.",
      "en-US": "More information coming later."
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 9, 30), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 11, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
    track: 4
  },
  {
    id: 8,
    companyName: "",
    location: "Exactum Atrium (West)",
    title: {
      en: "Panel Discussion: From Research to Startup - Bridging Science and Entrepreneurship",
    },
    description: "",
    fullDescription: {
      en: "Are you curious about how to turn your research and academic background into a successful startup? We’re thrilled to invite you to an upcoming panel discussion hosted by Helsinki Think Company, the entrepreneurship society of the University of Helsinki. This event is designed to show you how to take your academic skills and apply them to the world of business and startups.\n\nAt this panel, you’ll hear directly from experts with backgrounds in the natural sciences who have successfully made the leap from academia to founding their own companies. It’s the perfect opportunity to learn about real-world examples and get practical tips on how to start your entrepreneurial journey.\n\nWhy?\n    - Inspiration: Hear from scientists who turned their ideas into successful businesses.\n    - Networking: Connect with professionals, academics, and students interested in entrepreneurship.\n    - Actionable advice: Learn the first steps in starting a company as a researcher.\n\nIf you’re interested in entrepreneurship, innovation, or simply exploring career options outside of academia, this event is for you.\n"
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 17, 0), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 19, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
    track: 1
  },
  {
    id: 9,
    companyName: 'OP',
    speakers: [],
    location: "A111",
    title: {
      en: "Competence Development in the Future",
    },
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 12, 30), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 13, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false,
    track: 2
  },
  {
    id: 9,
    companyName: 'CSC',
    location: "A111",
    speakers: [],
    link: "",
    title: {
      en: "Discovering new opportunities with scientific computing skills",
    },
    fullDescription: {
      en: "Large-scale simulations and machine learning models power a significant number of the most recent advances across all fields of science. Students and researchers who develop their scientific computing skills will find a world of exciting possibilities waiting for them.",
    },
    startTime: dayjs.tz(new Date(2024, 10, 7, 15, 15), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 15, 45), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
    track: 2
  },
  {
    id: 10,
    companyName: "TEK",
    location: "Exactum A114",
    title: {
      fi: "Työn nielaisema elämä, vai työ sopivana osana elämää?",
    },
    description: "",
    fullDescription: {
      fi: "Mistä työn säännöt tulevat? Mikä on työehtosopimus, ja miksi minun kannattaa olla siitä kiinnostunut? Mitä on paikallinen sopiminen? Lakkoillaanko Suomessa koko ajan? Onko mahdollista saada aikaa JA rahaa? Ja miten ihmeessä laitetaan päivä pulkkaan?\n\nVastauksia mm. näihin kysymyksiin antaa työehtoasiantuntija ja työehtosopimusneuvottelija Björn Wiemers TEKistä.",
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 12, 30), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 13, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false,
    track: 3
  },
  {
    id: 11,
    companyName: "ASM",
    location: "Exactum A114",
    title: {
      en: "ALD and Si/SiGe Epitaxy as key enablers of advanced CMOS and Memory",
    },
    description: "",
    fullDescription: {
      fi: "Lisää tietoa tulossa myöhemmin.",
      "en-US": "More information coming later."
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: dayjs.tz(new Date(2024, 10, 7, 13, 30), "Europe/Helsinki"),
    endTime: dayjs.tz(new Date(2024, 10, 7, 14, 0), "Europe/Helsinki"),
    hideDetails: true,
    hideTime: false,
    track: 3
  },
];

export default schedule;
