import React from "react";
import Logo from "../components/partials/Logo";
import Companies from "../components/partials/Companies";
import { Program } from "../components/partials/Program";
import SpeedRekry from "../components/partials/SpeedRekry";
import config from "../data/config.json";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import Notification from '../components/partials/Notification'
import Hero from "../components/partials/Hero";
import classNames from "classnames";
const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Logo />
      <section className="app-section">
        {/* <Notification
          type="success"
          title={<h2>{t('event-notification-title')}</h2>}
        >
          <p>{t('event-notification-body-1')} </p>
          <p><a target="_blank" href={config.companyRegistrationLink} rel="noreferrer">{t('event-notification-body-2-url')} </a></p>
          <p><a target="_blank" href={config.discountedRegistrationLink} rel="noreferrer">{t('discounted-registration-url')} </a></p>
          <p>
            {t('event-notification-body-3')}{' '}
            <a target="_blank" href="mailto:info@potentiaali.com" rel="noreferrer">
              {t('event-notification-body-4')}{' '}
            </a>{' '}
          </p>
        </Notification> */}
      </section>
      {/*<div className="app-statistics">
        <div className="single-stat">
          <span className="single-stat_main">1000+</span>
          <span className="single-stat_secondary">
            {t("student-attendees")}
            <sup>*</sup>
          </span>
        </div>
        <div className="single-stat">
          <span className="single-stat_main">35+</span>
          <span className="single-stat_secondary">
            {t("exhibitors")}
            <sup>*</sup>
          </span>
        </div>
      </div>
      <section className="app-section">
        <small>
          <sup>*</sup>
          {t("average-per-year")}
        </small>
      </section>*/}
      <section className="app-section hero-section">
        <div className="app-section-text">
          <h1><span>{t("title-1")}</span></h1>
          <p> {t("main-part-1")} </p>
          {config.eventDate !== "" && (
            <>
                <h1><span>{t("event-info-title")}</span></h1>
                <div>
                  <ul className="event-info">
                    <li>
                      <span className="event-info-title">
                        <i className="fas fa-map-marked-alt"></i>
                      </span>
                      <span className="event-info-value">
                        <b style={{ fontWeight: 'bold' }}>{t("event-location")}</b><br />
                        {t("event-location-value")} <br />
                        <a
                          className="link-btn"
                          alt="Show on Google Maps"
                          href="https://goo.gl/maps/1rh5pJXHwgtVffeGA"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="event-info-value">
                            {t("show-on-google-maps")}
                          </span>
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="event-info-title">
                        <i className="fas fa-calendar-day"></i>
                      </span>
                      <span className="event-info-value">
                        <b style={{ fontWeight: 'bold' }}>{t("event-time")}</b><br />
                        <time dateTime="2024-11-07 11:00">
                          {t("event-day")} {config.eventDate} {config.eventStartTime}-{config.eventEndTime} <br />
                        </time>
                        <a
                          className="link-btn"
                          alt="Add the event to your calendar"
                          href="Kumpulan_Potentiaali_2024.ics"
                          target="_blank"
                        >
                          <span className="event-info-value">
                            {t("add-to-calendar")}
                          </span>
                        </a>
                      </span>
                    </li>
                    {/*<li>
                      <span className="event-info-title">
                        <i className="fas fa-clock"></i>
                      </span>
                      <span className="event-info-value">
                        {t("event-time")} {": "} {t("event-time-prefix")}{" "}
                        {config.eventStartTime} - {config.eventEndTime}
                      </span>
                    </li>*/}
                    <li>
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>
              </>
            )}
        </div>
        <div className="hero-actions">
          <Link to="/companies" className="hero-action">
            <div>
              <div className="hero-action-text">{t('hero-action-companies')}</div>
              <div className="hero-action-subtitle">{t('hero-action-companies-subtitle')}</div>
            </div>
            <i className={classNames('fa', 'fa-chevron-right')} />
          </Link>
          <Link to="/subjects" className="hero-action">
            <div>
              <div className="hero-action-text">{t('hero-action-students')}</div>
              <div className="hero-action-subtitle">{t('hero-action-students-subtitle')}</div>
            </div>
            <i className={classNames('fa', 'fa-chevron-right')} />
          </Link>
          { config.showRegistrationInfo && (
            <Link to="/registration" className="hero-action">
              <div>
                <div className="hero-action-text">{t('hero-action-register')}</div>
                <div className="hero-action-subtitle">{t('hero-action-register-subtitle')}</div>
              </div>
              <i className={classNames('fa', 'fa-chevron-right')} />
            </Link>
          ) }
        </div>
      </section>
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
  );
};
export default MainPage;
