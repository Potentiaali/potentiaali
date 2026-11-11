import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

// Event day: 26 Nov 2026 (JS months start at 0, so 10 = November)
export const START_HOUR = 11;

const at = (h, m = 0) => dayjs.tz(new Date(2026, 10, 26, h, m), "Europe/Helsinki");

export const tracks = [
  {
    name: {
      fi: 'Kumpulan Kampus',
      en: 'Kumpula Campus',
    },
  },
  {
    name: {
      fi: 'Salit Exactum A111 & A114',
      en: 'In Exactum A111 & A114'
    },
  },
  {
    name: {
      fi: 'Kirjasto G103D,E,G',
      en: 'In Library G103D,E,G'
    },
  },
  {
    name: {
      fi: 'Yritysedustajille',
      en: 'For company representatives',
    },
    hue: 215
  },
  {
    name: {
      fi: 'Think Company DK116',
      en: 'Think Company DK116'
    },
  }
];

export const schedule = [
  {
    id: 1,
    track: 1,
    companyName: "",
    location: "Kumpulan kampus",
    title: {
      fi: 'Kumpulan Potentiaali 2026',
      "en-US": 'Kumpulan Potentiaali 2026',
    },
    description: "",
    fullDescription: {
      fi: "",
      "en-US": "",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: at(11),
    endTime: at(17),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 2,
    track: 2,
    companyName: "TEK",
    location: "Exactum A114",
    title: {
      fi: "Löydä suuntasi – tutustu TEKin uuteen Työkirjaan!",
      "en-US": "Explore Your Career – Discover TEK's New Workbook!",
    },
    description: "",
    fullDescription: {
      fi: "Kaipaatko inspiraatiota työnhakuun tai pohditko urasi seuraavia askeleita? Tule ensimmäisten joukossa tutustumaan TEKin uuteen Työkirjaan 2027–2028! Tässä osallistavassa keskustelutilaisuudessa löydät käytännön vinkkejä ja uusia näkökulmia työnhakuun ja urasuunnitteluun. Pääset tutustumaan työkirjaan yhdessä muiden osallistujien kanssa, jakamaan kiinnostavimmat löytösi ja pohtimaan, miten kirjan vinkkejä ja harjoituksia voisi hyödyntää käytännössä. Et tarvitse ennakkovalmistautumista. Saat myös oman työkirjan mukaasi.",
      "en-US": "Looking for inspiration for your job search or wondering about your next career steps? Be among the first to explore TEK's brand-new Workbook 2027–2028! In this interactive discussion session, you'll discover practical tools and fresh perspectives on job searching and career planning. Together with other participants, you'll explore the workbook, share your favourite discoveries and discuss how to put its tips and exercises into practice. No preparation needed – just bring your curiosity! You'll also get your own copy of the workbook to take home.",
    },
    speakers: ["Salli Joutsenoja"],
    language: "en",
    link: "",
    startTime: at(11),
    endTime: at(11, 45),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 3,
    track: 3,
    companyName: "City of Helsinki x Career Services",
    location: "Library G103D,E,G",
    title: {
      fi: "Työnhaun pikaneuvonta",
      "en-US": "Walk-In Career Counselling",
    },
    description: "",
    fullDescription: {
      fi: "Mietityttääkö työnhaku tai mitä tekisit seuraavaksi? Tarvitsetko apua CV:n kanssa? Kaipaatko nopeaa neuvontaa työnhakuun liittyen? Tule pikaneuvontaan Kumpulan potentiaaliin! Emme voi ratkaista kaikkia ongelmiasi eikä meillä ole vastausta kaikkeen, mutta voimme toivottavasti auttaa sinua ottamaan seuraavan askeleen kohti työelämää. Enintään 10–15 minuutin pikaneuvontaa per henkilö ovat tarjoamassa Leena Rintala (uraohjaaja / Helsingin yliopiston urapalvelut), Kerttu Kaikkonen (asiantuntija / International House Helsinki) ja Tony Lappi-Seppälä-Sanchez (asiantuntija / International Talent Employment Service). Neuvomme englanniksi ja suomeksi, ja sekä kansainväliset että kotimaiset opiskelijat ovat tervetulleita. Et tarvitse ajanvarausta, joten voit vaan tulla paikalle omana itsenäsi työnhakuun liittyvän kysymyksen kanssa!",
      "en-US": "Wondering about how to find a job or what to do next? Need help with your CV? Want some quick advice on a job seeking related issue? Come to our Walk-In at Kumpulan potentiaali! We can't solve all your problems, nor do we have all the answers, but we can hopefully help you figure out the next step towards working life. Offering quick individual advice for a maximum of 10–15 minutes per person are Leena Rintala (Career Counsellor / University of Helsinki Career Services), Kerttu Kaikkonen (Specialist and Employment Coach / International House Helsinki) and Tony Lappi-Seppälä-Sanchez (Specialist / International Talent Employment Service). We offer guidance in English and Finnish, and both international and Finnish students are welcome. You do not need an appointment, you can just show up as you are with a job seeking related question you want to discuss!",
    },
    speakers: ["Leena Rintala", "Kerttu Kaikkonen", "Tony Lappi-Seppälä-Sanchez"],
    language: "en",
    link: "",
    startTime: at(11),
    endTime: at(13),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 4,
    track: 2,
    companyName: "ASM",
    location: "Exactum A111",
    title: {
      fi: "Materials Discovery with ASM",
      "en-US": "Materials Discovery with ASM",
    },
    description: "",
    fullDescription: {
      fi: "Semiconductors power the world and Finland plays a key role in enabling this technology. Finland is the home of Atomic Layer Deposition and ASM is the world leader in this field. We will talk about what Atomic Layer Deposition is (ALD) and inspire any science students to learn more about this topic. The talk would be hosted by Perttu Sippola, Process Engineer at ASM.",
      "en-US": "Semiconductors power the world and Finland plays a key role in enabling this technology. Finland is the home of Atomic Layer Deposition and ASM is the world leader in this field. We will talk about what Atomic Layer Deposition is (ALD) and inspire any science students to learn more about this topic. The talk would be hosted by Perttu Sippola, Process Engineer at ASM.",
    },
    speakers: ["Perttu Sippola"],
    language: "en",
    link: "",
    startTime: at(12),
    endTime: at(12, 30),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 5,
    track: 2,
    companyName: "Ilmatieteen laitos",
    location: "Exactum A111",
    title: {
      fi: "Operatiivinen sääennustetuotanto tekoälyn aikana",
      "en-US": "Operatiivinen sääennustetuotanto tekoälyn aikana",
    },
    description: "",
    fullDescription: {
      fi: "",
      "en-US": "",
    },
    speakers: ["Anniina Kokkonen"],
    language: "fi",
    link: "",
    startTime: at(13),
    endTime: at(13, 45),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 6,
    track: 2,
    companyName: "CSC - IT Center for Science",
    location: "Exactum A111",
    title: {
      fi: "From Student to Specialist: Opportunities in High-Performance Computing, Quantum Computing, and AI at CSC",
      "en-US": "From Student to Specialist: Opportunities in High-Performance Computing, Quantum Computing, and AI at CSC",
    },
    description: "",
    fullDescription: {
      fi: "How can advanced computing technologies support your academic journey and future career? Join Leopekka Saraste from CSC – IT Center for Science to discover how high-performance computing, AI for science, and quantum computing can support students and researchers along their academic journeys. Based on his personal experience of transitioning from a university student to a summer trainee and application specialist at CSC, Leopekka will share insights into CSC's computing services, learning opportunities, summer jobs, and potential career paths. He will also discuss the current landscape of cluster computing and how the increasing number of data centers, both in Finland and globally, is shaping the future of large-scale computing. Whether you are pursuing your bachelor's degree, conducting doctoral research, or exploring future career opportunities, this keynote will introduce new possibilities for academic and professional growth through advanced computing technologies.",
      "en-US": "How can advanced computing technologies support your academic journey and future career? Join Leopekka Saraste from CSC – IT Center for Science to discover how high-performance computing, AI for science, and quantum computing can support students and researchers along their academic journeys. Based on his personal experience of transitioning from a university student to a summer trainee and application specialist at CSC, Leopekka will share insights into CSC's computing services, learning opportunities, summer jobs, and potential career paths. He will also discuss the current landscape of cluster computing and how the increasing number of data centers, both in Finland and globally, is shaping the future of large-scale computing. Whether you are pursuing your bachelor's degree, conducting doctoral research, or exploring future career opportunities, this keynote will introduce new possibilities for academic and professional growth through advanced computing technologies.",
    },
    speakers: ["Leopekka Saraste"],
    language: "en",
    link: "",
    startTime: at(14),
    endTime: at(14, 30),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 7,
    track: 2,
    companyName: "Reddal",
    location: "Exactum A114",
    title: {
      fi: "How to excel in case interviews",
      "en-US": "How to excel in case interviews",
    },
    description: "",
    fullDescription: {
      fi: "This workshop provides a practical, hands-on introduction to case interviews. Participants will learn the core skills tested in case interviews and practice applying them through real example cases. The session covers the main case types, walks through a clear problem-solving process, and highlights key best practices and common pitfalls. Through interactive examples and guidance, attendees will gain confidence in structuring problems, forming hypotheses, interpreting data, and synthesizing actionable recommendations.",
      "en-US": "This workshop provides a practical, hands-on introduction to case interviews. Participants will learn the core skills tested in case interviews and practice applying them through real example cases. The session covers the main case types, walks through a clear problem-solving process, and highlights key best practices and common pitfalls. Through interactive examples and guidance, attendees will gain confidence in structuring problems, forming hypotheses, interpreting data, and synthesizing actionable recommendations.",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: at(15),
    endTime: at(15, 45),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 8,
    track: 2,
    companyName: "Maanmittauslaitoksen Paikkatietokeskus FGI",
    location: "Exactum A111",
    title: {
      fi: "Exploring Research and Innovation at the Finnish Geospatial Research Institute: Experiences on working at FGI as Young Researchers",
      "en-US": "Exploring Research and Innovation at the Finnish Geospatial Research Institute: Experiences on working at FGI as Young Researchers",
    },
    description: "",
    fullDescription: {
      fi: "What is it like to work as a geospatial researcher? In this keynote, postdoctoral researchers Dr Mariana Campos and Dr Emma Mannfors from the Finnish Geospatial Research Institute (FGI), part of the National Land Survey of Finland, will introduce FGI's multidisciplinary research environment and key research areas. The presentation will provide insights into everyday research work, current research topics, and career opportunities for students and early-career researchers interested in geospatial sciences.",
      "en-US": "What is it like to work as a geospatial researcher? In this keynote, postdoctoral researchers Dr Mariana Campos and Dr Emma Mannfors from the Finnish Geospatial Research Institute (FGI), part of the National Land Survey of Finland, will introduce FGI's multidisciplinary research environment and key research areas. The presentation will provide insights into everyday research work, current research topics, and career opportunities for students and early-career researchers interested in geospatial sciences.",
    },
    speakers: ["Dr Mariana Campos", "Dr Emma Mannfors"],
    language: "en",
    link: "",
    startTime: at(16),
    endTime: at(16, 45),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 9,
    track: 4,
    companyName: "",
    location: "Exactum Valopiha",
    title: {
      fi: 'Cocktails!',
      "en-US": 'Cocktails!',
    },
    description: "",
    fullDescription: {
      fi: "",
      "en-US": "",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: at(17),
    endTime: at(19),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 10,
    track: 5,
    companyName: "Helsinki Think Company",
    location: "Think Company DK116",
    title: {
      fi: "Kumpula Startup Showcase",
      "en-US": "Kumpula Startup Showcase",
    },
    description: "",
    fullDescription: {
      fi: "",
      "en-US": "",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: at(17),
    endTime: at(19),
    hideDetails: false,
    hideTime: false,
  },
  {
    id: 11,
    track: 1,
    companyName: "",
    location: "Kumpulan kampus",
    title: {
      fi: 'Afterparty!!!',
      "en-US": 'Afterparty!!!',
    },
    description: "",
    fullDescription: {
      fi: "",
      "en-US": "",
    },
    speakers: [],
    language: "en",
    link: "",
    startTime: at(19),
    endTime: at(23),
    hideDetails: false,
    hideTime: false,
  },
];

export default schedule;