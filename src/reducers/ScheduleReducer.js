import { utcToZonedTime } from "date-fns-tz"

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
    companyName: "Rekry Speed Dating #1",
    location: "Physicum D104",
    title: {
      fi: "Rekry Speed Dating #1",
      "en-US": "Rekry Speed Dating #1"
    },
    description: {
      fi: "Reddal, CGI, Vuono Group, Eficode",
      "en-US": "Reddal, CGI, Vuono Group, Eficode"
    },
    fullDescription: {
      fi: "Reddal, CGI, Vuono Group, Eficode",
      "en-US": "Reddal, CGI, Vuono Group, Eficode"
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
    id: 4,
    companyName: "",
    location: "Physicum D105",
    title: {
      fi: "Rekry Speed Dating #3",
      "en-US": "Rekry Speed Dating #3"
    },
    description: {
      fi: "Visual Components, Taito United, Cinia, Funidata, Futurice",
      "en-US": "Visual Components, Taito United, Cinia, Funidata, Futurice"
    },
    fullDescription: {
      fi: "Visual Components, Taito United, Cinia, Funidata, Futurice",
      "en-US": "Visual Components, Taito United, Cinia, Funidata, Futurice"
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
    id: 5,
    companyName: "",
    location: "Physicum D104",
    title: {
      fi: "Rekry Speed Dating #4",
      "en-US": "Rekry Speed Dating #4"
    },
    description: {
      fi: "Solita, Insta Group, Tietoevry, Perfektio",
      "en-US": "Solita, Insta Group, Tietoevry, Perfektio"
    },
    fullDescription: {
      fi: "Solita, Insta Group, Tietoevry, Perfektio",
      "en-US": "Solita, Insta Group, Tietoevry, Perfektio"
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
    id: 6,
    companyName: "",
    location: "Physicum D105",
    title: {
      fi: "Rekry Speed Dating #2",
      "en-US": "Rekry Speed Dating #2"
    },
    description: {
      fi: "OP Ryhmä, KPMG, Accenture, Digia",
      "en-US": "OP Ryhmä, KPMG, Accenture, Digia"
    },
    fullDescription: {
      fi: "OP Ryhmä, KPMG, Accenture, Digia",
      "en-US": "OP Ryhmä, KPMG, Accenture, Digia"
    },
    speakers: [""],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 14, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 15, 30), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 9,
    companyName: "Huld",
    location: "Exactum B121",
    title: {
      fi: "SPACE projects (workshop)",
      "en-US": "SPACE projects (workshop)"
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
    id: 11,
    companyName: "Loimu + HY",
    location: "Exactum C123",
    title: {
      fi: "CV-paja",
      "en-US": "CV-workshop"
    },
    description: {
      fi: "Tule hiomaan CV:si kuntoon CV workshoppiin!!\n\nKumpulan Potentiaalin aika järjestetään CV workshop, jossa pääset hiomaan CV:si kuntoon Helsingin yliopiston uraohjaajien avulla. Voit tuoda oman CV:si mukaan tai aloittaa puhtaalta pöydältä. Työpajassa uraohjaajat jakavat vinkkejä ja auttavat parantelemaan CV:täsi, jotta mahdollisuutesi työmarkkinoilla paranevat. Tämä on ainutlaatuinen mahdollisuus parsia CV kuntoon vaikkapa kesätyönhakua varten kahden asiantuntijan kanssa!",
      "en-US":
        "Come polish your CV to a CV workshop!\n\nDuring Kumpulan Potentiaali we’ll hold a CV workshop where you get to polish your CV with the help of career counselors of Helsinki University. You can bring your current CV with you or start completely from scratch. The career counselors share info and tips about building a CV and help you improve your CV so that your job opportunities will improve as well. This is a unique opportunity to get your CV in shape with the help of two experts just in time for summer job search!"
    },
    fullDescription: {
      fi: "",
      "en-US": ""
    },
    speakers: [""],
    language: "en-US",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 15, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 16, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 13,
    companyName: "Accenture",
    location: "Exactum B123",
    title: {
      fi: "Introduction to 5G Edge Computing Lab",
      "en-US": "Introduction to 5G Edge Computing Lab"
    },
    description: {
      fi: "Introduction to 5G Edge Computing Lab at Accenture with use case examples in Employee Safety Video Analytics and Automated Robotic Inspection with Boston Dynamics Spot robot. Live robot demo and Q&A.",
      "en-US":
        "Introduction to 5G Edge Computing Lab at Accenture with use case examples in Employee Safety Video Analytics and Automated Robotic Inspection with Boston Dynamics Spot robot. Live robot demo and Q&A."
    },
    fullDescription: {
      fi: "",
      "en-US": ""
    },
    speakers: [],
    language: "en-US",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 11, 0), "Europe/Helsinki"),
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
      "en-US":
        "Think Company x Kumpulan Potentiaali: Työelämäpaneeli - Akateeminen yrittäjyys"
    },
    description: {
      fi: "Millaisia yrittäjiä Kumpulan kampukselta löytyy? Millaisia ovat kumpulalaiset startupit? Mitä yrityksen perustamista miettivän ehdottomasti pitää (tai ei pidä!) tehdä?\n\nHelsinki Think Company järjestää osana Kumpulan Potentiaali -työelämätapahtumaa paneelikeskustelun teemalla Akateeminen osaaminen käytäntöön, näkökulmana yrittäjyys. Tervetuloa seuraamaan paneelikeskustelua opiskelijoiden ja alumnien ja kysymään heidän kokemuksistaan.",
      "en-US":
        "Millaisia yrittäjiä Kumpulan kampukselta löytyy? Millaisia ovat kumpulalaiset startupit? Mitä yrityksen perustamista miettivän ehdottomasti pitää (tai ei pidä!) tehdä?\n\nHelsinki Think Company järjestää osana Kumpulan Potentiaali -työelämätapahtumaa paneelikeskustelun teemalla Akateeminen osaaminen käytäntöön, näkökulmana yrittäjyys. Tervetuloa seuraamaan paneelikeskustelua opiskelijoiden ja alumnien ja kysymään heidän kokemuksistaan."
    },
    fullDescription: {
      fi: "Millaisia yrittäjiä Kumpulan kampukselta löytyy? Millaisia ovat kumpulalaiset startupit? Mitä yrityksen perustamista miettivän ehdottomasti pitää (tai ei pidä!) tehdä?\n\nHelsinki Think Company järjestää osana Kumpulan Potentiaali -työelämätapahtumaa paneelikeskustelun teemalla Akateeminen osaaminen käytäntöön, näkökulmana yrittäjyys. Tervetuloa seuraamaan paneelikeskustelua opiskelijoiden ja alumnien ja kysymään heidän kokemuksistaan.",
      "en-US":
        "Millaisia yrittäjiä Kumpulan kampukselta löytyy? Millaisia ovat kumpulalaiset startupit? Mitä yrityksen perustamista miettivän ehdottomasti pitää (tai ei pidä!) tehdä?\n\nHelsinki Think Company järjestää osana Kumpulan Potentiaali -työelämätapahtumaa paneelikeskustelun teemalla Akateeminen osaaminen käytäntöön, näkökulmana yrittäjyys. Tervetuloa seuraamaan paneelikeskustelua opiskelijoiden ja alumnien ja kysymään heidän kokemuksistaan."
    },
    speakers: [
      "Sanna Kujala",
      "Teemu Koivisto",
      "Jere Partanen",
      "Juho Räsänen",
      "Sofia Vanhala",
      "Paneelin juontaa Tuomas Harju"
    ],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 17, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 19, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 15,
    companyName: "Reddal",
    location: "Exactum A111",
    title: {
      fi: "Changing how companies drive strategy and growth - business development as a service (BDaaS).",
      "en-US":
        "Changing how companies drive strategy and growth - business development as a service (BDaaS)."
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
    language: "en-US",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 14, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 15, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 16,
    companyName: "OP",
    location: "Exactum A111",
    title: {
      fi: "The innovation possibilities at our very own innovation center OP Lab (keynote)",
      "en-US":
        "The innovation possibilities at our very own innovation center OP Lab (keynote)"
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
    language: "en-US",
    link: "",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 15, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 16, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 17,
    companyName: "Capgemini",
    location: "Exactum A111",
    title: {
      fi: "Introduction to Capgemini",
      "en-US": "Introduction to Capgemini"
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
    language: "en-US",
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
  },
  {
    id: 19,
    companyName: "OP + Accenture",
    location: "Exactum B121",
    title: {
      fi: "CoachCafe",
      "en-US": "CoachCafe"
    },
    description: {
      fi: "Hae vinkit ja sparrausta koskien työelämää, työnhakua tai oman uran rakentamista.\nJa mitä parasta keskustelun aiheet rakentuvat vapaasti ryhmän toiveiden mukaan!\n\nKumpulan Potentiaali to 8.11. klo 13:00-14 (Exactum B121)",
      "en-US":
        "Mentors share tips and sparring regarding working life, job search or building your own career.\nAnd the best thing is that the topics of the discussion are structured freely according to the wishes of the group!\n\nKumpula Potential Thu 8.11. at 13:00-14 (Exactum B121)\n\nPlease remember that registration is binding.\n\nGet the best tips for job hunting!"
    },
    fullDescription: {
      fi: "",
      "en-US": ""
    },
    speakers: [],
    language: "fi",
    link: "https://www.lyyti.in/Coach_Cafe_Potentiaali_2022_8188/fi",
    link_en: "https://www.lyyti.in/Coach_Cafe_Potentiaali_2022_8188/en",
    startTime: utcToZonedTime(new Date(2022, 12, 8, 13, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2022, 12, 8, 14, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  }
]

const initialState = {
  events: schedule
}

const ScheduleTypes = {
  SET_EVENTS: "SET_EVENTS"
}

export const setEvents = (events) => ({
  type: ScheduleTypes.SET_EVENTS,
  payload: {
    events
  }
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ScheduleTypes.SET_EVENTS:
      return { ...state, events: { ...action.payload.events } }
    default:
      return state
  }
}
