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
      fi: 'Jatkot',
      'en-US': 'Afterparty'
    },
    description: {
      fi: 'Kumpulan Potentiaali 2022 -tapahtuman jatkot',
      'en-US': "Afterparty of Kumpula's Potential 2022"
    },
    fullDescription: {
      fi: '',
      'en-US': ''
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
      fi: "Harnessing AI: Robots won't take your job, but someone else using robots might.",
      'en-US': "Harnessing AI: Robots won't take your job, but someone else using robots might."
    },
    fullDescription: {
      fi: '',
      'en-US': ''
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
      fi: 'CSC - Tieteen tietotekniinan keskus Oy: "Physicist in the world of supercomputers"',
      'en-US':
        'CSC - Tieteen tietotekniinan keskus Oy: "Physicist in the world of supercomputers"'
    },
    description: {
      fi: 'CSC - Tieteen tietotekniinan keskus Oy: "Physicist in the world of supercomputers"',
      'en-US':
        'CSC - Tieteen tietotekniinan keskus Oy: "Physicist in the world of supercomputers"'
    },
    fullDescription: {
      fi: '',
      'en-US': ''
    },
    speakers: [
''
    ],
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
    location: '',
    title: {
      fi: 'Keynote: TietoEvry',
      'en-US': 'Keynote: TietoEvry'
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
    startTime: dayjs.tz(new Date(2023, 11, 23, 12, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 12, 45), 'Europe/Helsinki'),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 20,
    companyName: 'TietoEvry',
    location: '',
    title: {
      fi: 'Workshop: TietoEvry',
      'en-US': 'Workshop: TietoEvry'
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
    startTime: dayjs.tz(new Date(2023, 11, 23, 13, 0), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 14, 0), 'Europe/Helsinki'),
    hideDetails: true,
    hideTime: false
  },
  {
    id: 21,
    companyName: 'Reddal',
    location: '',
    title: {
      fi: 'Workshop: Reddal Helsinki Oy; "Case interviews and how to prepare" ',
      'en-US': 'Workshop: Reddal Helsinki Oy; "Case interviews and how to prepare" '
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
    language: 'fi',
    link: '',
    startTime: dayjs.tz(new Date(2023, 11, 23, 15, 30), 'Europe/Helsinki'),
    endTime: dayjs.tz(new Date(2023, 11, 23, 16, 30), 'Europe/Helsinki'),
    hideDetails: true,
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
