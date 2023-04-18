import React from 'react'
import styles from './AreaBadge.module.scss'
import PropTypes from 'prop-types'
import className from 'classnames'
import { useTranslation } from 'react-i18next'

const AreaBadge = ({ area }) => {
  const { t } = useTranslation()
  return (
    <div
      className={className(
        {
          [styles.a]: area === 'A',
          [styles.b]: area === 'B',
          [styles.c]: area === 'C'
        },
        styles.areabadge
      )}
    >
      <span>{t('area')}</span>
      {area}
    </div>
  )
}
AreaBadge.propTypes = {
  area: PropTypes.string.isRequired
}

export default AreaBadge
