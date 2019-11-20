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
    endTime: utcToZonedTime(new Date(2019, 11, 14, 23, 30), "Europe/Helsinki"),
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
    companyName: "HY Urapalvelut",
    location: "Exactum B120",
    title: {
      fi: "HY Urapalvelut: Harjoitteluinfo",
      "en-US": "Career Services: Traineeship info (Finnish)"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi:
        "Harjoitteluinfossa saat tietoa työnhausta, opintoihin kuuluvan harjoittelun suorittamisesta, harjoittelupaikan hakemisesta sekä harjoittelun rahoituksesta. Infossa on mukana myös liikkuvuuspalveluiden asiantuntija kertomassa ulkomailla tehtävän harjoittelun rahoitusvaihtoehdoista. \n Tervetuloa mukaan! \n Ilmoittaudu linkin kautta: https://www.lyyti.fi/reg/harjoitteluinfot",
      "en-US":
        "This is a traineeship information session, which will be held in Finnish. If you'd like to attend one in English, please visit https://www.lyyti.fi/reg/harjoitteluinfot for more details."
    },
    speakers: [],
    language: "fi",
    link: "https://www.lyyti.fi/reg/harjoitteluinfot",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 16, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 17, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 11,
    companyName: "Loimu",
    location: "Exactum B121",
    title: {
      fi: "Näin myyn osaamiseni työnantajalle",
      "en-US": "Näin myyn osaamiseni työnantajalle"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi: "Jokaisella meistä on uniikki yhdistelmä taitoja ja tapoja toimia. Työelämässä itsensä tunteminen ja osaamisen sanoittaminen luovat pohjan onnistuneelle työnhaulle. Tervetuloa mukaan hahmottamaan osaa osaamista ja sanoittamaan sitä työnantajalle, ansioluetteloon, työhakemukseen ja LinkedIn-profiiliin!",
      "en-US": "Jokaisella meistä on uniikki yhdistelmä taitoja ja tapoja toimia. Työelämässä itsensä tunteminen ja osaamisen sanoittaminen luovat pohjan onnistuneelle työnhaulle. Tervetuloa mukaan hahmottamaan osaa osaamista ja sanoittamaan sitä työnantajalle, ansioluetteloon, työhakemukseen ja LinkedIn-profiiliin!"
    },
    speakers: [],
    language: "fi",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 14, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 15, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 12,
    companyName: "TE-toimisto",
    location: "Exactum B121",
    title: {
      fi: "Working in Finland as an International Student",
      "en-US": "Working in Finland as an International Student"
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
    hideDetails: false,
    hideTime: false
  },
  {
    id: 13,
    companyName: "HY Alumnit",
    location: "Exactum B121",
    title: {
      fi: "[Peruttu] CoachCafe – parhaat vinkit työnhakuun!",
      "en-US": "[Cancelled] CoachCafe - Looking for a job?"
    },
    description: {
      fi: `Mentorit jakavat vinkkejä ja sparrausta koskien työelämää, työnhakua tai oman uran rakentamista.`,
      "en-US":
        "Join us at Kumpula's Potential where mentors share tips and sparring about working life, looking for a job, or building your own career."
    },
    fullDescription: {
      fi: `Mentorit jakavat vinkkejä ja sparrausta koskien työelämää, työnhakua tai oman uran rakentamista.
Ja mitä parasta keskustelun aiheet rakentuvat vapaasti ryhmän toiveiden mukaan!
  
Ilmoittaudu mukaan 11.11. mennessä: https://www.lyyti.in/coachcafe_potentiaali_2019
Muistathan, että ilmoittautuminen on sitova.
  
Mukana ovat seuraavat yritykset ja mentorit:
  
Kimmo Kärkkäinen
Foreca Ltd
  
Data Engineer Venla Viljamaa 
Solita
      `,
      "en-US": `Join us at Kumpula's Potential where mentors share tips and sparring about working life, looking for a job, or building your own career.
  
Sign up before 11.11. : https://www.lyyti.in/coachcafe_potentiaali_2019
  
Companies and mentors:
  
Kimmo Kärkkäinen
Foreca Ltd
  
Data Engineer Venla Viljamaa
Solita
      `
    },
    speakers: [
      "Kimmo Kärkkäinen, Foreca Ltd",
      "Venla Viljamaa, Data Engineer at Solita"
    ],
    language: "fi",
    link: "https://www.lyyti.in/coachcafe_potentiaali_2019",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 15, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 16, 0), "Europe/Helsinki"),
    hideDetails: false,
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
      fi: `Kiinnostaako kuulla, miten datatieteen menetelmiä sovelletaan käytännön liiketoimintaongelmien ratkaisussa? Tämän vuoden Potentiaalissa datatiedettä sivuavat puheenvuorot on koottu yhteen paneelikeskusteluun, jossa mukana mukana ovat data scientistit OPltä, Relexiltä, Rambollilta, Vismalta ja Yleltä. 

Keskustelun aikana on käytössä Flinga-keskustelualusta, jonne voit halutessasi jo nyt lisätä kysymyksiä panelisteille https://edu.flinga.fi/s/EEW7K9G`,
      "en-US": `Kiinnostaako kuulla, miten datatieteen menetelmiä sovelletaan käytännön liiketoimintaongelmien ratkaisussa? Tämän vuoden Potentiaalissa datatiedettä sivuavat puheenvuorot on koottu yhteen paneelikeskusteluun, jossa mukana mukana ovat data scientistit OPltä, Relexiltä, Rambollilta, Vismalta ja Yleltä. 

      Keskustelun aikana on käytössä Flinga-keskustelualusta, jonne voit halutessasi jo nyt lisätä kysymyksiä panelisteille https://edu.flinga.fi/s/EEW7K9G`,
    },
    speakers: ["OP", "Relex", "Ramboll", "Visma", "Yle"],
    language: "fi",
    link: "https://edu.flinga.fi/s/EEW7K9G",
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 12, 30),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 14, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 16,
    companyName: "OP",
    location: "Exactum B123",
    title: {
      fi: "From Neuroscience to Risk Analysis",
      "en-US": "From Neuroscience to Risk Analysis"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi: `Significant portion of people working in OP Risk Management have background in natural sciences, such as in theoretical or technical physics, mathematics, computer science - and even in neuroscience. 

In addition to the similar data analysis methods, risk management and scientific research share also other features: possibility to develop analysis tools by programming, problem solving at many levels from more practical to theoretical, and grasping the essential from extensive information. Therefore, a background in natural scientific research gives a good background for a career in finance.
      `,
      "en-US": `Significant portion of people working in OP Risk Management have background in natural sciences, such as in theoretical or technical physics, mathematics, computer science - and even in neuroscience. 

In addition to the similar data analysis methods, risk management and scientific research share also other features: possibility to develop analysis tools by programming, problem solving at many levels from more practical to theoretical, and grasping the essential from extensive information. Therefore, a background in natural scientific research gives a good background for a career in finance.
      `
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 14, 30),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 15, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 17,
    companyName: "Bluefors",
    location: "Exactum B123",
    title: {
      fi: "Cooling for quantum computers, technology and challenges",
      "en-US": "Cooling for quantum computers, technology and challenges"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi:
        "In this talk Dr. Anssi Salmela will briefly introduce dilution refrigeration, the only continuous cooling technology to reach temperatures 0.01 Kelvin. Dilution refrigerators are used in a wide range of applications from astronomy (to cool down detectors in telescopes) to the lenght scales of an atom (graphene, nanotubes). Currently, the research on solid state quantum computing is one of the main applications that uses this cooling technology. Anssi Salmela will discuss general challenges related to the low temperature and also future challenges with the number of qubits in quantum computing going up.",
      "en-US":
        "In this talk Dr. Anssi Salmela will briefly introduce dilution refrigeration, the only continuous cooling technology to reach temperatures 0.01 Kelvin. Dilution refrigerators are used in a wide range of applications from astronomy (to cool down detectors in telescopes) to the lenght scales of an atom (graphene, nanotubes). Currently, the research on solid state quantum computing is one of the main applications that uses this cooling technology. Anssi Salmela will discuss general challenges related to the low temperature and also future challenges with the number of qubits in quantum computing going up."
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 15, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 15, 30), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 18,
    companyName: "Digia",
    location: "Exactum B123",
    title: {
      fi:
        "The IT sector from the developer’s perspective – Is it worth all the hype?",
      "en-US":
        "The IT sector from the developer’s perspective – Is it worth all the hype?"
    },
    description: {
      fi:
        "If you have read the newspapers lately you may have noticed the huge hype about the IT sector. Software Developers wanted. Hopefully more alive than dead. Are software developers really the rockstars of the 2020s and is a software developer’s job something that the young people should seriously consider?",
      "en-US":
        "If you have read the newspapers lately you may have noticed the huge hype about the IT sector. Software Developers wanted. Hopefully more alive than dead. Are software developers really the rockstars of the 2020s and is a software developer’s job something that the young people should seriously consider?"
    },
    fullDescription: {
      fi:
        "If you have read the newspapers lately you may have noticed the huge hype about the IT sector. Software Developers wanted. Hopefully more alive than dead. Are software developers really the rockstars of the 2020s and is a software developer’s job something that the young people should seriously consider?",
      "en-US":
        "If you have read the newspapers lately you may have noticed the huge hype about the IT sector. Software Developers wanted. Hopefully more alive than dead. Are software developers really the rockstars of the 2020s and is a software developer’s job something that the young people should seriously consider?"
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 15, 30),
      "Europe/Helsinki"
    ),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 16, 0), "Europe/Helsinki"),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 19,
    companyName: "Futurice",
    location: "Exactum B123",
    title: {
      fi: "The Art of Side Projects",
      "en-US": "The Art of Side Projects"
    },
    description: {
      fi: "",
      "en-US": ""
    },
    fullDescription: {
      fi:
        "Have you ever heard that you need experience to get a job that would help you get experience? One of the ways to bridge that gap is to build hobby projects. In this talk, I'll share insights based on my personal experience and history of building these projects: what to build, how to do it and how to use them to get a job in tech.",
      "en-US":
        "Have you ever heard that you need experience to get a job that would help you get experience? One of the ways to bridge that gap is to build hobby projects. In this talk, I'll share insights based on my personal experience and history of building these projects: what to build, how to do it and how to use them to get a job in tech."
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: utcToZonedTime(new Date(2019, 11, 14, 16, 0), "Europe/Helsinki"),
    endTime: utcToZonedTime(new Date(2019, 11, 14, 16, 30), "Europe/Helsinki"),
    hideDetails: false,
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
    startTime: utcToZonedTime(
      new Date(2019, 11, 14, 17, 30),
      "Europe/Helsinki"
    ),
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
