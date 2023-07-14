import React from 'react'
import Logo from '../components/partials/Logo'
import Companies from '../components/partials/Companies'
import { Program } from '../components/partials/Program'
import SpeedRekry from '../components/partials/SpeedRekry'
import config from '../data/config.json'
import { useTranslation } from 'react-i18next'
import Notification from '../components/partials/Notification'
import Hero from '../components/partials/Hero'
const MainPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Logo />
      <section className="app-section">
          <Hero />
        <Notification
          type="success"
          title={<h2>{t('event-notification-title')}</h2>}
        >
          <p>{t('event-notification-body-1')} </p>
          <p><a target="_blank" href={config.companyRegistrationLink} rel="noreferrer">{t('event-notification-body-2-url')} </a></p>
          <p>
            {t('event-notification-body-3')}{' '}
            <a target="_blank" href="mailto:info@potentiaali.com" rel="noreferrer">
              {t('event-notification-body-4')}{' '}
            </a>{' '}
          </p>
        </Notification>
      </section>
      <div className="app-statistics">
        <div className="single-stat">
          <span className="single-stat_main">1000+</span>
          <span className="single-stat_secondary">
            {t('student-attendees')}
            <sup>*</sup>
          </span>
        </div>
        <div className="single-stat">
          <span className="single-stat_main">45+</span>
          <span className="single-stat_secondary">
            {t('exhibitors')}
            <sup>*</sup>
          </span>
        </div>
      </div>
      <section className="app-section">
        <small>
          <sup>*</sup>
          {t('average-per-year')}
        </small>
      </section>
      <section className="app-section">
        <h1>{t('title-1')}</h1>
        <p> {t('main-part-1')} </p>
      </section>
      {config.eventDate !== '' && (
        <section className="app-section">
          <h1>{t('event-info-title')}</h1>
          <div>
            <ul className="event-info">
              <li>
                <span className="event-info-title">
                  <i className="fas fa-map-marked-alt"></i>
                </span>
                <span className="event-info-value">
                  {t('event-location')} {': '} {t('event-location-value')}
                </span>
              </li>
              <li>
                <span className="event-info-title">
                  <i className="fas fa-calendar-day"></i>
                </span>
                <span className="event-info-value">
                  {t('event-date')} {': '}
                  <time dateTime="2022-12-08 11:00">
                    {t('event-day')} {config.eventDate}
                  </time>
                </span>
              </li>
              {/* <li>
              <span className="event-info-title">
                <i className="fas fa-clock"></i>
              </span>
              <span className="event-info-value">
                {t("event-time")}  {": "} {t("event-time-prefix")} {config.eventTime}
             </span>
            </li>*/}
              <li>
                <a
                  className="link-btn"
                  alt="Show on Google Maps"
                  href="https://goo.gl/maps/1rh5pJXHwgtVffeGA"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="event-info-title">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="event-info-value">
                    {t('show-on-google-maps')}
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="link-btn"
                  alt="Add the event to your calendar"
                  href="Kumpulan_Potentiaali_2023.ics"
                  target="_blank"
                >
                  <span className="event-info-title">
                    <i className="fas fa-calendar-plus"></i>
                  </span>
                  <span className="event-info-value">
                    {t('add-to-calendar')}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      )}
      <section className="app-section">
        {config.showProgramView === true && <Program />}
      </section>
      <section className="app-section">
        {config.showSpeedRekry === true && (
          <SpeedRekry open={config.speedRekryOpen} />
        )}
      </section>
      <section className="app-section">
        {config.showCompanies === true && <Companies />}
      </section>
    </>
  )
}
export default MainPage
