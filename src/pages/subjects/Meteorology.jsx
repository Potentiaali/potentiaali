import React from 'react'
import { Accordion } from '../../components/accordion/Accordion'
import { useTranslation } from 'react-i18next'

const Meteorology = () => {
  const { t } = useTranslation("subjects")
  return (
    <Accordion
      isRoot
      accordionId={'meteorology'}
      title={t('meteorology-title-text')}
    >
      <h5>{t('subjects-introduction')}</h5>
      <p>{t('meteorology-introduction-text')}</p>
      <h5>{t('work-descriptions-text')}</h5>

      <Accordion
        accordionId={'meteorology-meteorologist'}
        title={t('meteorology-meteorologist-title-text')}
        noShadow
      >
        {t('meteorology-meteorologist-description-text')}
      </Accordion>
      <Accordion
        accordionId={'meteorology-consultant'}
        title={t('meteorology-consultant-title-text')}
        noShadow
      >
        {t('meteorology-consultant-description-text')}
      </Accordion>
      <Accordion
        accordionId={'meteorology-physicist'}
        title={t('meteorology-physicist-title-text')}
        noShadow
      >
        {t('meteorology-physicist-description-text')}
      </Accordion>
    </Accordion>
  )
}

export default Meteorology
