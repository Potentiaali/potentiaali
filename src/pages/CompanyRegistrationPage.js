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
      <Localized id="registration-main-part1">
        Kumpulan Potentiaali on Helsingin Yliopiston
        matemaattis-luonnontieteellisen tiedekunnan opiskelijoiden järjestämä
        työelämä- ja rekrytointitapahtuma, joka järjestetään marraskuussa 2019
        kolmannen kerran. Aikaisempina vuosina tapahtuma on ollut menestys niin
        opiskelijoiden kuin yritysvieraiden puolesta.
      </Localized>
      {" "}
      <b>
        <Localized id="registration-main-part2">
          Vuonna 2017 yli 95% kertoi tapahtuman olleen vähintään hinnan väärti.
      </Localized>
      </b>
    </p>
    <br />
    <h2><Localized id="includes"> Sisältö </Localized> </h2>
    <p><Localized id="participate">Osallistumalla Kumpulan potentiaaliin yritys saa:</Localized></p>
    <br />
    <ul style={{ paddingLeft: 20, listStyleType: "circle" }}>
      <li>
        <Localized id="stand">
          Ständipaikan, johon kuuluu sähköt, internetyhteys ja pöytä. Pöydän koko
          on noin 1,2 m x 0,8 m
        </Localized>
      </li>
      <li> <Localized id="speed-rekry">Mahdollisuus osallistua Rekry Speed Datingiin</Localized></li>
      <li>
        <Localized id="tickets"> Kolmelle hengelle liput, jotka sisältävät aamupalan, lounaan ja pääsyn
        jatkoille </Localized>
      </li>
    </ul>
    <br />
    <p>
      <b>
        <Localized id="bonus-tickets">
          Lisäksi meillä on tarjolla yhteensä neljä suurempaa ständipaikkaa, jotka
          on sijoiteltu sisäänkäyntien yhteyteen. Tällainen paikka kustantaa
          2000,00 euroa, ja ne myydään ilmoittautumisjärjestyksessä.
        </Localized>
      </b>
    </p>
    <br />
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
      ilmoitetaan ilmoittautumislomakkeella. </Localized>
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
        : <Localized id="event-cost-value">1000,00 euroa</Localized>
      </li>
    </ul>
    <br />
    <h2> <Localized id="registration"> Ilmoittautuminen </Localized> </h2>
    <p>
      <Localized id="registration-form">
        Ilmoittautumislomakkeelle kerätään osallistumisesta kiinnostuneiden
        yritysten yhteystiedot. Ilmoittautumisajan päätyttyä olemme yhteydessä
        mukaan mahtuviin yrityksiin sekä jonoon jääneisiin. Vain 50 nopeinta yritystä mahtuu mukaan tapahtumaa. Aikaisempina
        vuosina tapahtuma on tullut täyteen.
     </Localized>
    </p>
    <br />
    <p>
      <RegistrationButton />
    </p>
    <br />
    <h2> <Localized id="contact-information">Yhteystiedot </Localized></h2>
    <p>
      <Localized id="questions"> Vastaamme mielellään heränneisiin kysymyksiin osoitteessa </Localized>{" "}
      <a href="mailto:info@potentiaali.com">info@potentiaali.com</a>
    </p>
  </Page>
);

export default CompanyRegistrationPage;
