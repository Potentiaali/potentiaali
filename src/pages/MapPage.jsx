import React from 'react'
import style from './Map.module.scss'
import AreaBadge from '../components/partials/badges/AreaBadge'
import BigBoothBadge from '../components/partials/badges/BigBoothBadge'
import { useTranslation } from 'react-i18next'
import ClassRoomBadge from '../components/partials/badges/ClassRoomBadge'
import companies from '../data/companies.json'

/**
 * Divide companies into groups according to their "booth" property.
 *
 * @returns {"A": [company1], "B": [company2]}
 */
const groupCompaniesByBoothArea = () => {
  return companies.reduce((agg, company) => {
    if (!company.booth) {
      return {
        ...agg,
        unknown: agg.unknown ? [...agg.unknown, company] : [company],
      };
    }

    const section = company.booth[0];

    return {
      ...agg,
      [section]: agg[section] ? [...agg[section], company] : [company],
    };
  }, {});
};

const MapPage = () => {
  const groupedCompanies = groupCompaniesByBoothArea();

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
          src="assets/kartta_2023.png"
          className={style.mapImage}
          id="map"
        />
      </div>
      <aside className={`app-section ${style.boothTableContainer}`}>
          {Object.entries(groupedCompanies).sort(([area1,], [area2,]) => area1.localeCompare(area2)).map(([area, companies]) => (
            <div key={area}>
              <h2>{t('map-area')} {area}</h2>
              <table className={style.boothTable}>
                <tbody>
                  {companies.sort((a, b) => a.booth.localeCompare(b.booth, undefined, {numeric:true})).map((company) => (
                    <tr key={company.id}>
                      <td className={style.boothCol}>{company.booth}</td>
                      <td>{company.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </aside>
    </>
  )
}

export default MapPage
