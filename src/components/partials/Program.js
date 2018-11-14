import React from "react";
import "./Program.scss";
import { Accordion } from "../Accordion/Accordion";
import { FormattedMessage } from "react-intl";

export const Program = () => {
  return (
    <div>
      <h4>
        <FormattedMessage
          id="program.openInstruction"
          defaultMessage="Paina kuvia saadaksesi lisätietoa ohjelmasta!"
        />
      </h4>
      <br />
      <div className="program">
        <Accordion
          imageTitle={true}
          title={<img src="Potentiaali_speeddates.png" alt="Speed dates" />}
        >
          <h2>
            <FormattedMessage
              id="program.speedDatingTitle"
              defaultMessage="Rekry speed dating"
            />
          </h2>
          <p>
            <FormattedMessage
              id="program.speedDatingInfo_1"
              defaultMessage="Rekry Speed Datingissa tapaat pikadeittailun tapaan mahdollisten kumppaneiden sijasta mahdollisia työnantajia. Opiskelijana ilmoittaudut yhteen (tai useampaan) ryhmään, jossa on 4-5 eri työnantajaa, ja tapaat jokaisen heistä puolen tunnin pikaisen session aikana. Ennen sessiota lähetät CV:n itsestäsi yrityksille etukäteen tutustuttavaksi."
            />
          </p>
          <br />
          <p>
            <FormattedMessage
              id="program.speedDatingInfo_2"
              defaultMessage="Tänä vuonna yritykset saattavat antaa osallistujille jatkoaika-kutsuja, jotka ovat klo 19-21 aikana Physicumissa jatkojen aikana. Siten siis jokainen Rekry Speed Dateen osallistuva saa automaattisesti jatkorannakkeen halutessaan."
            />
          </p>
          <br />
          <p>
            <FormattedMessage
              id="program.speedDatingInfo_3"
              defaultMessage="Rekry Speed Dateihin on ennakkoilmoittautuminen. Ennakkoilmoittautuminen on auki nyt ja sulkeutuu kun ryhmät täyttyvät."
            />
          </p>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<img src="Potentiaali_workshop.png" alt="Workshops" />}
        >
          <h1>
            <FormattedMessage
              id="program.workshopTitle"
              defaultMessage="Workshops"
            />
          </h1>
          <p>
            <FormattedMessage
              id="program.workshopInfo_1"
              defaultMessage="Workshopit ovat intensiivisiä tunnin pituisia työpajoja, joissa opiskelija pääsee lähikontaktiin yritysten ja mentoreiden kanssa. Workshopeihin ei pääsääntöisesti tarvitse ilmoittautua etukäteen*, ja niille voi osallistua kuka vain. Osallistumispaikat täytetään saapumisjärjestyksessä. Workshopiin kannattaa tuoda mukaan oma läppäri.

*Poikkeus: CoachCafe
"
            />
          </p>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<img src="Potentiaali_keynote.png" alt="Keynotes" />}
        >
          <h1>
            <FormattedMessage
              id="program.keynoteTitle"
              defaultMessage="Keynotes"
            />
          </h1>
          <p>
            <FormattedMessage
              id="program.keynoteInfo_1"
              defaultMessage="Yritysten puolen tunnin pituisia, nopeita ja innostavia katsauksia kiinnostaviin ja polttaviin puheenaiheisiin. Aiheet ja ajat löytyvät aikataulusta. Keynote-luennot ovat kaikille avoimia (myös Kumpulan ulkopuolisille opiskelijoille)."
            />
          </p>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<img src="Potentiaali_kokkarit.png" alt="Kokkarit" />}
        >
          <h1>
            <FormattedMessage
              id="program.cocktailTitle"
              defaultMessage="Cocktail hour"
            />
          </h1>
          <p>
            <FormattedMessage
              id="program.cocktailInfo_1"
              defaultMessage="Cocktail-tilaisuus järjestetään Exactumissa klo 17-18, jonne saa tulla myös opiskelijat - erityisesti ne opiskelijat, jotka ovat menossa myös jatkoille. Cocktail-tilaisuudessa tarjoillaan kuohuvaa ja pientä syötävää."
            />
          </p>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<img src="Potentiaali_paneeli.png" alt="Paneeli" />}
        >
          <h1>
            <FormattedMessage
              id="program.panelDiscussion.title"
              defaultMessage="Paneelikeskustelu - Helsinki Think Company"
            />
          </h1>
          <p>
            <FormattedMessage
              id="program.panelDiscussionInfo_1"
              defaultMessage="Cocktail-tilaisuuden ja jatkojen välissä järjestetään kaikille avoin paneelikeskustelu-tilaisuus, jonka houstaa Helsinki Think Company. Aiheesta “Kuinka otin akateemisen osaamiseni käyttöön” tulee puhumaan eri alojen asiantuntijoita sekä Kumpulan omia opiskelijoita."
            />
          </p>
          <br />
          <p>
            <FormattedMessage
              id="program.panelDiscussionInfo_2"
              defaultMessage="Tilaisuuden kieli on suomi."
            />
          </p>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<img src="Potentiaali_jatkot.png" alt="Jatkot" />}
        >
          <h1>
            <FormattedMessage
              id="program.afterpartyTitle"
              defaultMessage="Jatkot"
            />
          </h1>
          <p>
            <FormattedMessage
              id="program.afterpartyInfo_1"
              defaultMessage="Jatkot kajahtavat käyntiin klo 19 alkaen Physicumin aulassa. Jatkoilla on yritysedustajia sekä opiskelijoita yhteensä 500. Jatkoille päästäksesi tarvitset jatkorannekkeen, joita jaetaan tapahtuman info-pisteellä tasatunnein - olethan paikalla, mikäli halajat sellaisen!"
            />
          </p>
          <br />
          <p>
            <FormattedMessage
              id="program.afterpartyInfo_2"
              defaultMessage="Jatkoilla esiintyy Anssi Kela, woop!"
            />
          </p>
        </Accordion>
      </div>
    </div>
  );
};
