import React from "react";
import { Page } from "./../components/Page";
import { Localized } from "fluent-react/compat";
import { RegistrationButton } from "../components/RegistrationButton";
import config from "./../data/config.json";

const CompanyRegistrationPage = () => (
  <Page>
    <Localized id="companyRegistrationPage">
      <h1>Yritysilmoittautuminen</h1>
    </Localized>
    <p>
      Kumpulan Potentiaali on Helsingin Yliopiston
      matemaattis-luonnontieteellisen tiedekunnan opiskelijoiden järjestämä
      työelämä- ja rekrytointitapahtuma, joka järjestetään marraskuussa 2019
      kolmannen kerran. Aikaisempina vuosina tapahtuma on ollut menestys niin
      opiskelijoiden kuin yritysvieraiden puolesta.{" "}
      <b>
        Vuonna 2017 yli 95% kertoi tapahtuman olleen vähintään hinnan väärti.
      </b>
    </p>
    <br />
    <h2>Sisältö</h2>
    <p>Osallistumalla Kumpulan potentiaaliin yritys saa:</p>
    <br />
    <ul style={{ paddingLeft: 20, listStyleType: "circle" }}>
      <li>
        Ständipaikan, johon kuuluu sähköt, internetyhteys ja pöytä. Pöydän koko
        on noin 1,2 m x 0,8 m
      </li>
      <li>Oikeuden osallistua Rekry Speed Datingiin</li>
      <li>
        Liput kolmelle hengelle, joka sisältää aamupalan, lounaan ja pääsyn
        jatkoille
      </li>
    </ul>
    <br />
    <p>
      <b>
        Lisäksi meillä on tarjolla yhteensä neljä suurempaa ständipaikkaa, jotka
        on sijoiteltu sisäänkäyntien yhteyteen. Tällainen paikka kustantaa
        2000,00 euroa, ja ne myydään ilmoittautumisjärjestyksessä.
      </b>
    </p>
    <br />
    <p>
      <b>
        Teillä on myös mahdollisuus saada isomman yleisön huomio pitämällä
        Workshop tai Keynote.
      </b>{" "}
      Niiden pitäminen ei tuo lisäkustannuksia. Kumpulan potentiaalin
      järjestäjät valitsevat sopivat yritykset pitämään kyseiset tapahtumat
      niiden sisällön perusteella. Alustava kiinnostus pitää jompikumpi
      ilmoitetaan ilmoittautumislomakkeella.
    </p>
    <br />
    <Localized id="event-info-title">
      <h3>Tapahtumatiedot</h3>
    </Localized>
    <ul>
      <li>
        <Localized id="event-location">
          <b>Sijainti</b>
        </Localized>
        :{" "}
        <Localized id="event-location-value">
          Kumpulan kampus (Gustaf Hällströmin katu 2)
        </Localized>
      </li>
      <li>
        <Localized id="event-time">
          <b>Aika</b>
        </Localized>
        : <Localized id="event-day">Torstai</Localized> {config.eventDate}{" "}
        <Localized id="event-time-prefix">klo</Localized> {config.eventTime}
      </li>
      <li>
        <Localized id="event-cost">
          <b>Hinta</b>
        </Localized>
        : <Localized id="event-cost-value">Alkaen 1000,00 €</Localized>
      </li>
    </ul>
    <br />
    <h2>Ilmoittautuminen</h2>
    <p>
      Ilmoittautumislomakkeelle kerätään osallistumisesta kiinnostuneiden
      yritysten yhteystiedot. Ilmoittautumisajan päätyttyä olemme yhteydessä
      mukaan mahtuviin yrityksiin sekä jonoon jääneisiin.
    </p>
    <br />
    <p>
      <RegistrationButton />
    </p>
    <br />
    <h2>Yhteystiedot</h2>
    <p>
      Vastaamme mielellään heränneisiin kysymyksiin osoitteessa{" "}
      <a href="mailto:info@potentiaali.com">info@potentiaali.com</a>
    </p>
  </Page>
);

export default CompanyRegistrationPage;
