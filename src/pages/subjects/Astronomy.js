import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { Localized } from "@fluent/react";

export const Astronomy = () => (
  <Accordion
    isRoot
    accordionId={"astronomy"}
    title={<Localized id="astronomy-title-text">Tähtitiede</Localized>}
  >
    <h5>
      <Localized id="subjects-introduction">Yleinen esittely</Localized>
    </h5>
    <Localized id="astronomy-introduction-text">
      <p>
        Tähtitiede tutkii universumia fysikaalisin keinoin. Alan opiskelija omaa
        laajan osaamisen, johon sisältyy mm. matematiikka, ohjelmointi,
        tilastolliset menetelmät sekä kyky käsitellä monimutkaisia ongelmia.
        Helsingin Yliopistossa tutkitaan universumia kaikilla skaaloilla,
        aurinkokunnasta galakseihin. Opiskelijoilla on mahdollista tutustua
        lähiavaruuden ilmiöihin sekä asteroidien tuntemiseen, alueet joiden
        merkitys suurenee tulevaisuudessa.
      </p>
    </Localized>
    <Localized id="work-descriptions-text">
      <h5>Tittelit</h5>
    </Localized>
    <Accordion
      accordionId={"astronomy-researcher"}
      title={
        <Localized id="astronomy-researcher-title-text">Tutkija</Localized>
      }
      noShadow
    >
      <Localized id="astronomy-researcher-description-text">
        Yksi tähtitieteilijän uran luonnollisin loppupiste on tutkija.
        Ammattitutkijaksi voi ryhtyä vasta tohtorintutkinnon saatuaan, mutta jo
        kandivaiheessa tähtitieteen opiskelijat kesätöiden kautta saavat
        harjoitusta tutkimisen perusteista. Yleensä maisterin tutkinnot
        sisältävät jo jonkin verran omaa tutkimusta. Tutkijan on kyettävä
        loogiseen ajatteluun ja ongelmanratkaisuun. Sen lisäksi tutkijan täytyy
        hallita oman alansa matemaattiset sekä ohjelmoinnin taidot.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"astronomy-programmer"}
      title={
        <Localized id="astronomy-programmer-title-text">Koodaaja</Localized>
      }
      noShadow
    >
      <Localized id="astronomy-programmer-description-text">
        Alalla tarvittavien koodaustaitojen ansiosta tähtitieteilijät usein
        suuntaavat koodausalalle. Tähtitieteilijöitä löytyy mm. pelifirmoista,
        sekä pankkialalta, riskianalyysin tutkimuksesta, sekä big data-aloilta.
        Alan opiskelijat ovat tottuneet käsittelemään ja analysoimaan suuria
        määriä dataa. IT-aloille voi päätyä jo kandivaiheessa.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"astronomy-satellite-and-space"}
      title={
        <Localized id="astronomy-satellite-and-space-companies-title-text">
          Satelliitti- ja avaruusfirmat
        </Localized>
      }
      noShadow
    >
      <Localized id="astronomy-satellite-and-space-companies-description-text">
        Tähtitieteilijät soveltuvat erinomaisesti myös satelliitti- ja
        lähiavaruusfirmoihin, sekä tutkimus- että koodauspuolelle. Helsingin
        yliopistossa on useita erinomaisia lähiavaruuteen perehtyviä ryhmiä,
        sekä ns. avaruussään että asteroidien tutkimisessa.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"astronomy-popular-science"}
      title={
        <Localized id="astronomy-popular-science-title-text">
          Populaaritiede
        </Localized>
      }
      noShadow
    >
      <Localized id="astronomy-popular-science-description-text">
        Tähtitiede kiinnostaa kansaa, ja tähtitieteilijät sopivat erinomaisesti
        alan popularisointiin. Alaan sisältyy mm. museoissa ja tiedekeskuksissa
        työsekentely sekä mediassa esiintyminen ja kirjoittaminen.
      </Localized>
    </Accordion>
  </Accordion>
);
