import React from "react";
import { Localized } from "@fluent/react";
import { RegistrationButton } from "../components/RegistrationButton";
import config from "./../data/config.json";
import Logo from "../components/partials/Logo";

const CompanyRegistrationPage = () => (
  <>
    <Logo />
    <section className="app-section">
      <Localized id="companyRegistrationPage">
        <h1>Yritysilmoittautuminen</h1>
      </Localized>
      <p>
        <Localized id="registration-main-part1">
          Kumpulan Potentiaali on Helsingin Yliopiston
          matemaattis-luonnontieteellisen tiedekunnan opiskelijoiden järjestämä
          työelämä- ja rekrytointitapahtuma, joka järjestetään marraskuussa 2019
          kolmannen kerran. Aikaisempina vuosina tapahtuma on ollut menestys
          niin opiskelijoiden kuin yritysvieraiden puolesta.
        </Localized>{" "}
        <b>
          <Localized id="registration-main-part2">
            Vuonna 2017 yli 95% kertoi tapahtuman olleen vähintään hinnan
            väärti.
          </Localized>
        </b>
      </p>
    </section>
    <section className="app-section">
      <h1>
        <Localized id="includes">Sisältö</Localized>
      </h1>
      <div className="event-contents-block">
        <ul>
          <li>
            <Localized id="stand">
              Ständipaikan, johon kuuluu sähköt, internetyhteys ja pöytä. Pöydän
              koko on noin 2 metriä
            </Localized>
          </li>
          <li>
            {" "}
            <Localized id="speed-rekry">
              Mahdollisuus osallistua Rekry Speed Datingiin
            </Localized>
          </li>
          <li>
            <Localized id="tickets">
              Kolmelle hengelle liput, jotka sisältävät aamupalan, lounaan ja
              pääsyn jatkoille
            </Localized>
          </li>
        </ul>
      </div>
      <p>
        <b>
          <Localized id="bonus-tickets">
            Lisäksi meillä on tarjolla yhteensä neljä suurempaa ständipaikkaa,
            jotka on sijoiteltu sisäänkäyntien yhteyteen. Tällainen paikka
            kustantaa 2400,00 euroa, ja ne myydään ilmoittautumisjärjestyksessä.
          </Localized>
        </b>
      </p>
      <p>
        <b>
          <Localized id="keynote-and-workshop">
            Teillä on myös mahdollisuus saada isomman yleisön huomio pitämällä
            Workshop tai Keynote.
          </Localized>
        </b>{" "}
        <Localized id="keynote-and-workshop-information">
          Niiden pitäminen ei tuo lisäkustannuksia. Kumpulan potentiaalin
          järjestäjät valitsevat sopivat yritykset pitämään kyseiset tapahtumat
          niiden sisällön perusteella. Alustava kiinnostus pitää jompikumpi
          ilmoitetaan ilmoittautumislomakkeella.
        </Localized>
      </p>
    </section>
    <section className="app-section">
      <Localized id="event-info-title">
        <h1>Event information</h1>
      </Localized>
      <ul className="event-info">
        <li>
          <span className="event-info-title">
            <i className="fas fa-map-marked-alt"></i>
          </span>
          <span className="event-info-value">
            <Localized id="event-location">Location</Localized>
            {": "}
            <Localized id="event-location-value">
              Kumpulan kampus (Gustaf Hällströmin katu 2)
            </Localized>
          </span>
        </li>
        <li>
          <span className="event-info-title">
            <i className="fas fa-calendar-day"></i>
          </span>
          <span className="event-info-value">
            <Localized id="event-date">Date</Localized>
            {": "}
            <time dateTime="2019-11-14 10:00">
              <Localized id="event-day">Torstai</Localized> {config.eventDate}
            </time>
          </span>
        </li>
        <li>
          <span className="event-info-title">
            <i className="fas fa-clock"></i>
          </span>
          <span className="event-info-value">
            <Localized id="event-time">Time</Localized>
            {": "}
            <Localized id="event-time-prefix">klo</Localized> {config.eventTime}
          </span>
        </li>
        <li>
          <span className="event-info-title">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span className="event-info-value">
            <Localized id="event-cost">Price</Localized>
            {": "}
            <Localized id="event-cost-value">1200,00 euroa</Localized>
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
              <Localized id="show-on-google-maps">
                Show on Google Maps
              </Localized>
            </span>
          </a>
        </li>
        <li>
          <a
            className="link-btn"
            alt="Add the event to your calendar"
            href="Kumpulan_Potentiaali_2019.ics"
            target="_blank"
          >
            <span className="event-info-title">
              <i className="fas fa-calendar-plus"></i>
            </span>
            <span className="event-info-value">
              <Localized id="add-to-calendar">
                Add the event to your calendar (.ics)
              </Localized>
            </span>
          </a>
        </li>
      </ul>
    </section>
    <section className="app-section">
      <Localized id="registration">
        <h1>Ilmoittautuminen</h1>
      </Localized>
      <p>
        <Localized id="registration-form">
          Ilmoittautumislomakkeelle kerätään osallistumisesta kiinnostuneiden
          yritysten yhteystiedot. Ilmoittautumisajan päätyttyä olemme yhteydessä
          mukaan mahtuviin yrityksiin sekä jonoon jääneisiin. Vain 50 nopeinta
          yritystä mahtuu mukaan tapahtumaa. Aikaisempina vuosina tapahtuma on
          tullut täyteen.
        </Localized>
      </p>
      <p>
        <Localized id="registration-deadline-ended">
          Ilmoittautuminen on auki toistaiseksi. Ilmoitamme mahdollisesta
          ilmoittautumisen takarajasta tällä sivulla.
        </Localized>
      </p>
      <RegistrationButton />
    </section>
    <section className="app-section">
      <Localized id="contact-information">
        <h1>Yhteystiedot</h1>
      </Localized>
      <p>
        <Localized id="questions">
          Vastaamme mielellään heränneisiin kysymyksiin osoitteessa
        </Localized>{" "}
        <a href="mailto:info@potentiaali.com">info@potentiaali.com</a>
      </p>
    </section>
  </>
);

export default CompanyRegistrationPage;
