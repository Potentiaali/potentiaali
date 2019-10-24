import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { Localized } from "fluent-react/compat";

export const Statistics = () => (
  <Accordion
    title={<Localized id="statistics-title-text">Tilastotiede</Localized>}
  >
    <h5>
      <Localized id="subjects-introduction">Yleinen esittely</Localized>
    </h5>
    <Localized id="statistics-introduction-text">
      <p>
        Tilastotiede on väline todellisuuden ilmiöiden ymmärtämiseen ja
        analysoimiseen. Tilastollisten mallien rakentaminen perustuu aineiston,
        datan, tehokkaaseen käsittelyyn, minkä vuoksi monet tilastotieteilijät
        opiskelevat myös ohjelmointia. Malleja voidaan rakentaa esimerkiksi
        asiakastyytyväisyyskyselyjen tuloksista, palveluiden käyttötilastoista
        ja vaikka työttömyystilastoista.
      </p>
    </Localized>
    <Localized id="work-descriptions-text">
      <h5>Tittelit</h5>
    </Localized>
    <Accordion
      title={
        <Localized id="statistics-data-analysist-title-text">
          Data-analyytikko
        </Localized>
      }
      noShadow
    >
      <Localized id="statistics-data-analysist-description-text">
        Data-analyytikko pyrkii etsimään syy-seuraussuhteita aineistoista ja
        tekemään päätelmiä tämän pohjalta. Data-analyytikko pyrkii esimerkiksi
        luomaan algoritmin, joka pystyy päättelemään minkä genren elokuvan
        haluat katsoa Netflixissä seuraavaksi tai minkälaisen mainoksen sinulle
        voisi näyttää vieraillessasi erilaisilla nettisivuilla. Data-analytiikan
        opintosuunnan voi valita vasta maisterivaiheessa ja kandiopinnot ovat
        pääosin tilastotiedettä. Jo 2. vuoden opiskelijat ovat usein alansa
        työssä.
      </Localized>
    </Accordion>
    <Accordion
      title={
        <Localized id="statistics-statistician-title-text">
          Tilastotieteilijä
        </Localized>
      }
      noShadow
    >
      <Localized id="statistics-statistician-description-text">
        Tilastotieteilijä pyrkii selittämään ihmisen ja luonnon toimintaa
        havaintojen pohjalta. Tilastotieteilijää tarvitaan käytännössä kaikilla
        yhteiskunnan aloilla. Useasti myös akateemisen tutkimuksen tekeminen
        vaatii tilastotieteilijän. Ei ole sattumaa että monien tieteellisten
        alojen opintoihin kuuluu hieman tilastotiedettä. Tilastotieteen
        opintosuunnan voi valita jo kandivaiheessa, josta on mahdollista jatkaa
        tilastotieteen maisterivaiheeseen. Jo 2. vuoden opiskelijat ovat usein
        alansa työssä.
      </Localized>
    </Accordion>
    <Accordion
      title={
        <Localized id="statistics-data-scientist-title-text">
          Datatieteilijä
        </Localized>
      }
      noShadow
    >
      <Localized id="statistics-data-scientist-description-text">
      Tilastotiede tarjoaa erinomaiset valmiudet tiedon louhimiseen valtavista datamassoista. 
      Vahvan matemaattisen perustan ensin hankittuaan moni tilastotieteen opiskelija erikoistuukin 
      maisterivaiheessa koneoppimiseen ja neuroverkkoihin.
      </Localized>
    </Accordion>
  </Accordion>
);
