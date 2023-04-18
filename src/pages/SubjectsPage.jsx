import React from 'react'
import Meteorology from './subjects/Meteorology'
import Physics from './subjects/Physics'
import Geophysics from './subjects/Geophysics'
import Geography from './subjects/Geography'
import Astronomy from './subjects/Astronomy'
import Chemistry from './subjects/Chemistry'
import Statistics from './subjects/Statistics'
import Mathematics from './subjects/Mathematics'
import ComputerScience from './subjects/ComputerScience'
import Geology from './subjects/Geology'
import { useTranslation } from 'react-i18next'

const SubjectsPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <section className="app-section">
        <h1>{t('subjects-page-title-text')}</h1>
        <Physics />
        <Geophysics />
        <Geology />
        <Chemistry />
        <Geography />
        <Mathematics />
        <Meteorology />
        <ComputerScience />
        <Statistics />
        <Astronomy />
      </section>
    </>
  )
}

export default SubjectsPage
