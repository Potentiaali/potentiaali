import React from "react";
import styles from "./Program.module.scss";
import { Accordion } from "../accordion/Accordion";
import { Localized } from "@fluent/react";
export const Program = () => {
  return (
    <div>
      <Localized id="click-picture-for-instructions">
        <h4>Paina kuvia saadaksesi lisätietoa ohjelmasta!</h4>
      </Localized>
      <br />
      <div className={styles.program}>
        <Accordion
          imageTitle={true}
          title={<img src="rekry_speed_dating.png" alt="Speed dates" />}
          accordionId={"speed-dates"}
        >
          {/*}
          <Textfit mode="single" max={20}>
            <Localized id="rekry-speed-dating-title-text">
              <h2>Rekry Speed Dating</h2>
            </Localized>
          </Textfit>
  */}
          <Localized id="rekry-speed-dating-info-1">
            <p>
              Rekry Speed Datingissa tapaat pikadeittailun tapaan mahdollisten
              kumppaneiden sijasta mahdollisia työnantajia. Opiskelijana
              ilmoittaudut yhteen (tai useampaan) ryhmään, jossa on 4-5 eri
              työnantajaa, ja tapaat jokaisen heistä puolen tunnin pikaisen
              session aikana. Ennen sessiota lähetät CV:n itsestäsi yrityksille
              etukäteen tutustuttavaksi.
            </p>
          </Localized>{/*
          <br />
          <Localized id="rekry-speed-dating-info-2">
            <p>
              Tänä vuonna yritykset saattavat antaa osallistujille
              jatkoaika-kutsuja, jotka ovat klo 19-21 aikana Physicumissa
              jatkojen aikana. Siten siis jokainen Rekry Speed Dateen
              osallistuva saa automaattisesti jatkorannakkeen halutessaan.
            </p>
          </Localized>
          <br />
          <Localized id="rekry-speed-dating-info-3">
            <p>
              Rekry Speed Dateihin on ennakkoilmoittautuminen.
              Ennakkoilmoittautuminen on auki nyt ja sulkeutuu kun ryhmät
              täyttyvät.
            </p>
          </Localized>*/}
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<img src="workshop.png" alt="Workshops" />}
          accordionId={"workshops"}
        >
          <Localized id="workshop-info">
            <p>
              Workshopit ovat intensiivisiä tunnin pituisia työpajoja, joissa
              opiskelija pääsee lähikontaktiin yritysten ja mentoreiden kanssa.
              Workshopeihin ei pääsääntöisesti tarvitse ilmoittautua etukäteen*,
              ja niille voi osallistua kuka vain. Osallistumispaikat täytetään
              saapumisjärjestyksessä. Workshopiin kannattaa tuoda mukaan oma
              läppäri. *Poikkeus: CoachCafe
            </p>
          </Localized>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<img src="keynote.png" alt="Keynotes" />}
          accordionId={"keynotes"}
        >
          <Localized id="keynote-info-text">
            <p>
              Yritysten puolen tunnin pituisia, nopeita ja innostavia katsauksia
              kiinnostaviin ja polttaviin puheenaiheisiin. Aiheet ja ajat
              löytyvät aikataulusta. Keynote-luennot ovat kaikille avoimia (myös
              Kumpulan ulkopuolisille opiskelijoille).
            </p>
          </Localized>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<img src="cocktail.png" alt="Kokkarit" />}
          accordionId={"cocktail"}
        >
          <Localized id="cocktail-hour-info-text">
            <p>
            Ständien sulkeuduttua klo 17 niin opiskelijat kuin työnantajienkin edustajat pääsevät virkistäytymään 
            Exactumin pohjakerroksessa pidettävässä cocktail-tilaisuudessa, jossa tarjolla on kuohuvaa ja pientä purtavaa.
            </p>
          </Localized>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<img src="panel.png" alt="Paneeli" />}
          accordionId={"panel"}
        >
          <Localized id="panel-discussion-info-text-1">
            <p>
              Cocktail-tilaisuuden ja jatkojen välissä järjestetään kaikille
              avoin paneelikeskustelu-tilaisuus, jonka houstaa Helsinki Think
              Company. Aiheesta “Akateeminen osaaminen käytäntöön”
              tulee puhumaan eri alojen asiantuntijoita sekä Kumpulan omia
              opiskelijoita.
            </p>
          </Localized>
          <br />
          <Localized id="panel-discussion-info-text-2">
            <p>Tilaisuuden kieli on suomi.</p>
          </Localized>
        </Accordion>
        <Accordion
          imageTitle={true}
          title={<img src="after_party.png" alt="Jatkot" />}
          accordionId={"afterparty"}
        >
          <Localized id="afterparty-info-text-1">
            <p>
            Potentiaali huipentuu klo 19 Physicumissa alkaviin jatkoihin, joilla esiintyy Kalevauva.fi ja Kimbe.
             Jano tai nälkä eivät myöskään pääse illalla yllättämään,
              sillä jatkoilla on avoin baari (myös alkoholittomia vaihtoehtoja),
               naposteltavaa sekä ruokarekka, joista jatkovieraat voivat ostaa syötävää.
                Ensimmäiset 100 vierasta saavat 5€ alennuksen ruokarekan annoksista.
                 Jatkoille pääsyyn vaaditaan ranneke, joita jaetaan Physicumin aulan infopisteessä.
                  Kello 11 vapautuu jaettavaksi 100 ranneketta, klo 13 ja klo 15 kaikki jäljellä olevat rannekkeet.
            </p>
          </Localized>
          <br />
          <Localized id="afterparty-info-text-2">
            <p>Jatkojen ohjelma tarkentuu syksyllä!</p>
          </Localized>
        </Accordion>
      </div>
    </div>
  );
};
