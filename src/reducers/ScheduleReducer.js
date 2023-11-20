import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

const schedule = [
  {
    id: 1,
    companyName: '',
    location: 'Arabian kauppakeskus',
    title: {
      fi: 'Iguana Arabia: Happy Hour',
      'en-US': 'Iguana Arabia: Happy Hour'
    },
    description: {
      fi: 'Happy Hour, pidetään ennen jatkoja',
      'en-US': 'Happy Hour, pidetään ennen jatkoja'
    },
    fulldescription: {
      fi: '',
      'en-US': ''
    },
    speakers: [],
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 17, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 19, 0), 'Europe/Helsinki'),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 2,
    companyName: '',
    location: 'Physicum',
    title: {
      fi: 'Jatkot: Arppa',
      'en-US': 'Afterparty: Arppa'
    },
    description: {
      fi: 'Kumpulan Potentiaali 2022 -tapahtuman jatkot',
      'en-US': "Afterparty of Kumpula's Potential 2022"
    },
    fullDescription: {
      fi: 'Muista lunastaa päivän aikana jaettava ilmainen jatkoranneke!\n\nTänä vuonna Potentiaalin jatkojen pääesiintyjä on Arppa! Ennen kaikkea energisistä, improvisaatioon perustuvista keikoistaan tunnettu Arppa yhtyeineen on yksi tämänhetkisen Suomi-indien kärkinimistä. Arpan ihastuttava musiikki on ajatonta ja tekstit kuin liikkuvaa kuvaa – oivaltavat, vilpittömät ja tarkkanäköisesti kuvatut tunnelmat liikkuvat Kokkolan Ykspihlajasta aina öisen Helsingin kautta Laila Kinnusen kanssa salakapakkaan heinäkuuhun ’58.\n\nArpan yhtyeessä vaikuttavat muusikot Ville-Veikko Airaniemi, Eero Seppä ja Okko Saastamoinen. Luontevan vaivaton olemus ja yhtyeen esiintymisistä huokuva vilpitön riemu ei voi olla tempaamatta läsnäolijoita mukaansa!\n\nPotentiaalin jatkoilla lämppärinä soittaa tänä vuonna Bastu! Viiden ystävyksen muodostaman helsinkiläisen indie rock -yhtyeen tarina sai alkunsa Vaskivuoren lukiosta noin vuosikymmen sitten. Bastussa yhdistyy taitava biisinkirjoitus sekä räjähtävä live-energia.',
      'en-US': "Remember to grab your free afterparty ticket during the day!\n\nThis year's afterparty headliner is Arppa! Known above all for his energetic, improvisation-based concerts, Arppa and the band are one of the top names in current Finnish indie music. Arppa's delightful music is timeless and the lyrics are like moving pictures - insightful, sincere and perceptively described.\n\nArppa's band includes musicians Ville-Veikko Airaniemi, Eero Seppä and Okko Saastamoinen. The naturally effortless presence and the sincere joy emanating from the band's performances never fail to captivate audiences!\n\nThis year's opening act at the Potentiaali after party is Bastu! An indie rock band started by five friends from Helsinki, their story began in Vaskivuori high school about a decade ago. Bastu combines skillful songwriting and explosive live energy."
    },
    speakers: [],
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 19, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 23, 0), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 3,
    companyName: '',
    location: 'Physicum D104',
    title: {
      fi: 'CV Profile Photography',
      'en-US': 'CV Profile Photography'
    },
    description: {
      fi: 'CV Profile Photography',
      'en-US': 'CV Profile Photography'
    },
    fullDescription: {
      fi: '',
      'en-US': ''
    },
    speakers: [],
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 11, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 12, 0), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 4,
    companyName: '',
    location: 'Physicum D105',
    title: {
      fi: 'Rekry Speed Dating: Group 1',
      'en-US': 'Rekry Speed Dating: Group 1'
    },
    description: {
      fi: 'Futurice, Netlight, Solita, Taito United',
      'en-US': 'Futurice, Netlight, Solita, Taito United'
    },
    fullDescription: {
      fi: '',
      'en-US': ''
    },
    speakers: [],
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 13, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 14, 30), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 5,
    companyName: '',
    location: 'Physicum D105',
    title: {
      fi: 'Rekry Speed Dating: Group 2',
      'en-US': 'Rekry Speed Dating: Group 2'
    },
    description: {
      fi: 'Futurice, Netlight, Solita, Taito United',
      'en-US': 'Futurice, Netlight, Solita, Taito United'
    },
    fullDescription: {
      fi: '',
      'en-US': ''
    },
    speakers: [],
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 14, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 15, 45), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 11,
    companyName: '',
    location: 'Exactum D204',
    title: {
      fi: 'CV Profile Photography',
      'en-US': 'CV Profile Photography'
    },
    description: {
      fi: '',
      'en-US':''
    },
    fullDescription: {
      fi: '',
      'en-US': ''
    },
    speakers: [''],
    language: 'en-US',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 11, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 12, 15), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 13,
    companyName: 'Eficode',
    location: 'Exactum B123',
    title: {
      fi: "Harnessing AI: Robots won't take your job, but someone else using robots might.",
      'en-US': "Harnessing AI: Robots won't take your job, but someone else using robots might."
    },
    description: {
      fi: 'Tule katsomaan luento ja lunasta harvinainen "minussa on potentiaalia"-haalarimerkki!',
      'en-US': "Come watch the keynote and claim a rare \"Minussa on potentiaalia\"-patch!"
    },
    fullDescription: {
      fi: "Harnessing AI: Robots won't take your job, but someone else using robots might.",
      'en-US': "Harnessing AI: Robots won't take your job, but someone else using robots might."
    },
    speakers: [],
    language: 'en-US',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 11, 15), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 12, 0), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 14,
    companyName: 'CSC',
    location: 'Exactum B123',
    title: {
      fi: 'CSC - Tieteen tietotekniikan keskus Oy: "Physicist in the world of supercomputers"',
      'en-US':
        'CSC - Tieteen tietotekniikan keskus Oy: "Physicist in the world of supercomputers"'
    },
    description: {
      fi: 'Tule katsomaan luento ja lunasta harvinainen "minussa on potentiaalia"-haalarimerkki!',
      'en-US':
        'Come watch the keynote and claim a rare \"Minussa on potentiaalia\"-patch!'
    },
    fullDescription: {
      fi: 'CSC - Tieteen tietotekniikan keskus Oy: "Physicist in the world of supercomputers"',
      'en-US': 'CSC - Tieteen tietotekniikan keskus Oy: "Physicist in the world of supercomputers"'
    },
    speakers: [],
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11,23, 12, 30), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 13, 15), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 15,
    companyName: 'OP Ryhmä',
    location: 'Exactum B123',
    title: {
      fi: 'OP Ryhmä: "Banks as quantitative phenomenon"',
      'en-US':
        'OP Ryhmä: "Banks as quantitative phenomenon"'
    },
    description: {
      fi: 'Tule katsomaan luento ja lunasta harvinainen "minussa on potentiaalia"-haalarimerkki!',
      'en-US': 'Come watch the keynote and claim a rare \"Minussa on potentiaalia\"-patch!'
    },
    fullDescription: {
      fi: 'OP Ryhmä: "Banks as quantitative phenomenon"',
      'en-US': 'OP Ryhmä: "Banks as quantitative phenomenon"'
    },
    speakers: [],
    language: 'en-US',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 14, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 14, 45), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 18,
    companyName: '',
    location: '',
    title: {
      fi: 'Ständit esillä',
      'en-US': 'Booths open'
    },
    description: {
      fi: '',
      'en-US': ''
    },
    fullDescription: {
      fi: '',
      'en-US': ''
    },
    speakers: [],
    language: 'en-US',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 11, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 17, 0), 'Europe/Helsinki'),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 19,
    companyName: 'TietoEvry',
    location: 'Exactum A114',
    title: {
      fi: 'Keynote: TietoEvry',
      'en-US': 'Keynote: TietoEvry'
    },
    description: {
      fi: 'Tule katsomaan luento ja lunasta harvinainen "minussa on potentiaalia"-haalarimerkki!',
      'en-US': 'Come watch the keynote and claim a rare \"Minussa on potentiaalia\"-patch!'
    },
    fullDescription: null,
    speakers: [],
    language: 'en-US',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 12, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 12, 45), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 20,
    companyName: 'TietoEvry',
    location: 'Exactum A114',
    title: {
      fi: 'Workshop: TietoEvry',
      'en-US': 'Workshop: TietoEvry'
    },
    description: {
      fi: 'Osallistu työpajaan ja lunasta harvinainen "minussa on potentiaalia"-haalarimerkki!',
      'en-US': 'Participate in the workshop and claim a rare \"Minussa on potentiaalia\"-patch!'
    },
    fullDescription: null,
    speakers: [],
    language: 'en-US',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 13, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 14, 0), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 21,
    companyName: 'Reddal',
    location: 'Exactum A114',
    title: {
      fi: 'Workshop: Reddal Helsinki Oy; "Case interviews and how to prepare"',
      'en-US': 'Workshop: Reddal Helsinki Oy; "Case interviews and how to prepare"'
    },
    description: {
      fi: 'Osallistu työpajaan ja lunasta harvinainen "minussa on potentiaalia"-haalarimerkki!',
      'en-US': 'Participate in the workshop and claim a rare \"Minussa on potentiaalia\"-patch!'
    },
    fullDescription: {
      fi: 'Workshop: Reddal Helsinki Oy; "Case interviews and how to prepare"',
      'en-US': 'Workshop: Reddal Helsinki Oy; "Case interviews and how to prepare"'
    },
    speakers: [],
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 15, 30), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 16, 30), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 22,
    companyName: '',
    location: 'Info desk',
    title: {
      fi: 'Rannekkeet jatkoille',
      'en-US': 'Afterparty tickets'
    },
    description: {
      fi: 'Lunasta ilmainen jatkoranneke Kumpulan Potentiaalin jatkoille!',
      'en-US': 'Claim a free ticket to Kumpulan Potentiaali afterparty!'
    },
    fullDescription: {
      fi: '100 ranneketta.',
      'en-US': '100 tickets.'
    },
    speakers: [],
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 11, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 11, 30), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 23,
    companyName: '',
    location: 'Info desk',
    title: {
      fi: 'Rannekkeet jatkoille',
      'en-US': 'Afterparty tickets'
    },
    description: {
      fi: 'Lunasta ilmainen jatkoranneke Kumpulan Potentiaalin jatkoille!',
      'en-US': 'Claim a free ticket to Kumpulan Potentiaali afterparty!'
    },
    fullDescription: {
      fi: '150 ranneketta.',
      'en-US': '150 tickets.'
    },
    speakers: [],
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 13, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 13, 30), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  },
  {
    id: 24,
    companyName: '',
    location: 'Info desk',
    title: {
      fi: 'Rannekkeet jatkoille',
      'en-US': 'Afterparty tickets'
    },
    description: {
      fi: 'Lunasta ilmainen jatkoranneke Kumpulan Potentiaalin jatkoille!',
      'en-US': 'Claim a free ticket to Kumpulan Potentiaali afterparty!'
    },
    fullDescription: {
      fi: 'Jäljellä olevat rannekkeet.',
      'en-US': 'All remaining tickets..'
    },
    speakers: [],
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 15, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 15, 30), 'Europe/Helsinki'),
    hideDetails: false,
    hideTime: false
  }
]

const initialState = {
  events: schedule
}

const ScheduleTypes = {
  SET_EVENTS: 'SET_EVENTS'
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
