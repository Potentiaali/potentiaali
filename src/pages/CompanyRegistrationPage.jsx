import React from "react";
import { useTranslation } from "react-i18next";
import { RegistrationButton } from "../components/RegistrationButton";
import config from "../data/config.json";
import Logo from "../components/partials/Logo";
import { Link } from "react-router-dom";

const CompanyRegistrationPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Logo />
      <section className="app-section">
        <h1>{t("companyRegistrationPage")}</h1>
        <p>
          {t("registration-main-part-1")}
          <b>{t("registration-main-part-2")}</b>
          {' '}<Link to="/testimonials">{t('testimonials-link')}</Link>
        </p>
      </section>
      { config.earlyBirdRegistrationLink && (
        <section className="app-section">
          <div className="event-contents-block">
            <h3>{t("early-bird-registration-title")}</h3>
            <p>{t("early-bird-registration-description")}</p>
            <RegistrationButton href={config.earlyBirdRegistrationLink}>
              {t("early-bird-register-now")}
            </RegistrationButton>
          </div>
        </section>
      )}
      <section className="app-section">
        <h1>{t("includes")}</h1>
        <div className="event-contents-block">
          <ul>
            <li>{t("stand")}</li>
            <li> {t("speed-rekry")}</li>
            <li>{t("tickets")}</li>
          </ul>
        </div>
        <p>
          <b>{t("bonus-tickets")}</b>
        </p>
        <p>
          <b>{t("keynote-and-workshop")}</b>{" "}
          {t("keynote-and-workshop-information")}
        </p>
      </section>
      <section className="app-section">
        <h1>{t("event-info-title")}</h1>
        <ul className="event-info">
          <li>
            <span className="event-info-title">
              <i className="fas fa-map-marked-alt"></i>
            </span>
            <span className="event-info-value">
              {t("event-location")}
              {": "}
              {t("event-location-value")}
            </span>
          </li>
          <li>
            <span className="event-info-title">
              <i className="fas fa-calendar-day"></i>
            </span>
            <span className="event-info-value">
              {t("event-date")}
              {": "}
              <time dateTime="2023-11-23 11:00">
                {t("event-day")} {config.eventDate}
              </time>
            </span>
          </li>
          <li>
            <span className="event-info-title">
              <i className="fas fa-clock"></i>
            </span>
            <span className="event-info-value">
              {t("event-time")}
              {": "}
              {t("event-time-prefix")} {config.eventStartTime}
            </span>
          </li>
          <li>
            <span className="event-info-title">
              <i className="fas fa-dollar-sign"></i>
            </span>
            <span className="event-info-value">
              {t("event-cost")}
              {": "}
              {t("event-cost-value")}
            </span>
          </li>
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
                {t("show-on-google-maps")}
              </span>
            </a>
          </li>
          <li>
            <a
              className="link-btn"
              alt="Add the event to your calendar"
              href="Kumpulan_Potentiaali_2022.ics"
              target="_blank"
            >
              <span className="event-info-title">
                <i className="fas fa-calendar-plus"></i>
              </span>
              <span className="event-info-value">{t("add-to-calendar")}</span>
            </a>
          </li>
        </ul>
      </section>
      <section className="app-section">
        <h1>{t("registration")}</h1>
        <p>{t("registration-form")}</p>
        <p>{t("registration-deadline")}</p>
        <RegistrationButton href={config.companyRegistrationLink}>
          {t("register-now-text")}
        </RegistrationButton>
        <RegistrationButton href={config.discountedRegistrationLink}>
          {t("noncommercial-register-now-text")}
        </RegistrationButton>
      </section>
      <section className="app-section">
        <h1>{t("contact-information")}</h1>
        <p>
          {t("questions")}:
          <a href="mailto:info@potentiaali.com">&nbsp;info@potentiaali.com</a>
        </p>
      </section>
    </>
  );
};

export default CompanyRegistrationPage;
