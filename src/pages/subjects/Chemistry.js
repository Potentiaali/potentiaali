import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { Localized } from "@fluent/react";

export const Chemistry = () => (
  <Accordion
    isRoot
    accordionId={"chemistry"}
    title={<Localized id="chemistry-title-text">Kemia</Localized>}
  >
    <h5>
      <Localized id="subjects-introduction">Yleinen esittely</Localized>
    </h5>
    <Localized id="chemistry-introduction-text">
      <p>
        Kemia tutkii aineen rakennetta, ja siinä tapahtuvia muutoksia. Kemian
        erikoistumisaloja ovat esimerkiksi materiaalitiede, analyyttinen kemia
        ja laskennallinen kemia. Reaktiomekanismien tutkiminen voi johtaa
        teollisuuden prosessien optimointiin, tai kokonaan uusien,
        ympäristöystävällisempien tuotteiden kehittämiseen. Laskennallista
        kemiaa hyödynnetään kaikessa materiaalien ja lääkkeiden suunnittelussa
        uusien molekyylien simuloimisessa ennen varsinaisia käytännön kokeita.
        Jokapäiväinen elämämme on ympäröity eri kemian sovelluksilla, vaikka
        emme niitä yleensä huomaa. Siksi kemian osaajia tarvitaan hyvin monilla
        eri aloilla.
      </p>
    </Localized>
    <Localized id="work-descriptions-text">
      <h5>Tittelit</h5>
    </Localized>
    <Accordion
      accordionId={"chemistry-the-synthetic"}
      title={
        <Localized id="chemistry-the-synthetic-title-text">
          Synteetikko
        </Localized>
      }
      noShadow
    >
      <Localized id="chemistry-the-synthetic-description-text">
        Jokaisen lääkeaineen tulo markkinoille vaatii kemistin, joka sitä osaa
        valmistaa. Ja Kemian koulutusohjelma tarjoaa tähän hyvän alustuksen
        reaktio-oppeineen ja pitkine laboratoriotöineen. Ja mikäli opiskelija on
        suorittanut tai suorittamassa Synteettisen Kemian maisteriohjelmaa, hän
        ei osaa pelkästään tehdä yksinkertaisia synteesitöitä, vaan myös
        suunnitella ja ketjuttaa pidempiä prosesseja, ja pähkäillä esille
        helpoimmat, halvimmat, ja tuottoisimmat tavat tuottaa jokin tietty
        kemikaali.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"chemistry-analytician"}
      title={
        <Localized id="chemistry-analytician-title-text">Analyytikko</Localized>
      }
      noShadow
    >
      <Localized id="chemistry-analytician-description-text">
        Mitä ainetta ja miten paljon? Näihin kysymyksiin olemme tottuneitä
        vastaamaan jo perusopinnoissa, mutta Analyyttiseen kemiaan
        erikoistuvalla maisteriopiskelijalla tottumusta kertyy runsaasti.
        Opintojen aikana kertyy myös tietoa useasta vanhasta ja uudesta
        analyysimenetelmästä, joita analyytikko pystyy hyödyntämään
        laadunvalvonnassa, tutkimuksessa ja kehityksessä, luonnonaineen
        analyysissä...
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"chemistry-material-specialist"}
      title={
        <Localized id="chemistry-material-specialist-title-text">
          Materiaaliasiantuntija
        </Localized>
      }
      noShadow
    >
      <Localized id="chemistry-material-specialist-description-text">
        Metalliyhdisteet? Muovipolymeerit? Ohutkalvot? Luonnolliset materiaalit?
        Nanomateriaalit? Näista kaikista materiaaleista löytyy yliopistolta
        osaajia, tarkoitti osaaminen sitten luonnonaineiden tutkimista,
        synteettisten aineiden tuottamista, tai kaikille aineille ominaisuuksien
        ja käyttöönottotapojen selvittämistä. Joka tapauksessa uuden materiaalin
        touttaminen ja käyttöönotto ei olisi mahdollista ilman syvää osaamista
        sen kemiallisista ominaisuuksista.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"chemistry-researcher"}
      title={
        <Localized id="chemistry-researcher-title-text">Tutkija</Localized>
      }
      noShadow
    >
      <Localized id="chemistry-researcher-description-text">
        Helsingin yliopiston kouluttama kemisti voi myös erikoistua
        fysikaaliseen kemiaan, jossa simuloidaan kemiallisia rakenteita
        kvanttimekaniikan avulla, tai kehitetään uusia mittausmenetelmiä vain
        teoriassa tunnettujen reaktioiden seuraamiseen. Lisäksi Helsingin
        Yliopistolla on Suomen ainoa Radiokemian osasto, jossa opiskelija voi
        erikoistua epästabiilien atomien tutkimiseen ja hyödyntämiseen.
      </Localized>
    </Accordion>
  </Accordion>
);
