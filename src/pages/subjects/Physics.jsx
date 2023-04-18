import React from 'react'
import { Accordion } from '../../components/accordion/Accordion'
import { useTranslation } from 'react-i18next'

const Physics = () => {
  const { t } = useTranslation()
  return (
    <Accordion isRoot accordionId={'physics'} title={t('physics-title-text')}>
      <h5>{t('subjects-introduction')}</h5>
      <p>{t('physics-introduction-text')}</p>
      <h5>{t('work-descriptions-text')}</h5>
      <Accordion
        accordionId={'physics-researcher'}
        title={t('physics-researcher-title-text')}
        noShadow
      >
        {t('physics-researcher-description-text')}
      </Accordion>
      <Accordion
        accordionId={'physics-data-analysist'}
        title={t('physics-data-analysist-title-text')}
        noShadow
      >
        {t('physics-data-analysist-description-text')}
      </Accordion>
      <Accordion
        accordionId={'physics-specialist'}
        title={t('physics-specialist-title-text')}
        noShadow
      >
        {t('physics-specialist-description-text')}
      </Accordion>
    </Accordion>
  )
}

export default Physics
