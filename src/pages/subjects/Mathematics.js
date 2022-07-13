import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { Localized } from "@fluent/react";

export const Mathematics = () => (
  <Accordion
    isRoot
    accordionId={"mathematics"}
    title={<Localized id="mathematics-title-text">Matematiikka</Localized>}
  >
    <h5>
      <Localized id="subjects-introduction">Yleinen esittely</Localized>
    </h5>
    <Localized id="mathematics-introduction-text">
      <p>
        Matematiikka kehittää kriittistä ajattelua, abstraktia hahmottamiskykyä
        sekä loogista päättelyä. Matematiikkaa on kaikkialla: kännyköissä,
        pankkilainoissa ja kotitalosi perustuksissa. Suurimmat työllistäjät
        matematiikan alueelta löytyvätkin sen sovellutuksista muilta
        tieteenaloilta. Tärkein matematiikan opettama taito ei ole suinkaan
        päässälaskemisen maailmanennätys, vaan uusien näkökulmien ja
        ajatustapojen omaksuminen, minkä avulla ratkeavat visaisetkin ongelmat.
        Päteviä matemaatikkoja tarvitaan aina ja kaikkialla - myös kandidaatteja
        - mutta yleisesti ottaen matemaatikot työllistyvät vakituisesti vasta
        maisterivaiheen opintojen jälkeen, sillä syvällinen erikoistuminen
        suoritetaan loppuun silloin. Kliseisen simppelisti voisi sanoa, että
        kandidaatti erikoistuu maisteria varten ja maisteri elämää varten.
      </p>
    </Localized>
    <Localized id="work-descriptions-text">
      <h5>Tittelit</h5>
    </Localized>
    <Accordion
      accordionId={"mathematics-insurance"}
      title={
        <Localized id="mathematics-insurance-mathematician-title-text">
          Vakuutusmatemaatikko
        </Localized>
      }
      noShadow
    >
      <Localized id="mathematics-insurance-mathematician-description-text">
        Matemaatikot laskevat ja tuottavat ennusteet, joiden perusteella
        vakuutuksia ja eläkkeitä kohdennetaan eri ryhmille. Pankit, Kela,
        vakuutusyritykset ja muut julkisen rahahallinnon laitokset ovat aina
        osaavien matemaatikkojen tarpeessa, puhumattakaan ulkomaan markkinoista.
        Tässä työssä kansainvälistyminen on helppoa ja verkostoituminen sekä
        vuorovaikutustaidot kannattavat.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"mathematics-software-designer"}
      title={
        <Localized id="mathematics-software-designer-title-text">
          Ohjelmistosuunnittelija
        </Localized>
      }
      noShadow
    >
      <Localized id="mathematics-software-designer-description-text">
        Ohjelmistosuunnittelija osaa kertoa ensisilmäyksellä, mitä kaveri olisi
        voinut tehdä paremmin ohjelmakoodissaan ja lukee tietorakenteita sekä
        algoritmeja kuin avointa kirjaa. Matemaatikot testaavat, optimoivat ja
        suunnittelevat monenlaisia ohjelmistoja yrityskäyttöön
        tositarkoituksella. Työnantajiin kuuluvat niin software developmentiin
        keskittyvät start-upit, pk-yritykset kuin isommat
        tietotekniikkajätitkin.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"mathematics-analytician"}
      title={
        <Localized id="mathematics-analytician-title-text">
          Analyytikko
        </Localized>
      }
      noShadow
    >
      <Localized id="mathematics-analytician-description-text">
        Analyytikot analysoivat dataa, tuottavat uusia toiminta- ja
        havainnollistusmalleja, algoritmeja, ennusteita sekä ohjelmistoja saadun
        datan perusteella ja kertovat mitä kaikkea voisi tehdä aina vain
        paremmin, kunnes tuottavuus kasvaa rajatta. Matemaatikko on siis
        eräänlainen selvännäkijä, kunhan hänelle antaa tietokoneen ja lukuja, ja
        kukapa ei haluaisi nähdä tulevaisuuteen? Työllistäjiä löytyy alalta kuin
        alalta, aina logistiikasta päivittäistavarakauppaan ja finanssialalle ja
        kaikkea siltä väliltä.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"mathematics-teacher"}
      title={
        <Localized id="mathematics-teacher-title-text">Opettaja</Localized>
      }
      noShadow
    >
      <Localized id="mathematics-teacher-description-text">
        Opettajan työ on ihmisläheistä ja vuorovaikutustaidot ovatkin
        avainasemassa. Aineenopettajilla on yleensä timanttisen matematiikan
        aineenhallinnan lisäksi hallussa muitakin aineita, ja yleisimpiä
        yhdistelmiä lienee fysiikka, kemia tai tietojenkäsittelytiede. Opettajia
        tarvitaan aina alakoulusta yliopistotason oppilaitoksiin. Ehkäpä hieman
        yllättävästi pedagogisista opinnoista on hyötyä myös esimerkiksi
        HR-tehtävissä.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"mathematics-reseacher"}
      title={
        <Localized id="mathematics-researcher-title-text">Tutkija</Localized>
      }
      noShadow
    >
      <Localized id="mathematics-researcher-description-text">
        Tutkijan työssä taistellaan ratkaisemattomia ongelmia vastaan.
        Matematiikan tutkimusaloja on kymmeniä, eivätkä eri alojen huiputkaan
        välttämättä ymmärrä toistensa tutkimusta. Tutkimuksen rahoitus on
        ikuisuuskysymys, mutta työssä saattaa myös kerätä kuolematonta mainetta
        ja kunniaa samalla, kun selvittää vastauksia uusiin kysymyksiin.
        Tutkijan paikat ovat kovan kilpailun kohteena. Myös useimpien
        matematiikan tutkijoiden uskollisena ystävänä toimii tietokone.
      </Localized>
    </Accordion>
  </Accordion>
);
