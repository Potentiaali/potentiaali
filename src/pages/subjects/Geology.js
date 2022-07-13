import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { Localized } from "@fluent/react";

export const Geology = () => (
  <Accordion
    isRoot
    accordionId={"geology"}
    title={<Localized id="geology-title-text">Geologia</Localized>}
  >
    <h5>
      <Localized id="subjects-introduction">Yleinen esittely</Localized>
    </h5>
    <Localized id="geology-introduction-text-1">
      <p>
        Geologia tutkii maan kuoren prosesseja ja planeetan kehitystä, joten
        geologien keskuudesta löytyy osaamista paitsi mineraali- ja
        pohjavesivarantojen hyödyntämiseen, myös ympäristökysymysten ratkaisuun
        ja ilmastonmuutoksen tutkimukseen. Geologian kandidaatinopinnot
        tarjoavat opiskelijoille kuvan maankuoren prosesseista ja geologisten
        luonnonvarojen hyödyntämisestä ja kartoittamisesta kentällä. Ulkoilmassa
        viihtyvät geologit soveltuvatkin kandivaiheessa erinonomaisesti
        esimerkiksi kallio- tai maaperäkartoituksiin tai geofysikaalisiin
        mittaustöihin. Sivuaineinaan geologit opiskelevat kemiaa, matematiikkaa,
        fysiikkaa ja menetelmätieteitä. Geologian kandivaiheeseen kuuluu myös
        GIS-opintoja, joten geologit osaavat myös laatia karttoja ja suoriutuvat
        laboratoriotöistä.
      </p>
    </Localized>
    <Localized id="geology-introduction-text-2">
      <p>
        Myöhemmissä opinnoissaan geologit erikoistuvat taloudelliseen- ja
        kallioperägeologiaan, hydro- ja ympäristögeologiaan, kiinteän maan
        geofysiikkaan tai paleobiologiaan ja paleoklimatologiaan.
        Maisterivaiheen opiskelijat osaavat jo toimia itsenäisesti
        laboratoriossa ja kentällä.
      </p>
    </Localized>
    <Localized id="work-descriptions-text">
      <h5>Tittelit</h5>
    </Localized>
    <Accordion
      accordionId={"geology-researcher"}
      title={
        <Localized id="geology-researcher-special-researcher-title-text">
          Tutkija / erikoistutkija
        </Localized>
      }
      noShadow
    >
      <ul>
        <Localized id="geology-researcher-special-researcher-description-text-1">
          <li>
            Tuotantoympäristöt ja kierrätys, työllistäjä esim. Geologian
            tutkimuskeskus
          </li>
        </Localized>
        <Localized id="geology-researcher-special-researcher-description-text-2">
          <li>
            Työtehtävinä kestävän kaivostoiminnan ja teollisuusympäristöjen
            ratkaisujen kehittäminen: vesien hallinta, vesien ja aineiden
            kulkeutumisen mallinnus, geokemiallinen mallintaminen,
            riskinarviointi maaperässä; kohteena kaivos- ja teollisuusympäristöt
          </li>
        </Localized>
      </ul>
    </Accordion>
    <Accordion
      accordionId={"geology-ore-geologist"}
      title={
        <Localized id="geology-ore-geologist-researcher-title-text">
          Malmigeologi
        </Localized>
      }
      noShadow
    >
      <ul>
        <Localized id="geology-ore-geologist-description-text-1">
          <li>Työllistäjä esim. kaivosyhtiöt</li>
        </Localized>
        <Localized id="geology-ore-geologist-description-text-2">
          <li>
            Kairasydänloggaus: kivilajien määritys, mineraalit, malmimineraalit
            ja niiden arvioidut pitoisuudet, magneettisuuden mittaus, sydämen
            kuvaaminen, näytteiden merkkaaminen ja tietojen kirjaaminen
            tietokantaan
          </li>
        </Localized>
        <Localized id="geology-ore-geologist-description-text-3">
          <li>
            Kentällä kalliopaljastumien etsintää ja kartoitusta, lohkareiden
            etsintää, kairapaikkojen merkintää ja kairausvalvontaa
          </li>
        </Localized>
      </ul>
    </Accordion>
    <Accordion
      accordionId={"geology-hydro-geologist"}
      title={
        <Localized id="geology-hydro-geologist-researcher-title-text">
          Hydrogeologisti
        </Localized>
      }
      noShadow
    >
      <ul>
        <Localized id="geology-hydro-geologist-description-text-1">
          <li>Ympäristö ja luonnonvarat, työllistäjä esim. ELY-keskus</li>
        </Localized>
        <Localized id="geology-hydro-geologist-description-text-2">
          <li>
            Pohjavesien suojelu ja kartoittaminen, pohjavesitutkimuksen
            kenttätyöryhmän ohjaus, tutkimustulosten tulkinta ja raportointi,
            vedenhankinnan yleissuunnittelu vesilaitosten kanssa ja
            vedenottamoiden velvoitetarkkailujen seuranta ja kehittäminen
          </li>
        </Localized>
      </ul>
    </Accordion>
  </Accordion>
);
