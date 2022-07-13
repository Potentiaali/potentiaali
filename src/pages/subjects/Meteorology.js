import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { Localized } from "@fluent/react";

export const Meteorology = () => (
  <Accordion
    isRoot
    accordionId={"meteorology"}
    title={<Localized id="meteorology-title-text">Meteorologia</Localized>}
  >
    <h5>
      <Localized id="subjects-introduction">Yleinen esittely</Localized>
    </h5>
    <Localized id="meteorology-introduction-text">
      <p>
        Meteorologia on ilmakehän fysiikkaa. Säätiedotukset ovat meteorologian
        tunnetuin sovellutus, mutta meteorologinen tieto on välttämätöntä myös
        esimerkiksi ilmastonmuutoksen ymmärtämiseksi, ennustamiseksi ja
        lieventämiseksi. Meteorologit tutkivat ilmakehän ilmiöitä monenlaisilla
        ajallisilla ja paikallisilla skaaloilla teorioiden, simulaatioiden ja
        havaintojen avulla. Meteorologia on laskennallisten menetelmien
        kehityksen edelläkävijä: esimerkiksi kaaosteoria syntyi meteorologisen
        mallin odottamattoman käyttäytymisen pohjalta. Nykyaikainen meteorologi
        onkin laajan tieto- ja taitopohjan omaava tieteen ammattilainen.
      </p>
    </Localized>
    <Localized id="work-descriptions-text">
      <h5>Tittelit</h5>
    </Localized>
    <Accordion
      accordionId={"meteorology-meteorologist"}
      title={
        <Localized id="meteorology-meteorologist-title-text">
          Meteorologi
        </Localized>
      }
      noShadow
    >
      <Localized id="meteorology-meteorologist-description-text">
        Meteorologi on suojattu oppiarvo, jonka käyttö edellyttää
        korkeakoulututkintoa meteorologiasta. Meteorologi on ilmakehän fysiikan
        ammattilainen. Tämän lisäksi meteorologit osaavat laajasti eri
        menetelmätieteitä, kuten tietojenkäsittelytiedettä, tilastotiedettä ja
        data-analyysiä. Meteorologeja työskentelee esimerkiksi päivystys- ja
        tutkimustehtävissä. Varsinainen erikoistuminen ilmakehätieteisiin alkaa
        meteorologian opiskelijoilla toisena opiskeluvuonna fysiikan
        perusopintojen jälkeen.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"meteorology-consultant"}
      title={
        <Localized id="meteorology-consultant-title-text">Konsultti</Localized>
      }
      noShadow
    >
      <Localized id="meteorology-consultant-description-text">
        Meteorologeja toimii konsultteina esimerkiksi energia-alalla. Tuuli- ja
        aurinkoenergiapuistoja suunnitellessa on erittäin tärkeää ottaa huomioon
        suunnittelualueen meteorologiset olosuhteet, sillä näillä voi olla
        merkittäviä vaikutuksia valmiin voimalan tuottavuuteen. Konsulttina
        energia-alalla toimivan meteorologin tehtävänä onkin erilaisten mallien
        avulla tarjota mahdollisimman luotettavaa tietoa suunnittelun tueksi.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"meteorology-physicist"}
      title={
        <Localized id="meteorology-physicist-title-text">Fyysikko</Localized>
      }
      noShadow
    >
      <Localized id="meteorology-physicist-description-text">
        Useilla ilmakehätieteiden aloilla valmistuneiden meteorologien työnimike
        saattaa olla esimerkiksi fyysikko. Fyysikkona työskentelevät
        meteorologit saattavat työskennellä esimerkiksi aerosoli- tai
        ilmanlaatumittausten parissa. Meteorologien termo- ja
        virtausdynamiikkaan liittyvä osaaminen voi olla hyödyllistä myös monilla
        muilla fysiikan aloilla.
      </Localized>
    </Accordion>
  </Accordion>
);
