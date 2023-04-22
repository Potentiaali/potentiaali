import React from 'react'
import { Accordion } from '../../components/accordion/Accordion'
import { useTranslation } from 'react-i18next'

const Statistics = () => {
  const { t } = useTranslation("subjects")
  return (
    <Accordion
      isRoot
      accordionId={'statistics'}
      title={t('statistics-title-text')}
    >
      <h5>{t('subjects-introduction')}</h5>
      <p>{t('statistics-introduction-text')}</p>
      <h5>{t('work-descriptions-text')}</h5>
      <Accordion
        accordionId={'statistics-data-analysist'}
        title={t('statistics-data-analysist-title-text')}
        noShadow
      >
        {t('statistics-data-analysist-description-text')}
      </Accordion>
      <Accordion
        accordionId={'statistics-statistician'}
        title={t('statistics-statistician-title-text')}
        noShadow
      >
        {t('statistics-statistician-description-text')}
      </Accordion>
      <Accordion
        accordionId={'statistics-data-scientist'}
        title={t('statistics-data-scientist-title-text')}
        noShadow
      >
        {t('statistics-data-scientist-description-text')}
      </Accordion>
    </Accordion>
  )
}

export default Statistics
