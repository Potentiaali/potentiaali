import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { Localized } from "fluent-react/compat";

export const Geography = () => (
  <Accordion
    accordionId={"geography"}
    title={<Localized id="geography-title-text">Maantiede</Localized>}
  >
    <h5>
      <Localized id="subjects-introduction">Yleinen esittely</Localized>
    </h5>
    <Localized id="geography-introduction-text">
      <p>
        Maantiede on yksi laaja-alaisimmista yliopistossa opiskeltavista aloista
        – maantiede liittyy kaikkeen ja kaikesta voi tehdä maantiedettä.
        Helsingin yliopistossa maantieteilijät opiskelevat muun muassa
        paikkatieto-ohjelmia, luonnonmaantiedettä, suunnittelumaantiedettä ja
        kehitysmaantiedettä. Osaamista löytyy siis laidasta laitaan, mutta
        kaikkia yhdistää sijainnin merkityksen ymmärtäminen. Maantieteilijät
        täydentävät tutkintojaan valinnaisilla opintokokonaisuuksilla, jotka
        löytyvät usein muista Helsingin Yliopiston tiedekunnista biologiasta
        kulttuurintutkimukseen. Maantieteilijöiden yksi ehdottomista
        vahvuuksista onkin taito yhdistää teknistä ja tekstuaalista osaamista.
      </p>
    </Localized>
    <Localized id="work-descriptions-text">
      <h5>Tittelit</h5>
    </Localized>
    <Accordion
      accordionId={"geography-geo-location-consultant"}
      title={
        <Localized id="geography-geo-location-consultant-title-text">
          Paikkatietokonsultti
        </Localized>
      }
      noShadow
    >
      <Localized id="geography-geo-location-consultant-description-text">
        Paikkatieto on maantieteilijän valttikortti. Oli suuntautuminen sitten
        mikä tahansa maantieteen sisällä, jokainen maantieteilijä osaa
        paikkatieto-ohjelmista ainakin perusteet. Verkostoanalyysit,
        matka-kustannusarviot ja saavutettavuusanalyysit, kuuluvat monen
        paikkatietokonsultin toimenkuvaan ja niistä hyötyvät yritykset laidasta
        laitaan.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"geography-designer"}
      title={
        <Localized id="geography-designer-title-text">Suunnittelija</Localized>
      }
      noShadow
    >
      <Localized id="geography-designer-description-text">
        Monet maantieteilijät työllistyvät suunnittelijana. Kaupungit, kunnat,
        valtio ja yritykset tuottavat esimerkiksi liikenne- ja
        kaupunkisuunnittelua, jolloin maantieteilijöiden osaaminen sijainnin ja
        muiden tekijöiden suhteen nousee suureen arvoon.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"geography-cartographer"}
      title={
        <Localized id="geography-cartographer-title-text">Kartografi</Localized>
      }
      noShadow
    >
      <Localized id="geography-cartographer-description-text">
        Maantiede on karttoja. Kartografia on läsnä lähes kaikessa
        maantieteilijöiden tuottamassa visuaalisessa ulosannissa, joka näkyy
        karttojen lisäksi myös esimerkiksi raporteissa ja tutkielmissa.
        Visuaalinen osaaminen ja kuvankäsittelyohjelmien taitaminen kuuluu
        jokaisen maantieteilijän perusosaamiseen.
      </Localized>
    </Accordion>
  </Accordion>
);
