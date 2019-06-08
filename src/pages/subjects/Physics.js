import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { Localized } from "fluent-react/compat";

export const Physics = () => (
  <Accordion title={<Localized id="physics-title-text">Fysiikka</Localized>}>
    <h5>
      <Localized id="subjects-introduction">Yleinen esittely</Localized>
    </h5>
    <Localized id="physics-introduction-text">
      <p>
        Fysiikkaa opiskelevat henkilöt opiskelevat hallitsemaan valtavan skaalan
        ympäristöön, tekniikkaan ja luontoon liittyviä ongelmia ja niiden
        ratkaisuja. Fyysikot keräävät opintojensa aikana itselleen laajan
        työkalupakin, jota voi soveltaa miltein minkä tahansa ongelman
        ratkaisemiseen. Muun muassa ohjelmointi, matematiikka ja tilastotiede
        ovat fyysikoille tuttuja työkaluja. Fyysikon koulutuksen antama kyky
        hahmottaa monimutkaisia kokonaisuuksia ja soveltaa hankittuja taitoja
        mitä haastavimpiin ongelmiin antaa loistavat edellytykset menestyä niin
        tutkimuksessa, kuin suuressa yrityksessä jopa kaupallisissa ja
        hallinnollisissa tehtävissä. Fyysikko on yleishyödyllinen joka paikan
        höylä, jota moni yritys ei tajua tarvitsevansa.
      </p>
    </Localized>
    <Localized id="work-descriptions-text">
      <h5>Tittelit</h5>
    </Localized>
    <Accordion
      title={<Localized id="physics-researcher-title-text">Tutkija</Localized>}
      noShadow
    >
      <Localized id="physics-researcher-description-text">
        Luonnollisesti yksi fyysikon koulutuksen antama uravaihtoehto on
        tutkija. Tutkijana fyysikko soveltaa taitojaan ratkaisemaan nimenomaan
        luonnontieteen ongelmia. Tutkijat voivat sijoittua myös akatemian ja
        perustutkimuksen ulkopuolelle yksityisiin tutkimuslaitoksiin tai
        yritysmaailmaan. Esimerkiksi monet teknologia-alan yritykset tarvitsevat
        fysiikan osaajia materiaalien ja uusien teknologioiden kehittämiseen.
        Fyysikko voi myös kehittää yrityksen toimintaa ympäristöystävällisempään
        suuntaan. Helsingin yliopiston fyysikot voivat erikoistua muun muassa
        materiaalien tutkimukseen tai elektroniikkaan. Maisterivaiheen
        opiskelija (4. vuosi) on kerennyt jo omaksumaan suurimman osan oman
        alansa taidoista, mutta myös tätä nuoremmilla on perusteet hallussa ja
        voivat avustaa tai tehdä yksinkertaisempaa tutkimusta. Toki vaativa työ
        voi vaatia jopa tohtorin tutkintoa.
      </Localized>
    </Accordion>
    <Accordion
      title={
        <Localized id="physics-data-analysist-title-text">
          Data-analyytikko
        </Localized>
      }
      noShadow
    >
      <Localized id="physics-data-analysist-description-text">
        Suuri osa fyysikon osaamisesta on datan analysointia. Fyysikot
        opettelevat jo varhaisessa vaiheessa käsittelemään suuria määriä dataa.
        Fysiikan mittauksissa tai simulaatioissa voidaan saada jopa terabittejä
        dataa, joka fyysikon pitää osata käydä läpi ja analysoida tehokkaasti.
        Standardi ohjelmoinnin ja tilastotieteen työkalut datan käsittelyyn
        tulevat tutuksi jo toisen vuoden aikana. Monet, erityisesti
        laskennalliseen puoleen erikoistuneet fyysikot, ovatkin erinomaisia
        ohjelmoijia. Luonnollisesti nämä taidot soveltuvat minkä tahansa datan
        analysointiin. Fyysikoita on työllistynyt muun muassa lentoyhtiöiden,
        teleoperaattoreiden ja muiden isojen firmojen palvelukseen tekemään Big
        data -analytiikkaa ja data miningia. Fyysikolle on normaalia arkea
        kaivaa tieto esiin datasta, tietämättä varsinaisesti mitä etsitään.
      </Localized>
    </Accordion>
    <Accordion
      title={
        <Localized id="physics-specialist-title-text">Asiantuntija</Localized>
      }
      noShadow
    >
      <Localized id="physics-specialist-description-text">
        Fyysikon koulutus on erinomainen erilaisiin asiantuntijatehtäviin laajan
        osaamispohjan ansiosta. Lähinnä tiede ja teknologia alan asioissa
        fyysikot osaavat helposti arvioida esimerkiksi jonkin tuotteen tai
        palvelun laatua tai kannattavuutta, ympäristövaikutuksia ja muita
        kuluja. Fyysikko voi konsultoida yrityksiä heidän tuotteiden tai
        toiminnan ympäristövaikutuksista, joka on tänä päivänä erittäin tärkeä
        myyntivaltti. Fyysikon koulutuksen parhaana valttina on hallinta ja
        ymmärrys suurista, monimutkaisista kokonaisuuksista ja
        riippuvuussuhteiden havaitseminen sekä ymmärtäminen hyvinkin kauas
        lähtökohdasta. Asiantuntijuus karttuu kokemuksen myötä, joten parhaiten
        työhön sopii pidemmälle opinnoissa kerennyt tai jo valmistunut fyysikko.
      </Localized>
    </Accordion>
  </Accordion>
);
