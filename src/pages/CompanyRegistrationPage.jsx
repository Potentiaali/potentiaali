import React, { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import { RegistrationButton } from "../components/RegistrationButton";
import config from "../data/config.json";
import Logo from "../components/partials/Logo";
import { Link } from "react-router-dom";
import Fallback from "../components/partials/Fallback";

const CompanyRegistrationPage = () => {
  const { t } = useTranslation();

  const [forms, setForms] = useState(null);

  useEffect(() => {
    const fetchForms = async () => {
      const response = await fetch(config.formApiEndpoint);
      const { forms } = await response.json();
      setForms(forms);
    }

    fetchForms();
  }, [setForms]);

  const isFormOpen = (id) => forms.some((form) => form.id === id && form.open);

  if (forms === null) {
    return (
      <>
        <Logo />
        <div>
          <Fallback.Loader /> 
        </div>
      </>
    );
  }

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
              href="Kumpulan_Potentiaali_2025.ics"
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

        <RegistrationButton href={config.companyRegistrationLink} open={isFormOpen(config.generalFormId)}>
          {t("register-now-text")}
        </RegistrationButton>
        <RegistrationButton href={config.discountedRegistrationLink} open={isFormOpen(config.nonprofitFormId)}>
          {t("noncommercial-register-now-text")}
        </RegistrationButton>
      </section>
      <section className="app-section">
        <h1>{t("contact-information")}</h1>
        <p>
          {t("questions")}:
          <a href="mailto:info@potentiaali.com">&nbsp;info@potentiaali.com</a>
        </p>
        <p>
          <Trans i18nKey="matlu-contact">
            Tapahtuman järjestää <a href="https://matlu.fi/">Matlu ry</a>, jonka yhteystiedot löytyvät <a href="https://matlu.fi/contact/">täältä.</a>
          </Trans>
        </p>
      </section>
    </>
  );
};

export default CompanyRegistrationPage;
