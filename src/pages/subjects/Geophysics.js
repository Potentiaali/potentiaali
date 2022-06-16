import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { Localized } from "@fluent/react";

export const Geophysics = () => (
  <Accordion
    isRoot
    accordionId={"geophysics"}
    title={<Localized id="geophysics-title-text">Geofysiikka</Localized>}
  >
    <h5>
      <Localized id="subjects-introduction">Yleinen esittely</Localized>
    </h5>
    <Localized id="geophysics-introduction-text">
      <p>
        Geofysiikka on tiede, joka tutkii luonnonilmiöitä fysiikan menetelmin.
        Geofysiikan opiskelijat ovat yleensä geotieteilijöitä, fyysikoita,
        ympäristötieteilijöitä tai matemaattisten ja teknillisten alojen
        opiskelijoita, joilla on taustalla fysiikan perusopinnot sekä
        laskennallisten menetelmien perusopinnot, ja jotka valitsevat
        geofysiikan erikoistumissuunnakseen maisterivaiheessa. Geofyysikoita
        koulutetaan vain Helsingin yliopistossa. Alan opintoihin sisältyy
        geofysikaalisen aineiston käsittelyä sekä jonkin verran kenttäosuuksia
        ja maastotöihin valmentavia osuuksia.
      </p>
    </Localized>
    <Localized id="work-descriptions-text">
      <h5>Tittelit</h5>
    </Localized>
    <Accordion
      accordionId={"geophysics-consultant"}
      title={
        <Localized id="geophysics-consultant-title-text">Konsultti</Localized>
      }
      noShadow
    >
      <Localized id="geophysics-consultant-description-text">
        Geofysiikan konsultteja toimii erityisesti ympäristöalalla ja
        kalliorakentamisessa. Geofysiikan konsultit voivat olla erikoistuneita
        esimerkiksi arktisten alueiden kysymyksiin, vesihuoltoon tai
        maa-/kallioperätutkimuksiin.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"geophysics-hydrologist"}
      title={
        <Localized id="geophysics-hydrologist-title-text">Hydrologi</Localized>
      }
      noShadow
    >
      <Localized id="geophysics-hydrologist-description-text">
        Hydrologit kehittävät pinta- ja pohjavesimalleja, laskevat vesistöjen ja
        vesialtaiden vesimääriä, arvioivat tulvariskejä ja keräävät ja
        käsittelevät makean veden kiertoon liittyvää havaintoaineistoa.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"geophysics-design"}
      title={
        <Localized id="geophysics-design-engineer-title-text">
          Suunnitteluinsinööri
        </Localized>
      }
      noShadow
    >
      <Localized id="geophysics-design-engineer-description-text">
        Geofyysikot osallistuvat ammattitaidollaan esimerkiksi kalliotilojen
        suunnitteluun tai laivojen suunnitteluun.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"geophysics-geophysicist"}
      title={
        <Localized id="geophysics-geophysicist-title-text">
          Geofyysikko
        </Localized>
      }
      noShadow
    >
      <Localized id="geophysics-geophysicist-description-text">
        Yleisnimike henkilölle, joka tekee geofysiikan alaan kuuluvaa työtä.
        Esimerkiksi kaivosteollisuudessa geofyysikot keräävät ja tulkitsevat
        potentiaalikenttiin liittyvää aineistoa.
      </Localized>
    </Accordion>
    <Accordion
      accordionId={"geophysics-research-assistant"}
      title={
        <Localized id="geophysics-research-assistant-title-text">
          Tutkimusavustaja
        </Localized>
      }
      noShadow
    >
      <Localized id="geophysics-research-assistant-description-text">
        Melkein minkä tahansa vaiheen opiskelijoita voi rekrytoida
        tutkimusapulaisiksi tai kenttätöihin. Tieteellisen laskennan kurssit
        suorittaneilla on parhaat edellytykset tehdä numeeriseen laskentaan ja
        mallien kehitykseen liittyvää työtä.
      </Localized>
    </Accordion>
  </Accordion>
);
