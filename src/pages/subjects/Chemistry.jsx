import React from 'react'
import { Accordion } from '../../components/accordion/Accordion'
import { useTranslation } from 'react-i18next'

const Chemistry = () => {
  const { t } = useTranslation("subjects")
  return (
    <Accordion
      isRoot
      accordionId={'chemistry'}
      title={t('chemistry-title-text')}
    >
      <h5>{t('subjects-introduction')}</h5>
      <p>{t('chemistry-introduction-text')}</p>
      <h5>{t('work-descriptions-text')}</h5>
      <Accordion
        accordionId={'chemistry-the-synthetic'}
        title={t('chemistry-the-synthetic-title-text')}
        noShadow
      >
        {t('chemistry-the-synthetic-description-text')}
      </Accordion>
      <Accordion
        accordionId={'chemistry-analytician'}
        title={t('chemistry-analytician-title-text')}
        noShadow
      >
        {t('chemistry-analytician-description-text')}
      </Accordion>
      <Accordion
        accordionId={'chemistry-material-specialist'}
        title={t('chemistry-material-specialist-title-text')}
        noShadow
      >
        {t('chemistry-material-specialist-description-text')}
      </Accordion>
      <Accordion
        accordionId={'chemistry-researcher'}
        title={t('chemistry-researcher-title-text')}
        noShadow
      >
        {t('chemistry-researcher-description-text')}
      </Accordion>
    </Accordion>
  )
}

export default Chemistry
