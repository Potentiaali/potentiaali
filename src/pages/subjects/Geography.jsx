import React from 'react'
import { Accordion } from '../../components/accordion/Accordion'
import { useTranslation } from 'react-i18next'

const Geography = () => {
  const { t } = useTranslation("subjects")
  return (
    <Accordion
      isRoot
      accordionId={'geography'}
      title={t('geography-title-text')}
    >
      <h5>{t('subjects-introduction')}</h5>
      <p>{t('geography-introduction-text')}</p>

      <h5>{t('work-descriptions-text')}</h5>
      <Accordion
        accordionId={'geography-geo-location-consultant'}
        title={t('geography-geo-location-consultant-title-text')}
        noShadow
      >
        {t('geography-geo-location-consultant-description-text')}
      </Accordion>
      <Accordion
        accordionId={'geography-designer'}
        title={t('geography-designer-title-text')}
        noShadow
      >
        {t('geography-designer-description-text')}
      </Accordion>
      <Accordion
        accordionId={'geography-cartographer'}
        title={t('geography-cartographer-title-text')}
        noShadow
      >
        {t('geography-cartographer-description-text')}
      </Accordion>
    </Accordion>
  )
}
export default Geography
