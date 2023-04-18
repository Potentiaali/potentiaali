import React from 'react'
import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1>{t('pageNotFound')}</h1>
    </>
  )
}
export default NotFoundPage
