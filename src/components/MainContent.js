import React from "react";
import Companies from "./../components/partials/Companies";
import { Program } from "./../components/partials/Program";

const MainContent = () => {
  return (
    <section className="">
      <div className="container">
        <h2>
          Kumpulan Potentiaali vuodelle 2018 on pian <br /> täynnä!
        </h2>
        <br />
        <p>
          {" "}
          Kumpulan Potentiaali on Helsingin yliopiston
          matemaattis-luonnontieteellisen tiedekunnan opiskelijoiden järjestämä
          työelämä- ja rekrytointitapahtuma, joka järjestettiin ensi kertaa
          viime syksynä. Ensi kertaa järjestetyksi tapahtumaksi Kumpulan
          Potentiaali 2017 oli menestys niin opiskelijoiden kuin
          yritysvieraidenkin puolesta.
        </p>
        <br />
        <p>
          Palautteeseen vastanneista yritysvieraista yli 95% arvioi tapahtuman
          annin olevan vähintään hinnan väärti, ja joka neljäs koki tapahtuman
          annin olevan erinomainen hintaan nähden.
        </p>
        <br />
        <br />
        <Program />
        <br />
        <br />
        <p>
          {" "}
          Viimeiset hetket tuoda yrityksenne mukaan tapahtumaan ovat nyt
          käsillä!
        </p>
        <Companies />
        <br />
        <br />
        <h3>TAPAHTUMATIEDOT</h3>
        <ul>
          <li>
            <b>Paikka</b>: Kumpulan kampus (Gustaf Hällströmin katu 2)
          </li>
          <li>
            <b>Aika</b>: Torstai 22.11.2018
          </li>
          <li>
            <b>Hinta</b>: 1000€
          </li>
        </ul>
        <br />
        <p>Osallistumisella jokainen yritys saa:</p>
        <ul>
          <li>
            <b>Ständipaikan</b>, johon kuuluu sähköt, internetyhteys ja pöytä
            (n. 1,2m x 0,8m).
          </li>
          <li>
            Oikeuden osallistua <b>Rekry Speed Datingiin.</b>
          </li>
          <li>
            Liput kolmelle hengelle (lisähenkilö 50€/kpl), jotka sisältävät
            aamupalan ja lounaan, sekä pääsytn Cocktail-tilaisuuteen ja
            jatkoille.
          </li>
        </ul>
        <br />
        <p>
          Tarjolla on myös neljä suurempaa ständipaikkaa, jotka on sijoiteltu
          sisäänkäyntien lähettyville. Tällainen paikka kustantaa 2000 euroa, ja
          ne myydään ilmoittautumisjärjestyksessä. Ständipaikoista on luotu
          ohjeistava kartta, joka on ilmoittautumislomakkeessa.
          <br />
          <b>Ajankohtaista:</b> Suuremmat ständipaikat ovat loppuunvarattu.
        </p>
        <br />
        <p>
          Tapahtuman aikana yrityksillä on mahdollisuus saavuttaa isomman
          yleisön huomio pitämällä <b>Workshop</b> tai <b>Keynote</b>. Niiden
          pitäminen ei tuo lisäkustannuksia, mutta niiden kokonaismäärää on
          vähennetty, joten niitä ei riitä kaikille osallistuville yrityksille.
          Potentiaalin järjestäjät suorittavat mahdollista karsintaa yritysten
          välillä Workshopin tai Keynoten sisältöjen perusteella. Alustava
          kiinnostus pitää jompaa kumpaa ilmoitetaan ilmoittautumislomakkeella.
          <br />
          <b>Ajankohtaista:</b> Ilmoittautuneilta yrityksiltä kerätään
          parhaillaan kuvauksia Workshopien tai Keynote-luentojen sisällöistä.
          Tapahtuman sisällöt valitaan 7.10. alkavalla viikolla.
        </p>
        <br />
        <br />
        <h3>ILMOITTAUTUMINEN</h3>
        <p>
          {" "}
          Ilmoittautumislomakkeella kerätään osallistumisesta kiinnostuneiden
          yritysten yhteystiedot. Olemme yhteydessä jokaiseen ilmoittautuneeseen
          yritykseen mahdollisimman nopeasti ilmoittautumisen jälkeen, jolloin
          vahvistamme joko osallistumisen tai jonopaikan.
        </p>
        <br />
        <p>
          {" "}
          Kun vahvistamme yrityksellenne paikan tapahtumassa, teillä on vielä
          viikko harkinta-aikaa, jonka jälkeen ilmoittautuminen muuttuu
          sitovaksi.
        </p>
        <br />
        <p>
          <b>
            <a
              href="https://bit.ly/2rg713f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ilmoittautumislomake
            </a>
          </b>
        </p>
        <br />
        <p> Ilmoittautuminen on auki kunnes tapahtuma täyttyy!</p>
      </div>
    </section>
  );
};

export default MainContent;
