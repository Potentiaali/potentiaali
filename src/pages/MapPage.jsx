import React from 'react'
import style from './Map.module.scss'
import AreaBadge from '../components/partials/badges/AreaBadge'
import BigBoothBadge from '../components/partials/badges/BigBoothBadge'
import { useTranslation } from 'react-i18next'
import ClassRoomBadge from '../components/partials/badges/ClassRoomBadge'

const MapPage = () => {
  const showFullScreen = () => {
    const elem = document.getElementById('map')
    if (document.webkitFullscreenElement) {
      document.webkitCancelFullScreen()
    } else {
      elem.requestFullscreen()
    }
  }
  const { t } = useTranslation()
  return (
    <>
      <div className={style.map}>
        <div className={style.mapInfo}>
          <button
            className={style.fullScreenButton}
            onClick={() => showFullScreen()}
          >
            <i className="fas fa-expand-arrows-alt"></i>{' '}
            <span> {t('fullscreen')}</span>
          </button>
          <div className={style.mapInfoEntry}>
            <AreaBadge area="A" />
          </div>
          <div className={style.mapInfoEntry}>
            <AreaBadge area="B" />
          </div>
          <div className={style.mapInfoEntry}>
            <AreaBadge area="C" />
          </div>
          <div className={style.mapInfoEntry}>
            <BigBoothBadge value="A1" />
            <span>{t('big-booth')}</span>
          </div>
          <div className={style.mapInfoEntry}>
            <BigBoothBadge value="A2" />
            <span> {t('big-booth')}</span>
          </div>
          <div className={style.mapInfoEntry}>
            <BigBoothBadge value="C1" />
            <span> {t('big-booth')}</span>
          </div>
          <div className={style.mapInfoEntry}>
            <BigBoothBadge value="C2" />

            <span> {t('big-booth')}</span>
          </div>
          <div className={style.mapInfoEntry}>
            <ClassRoomBadge text="D114" />
            <span> {t('company-info')}</span>
          </div>
        </div>
        <img
          alt="Event map"
          src="assets/kartta_2022.png"
          className={style.mapImage}
          id="map"
        />
      </div>
    </>
  )
}

export default MapPage
