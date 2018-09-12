import React from "react";
import { Accordion } from "../components/Accordion";

const Physics = () => (
  <Accordion title="Fysiikka">
    <h5>Yleinen esittely</h5>
    <p>
      Fysiikkaa opiskelevat henkilöt opiskelevat hallitsemaan valtavan skaalan
      ympäristöön, tekniikkaan ja luontoon liittyviä ongelmia ja niiden
      ratkaisuja. Fyysikot keräävät opintojensa aikana itselleen laajan
      työkalupakin, jota voi soveltaa miltein minkä tahansa ongelman
      ratkaisemiseen. Muun muassa ohjelmointi, matematiikka ja tilastotiede ovat
      fyysikoille tuttuja työkaluja. Fyysikon koulutuksen antama kyky hahmottaa
      monimutkaisia kokonaisuuksia ja soveltaa hankittuja taitoja mitä
      haastavimpiin ongelmiin antaa loistavat edellytykset menestyä niin
      tutkimuksessa, kuin suuressa yrityksessä jopa kaupallisissa ja
      hallinnollisissa tehtävissä. Fyysikko on yleishyödyllinen joka paikan
      höylä, jota moni yritys ei tajua tarvitsevansa.
    </p>
    <h5>Tittelit</h5>
    <Accordion title="Tutkija" noShadow>
      Luonnollisesti yksi fyysikon koulutuksen antama uravaihtoehto on tutkija.
      Tutkijana fyysikko soveltaa taitojaan ratkaisemaan nimenomaan
      luonnontieteen ongelmia. Tutkijat voivat sijoittua myös akatemian ja
      perustutkimuksen ulkopuolelle yksityisiin tutkimuslaitoksiin tai
      yritysmaailmaan. Esimerkiksi monet teknologia-alan yritykset tarvitsevat
      fysiikan osaajia materiaalien ja uusien teknologioiden kehittämiseen.
      Fyysikko voi myös kehittää yrityksen toimintaa ympäristöystävällisempään
      suuntaan. Helsingin yliopiston fyysikot voivat erikoistua muun muassa
      materiaalien tutkimukseen tai elektroniikkaan. Maisterivaiheen opiskelija
      (4. vuosi) on kerennyt jo omaksumaan suurimman osan oman alansa taidoista,
      mutta myös tätä nuoremmilla on perusteet hallussa ja voivat avustaa tai
      tehdä yksinkertaisempaa tutkimusta. Toki vaativa työ voi vaatia jopa
      tohtorin tutkintoa.
    </Accordion>
    <Accordion title="Data-analyytikko" noShadow>
      Suuri osa fyysikon osaamisesta on datan analysointia. Fyysikot opettelevat
      jo varhaisessa vaiheessa käsittelemään suuria määriä dataa. Fysiikan
      mittauksissa tai simulaatioissa voidaan saada jopa terabittejä dataa, joka
      fyysikon pitää osata käydä läpi ja analysoida tehokkaasti. Standardi
      ohjelmoinnin ja tilastotieteen työkalut datan käsittelyyn tulevat tutuksi
      jo toisen vuoden aikana. Monet, erityisesti laskennalliseen puoleen
      erikoistuneet fyysikot, ovatkin erinomaisia ohjelmoijia. Luonnollisesti
      nämä taidot soveltuvat minkä tahansa datan analysointiin. Fyysikoita on
      työllistynyt muun muassa lentoyhtiöiden, teleoperaattoreiden ja muiden
      isojen firmojen palvelukseen tekemään Big data -analytiikkaa ja data
      miningia. Fyysikolle on normaalia arkea kaivaa tieto esiin datasta,
      tietämättä varsinaisesti mitä etsitään.
    </Accordion>
    <Accordion title="Asiantuntija" noShadow>
      Fyysikon koulutus on erinomainen erilaisiin asiantuntijatehtäviin laajan
      osaamispohjan ansiosta. Lähinnä tiede ja teknologia alan asioissa fyysikot
      osaavat helposti arvioida esimerkiksi jonkin tuotteen tai palvelun laatua
      tai kannattavuutta, ympäristövaikutuksia ja muita kuluja. Fyysikko voi
      konsultoida yrityksiä heidän tuotteiden tai toiminnan
      ympäristövaikutuksista, joka on tänä päivänä erittäin tärkeä myyntivaltti.
      Fyysikon koulutuksen parhaana valttina on hallinta ja ymmärrys suurista,
      monimutkaisista kokonaisuuksista ja riippuvuussuhteiden havaitseminen sekä
      ymmärtäminen hyvinkin kauas lähtökohdasta. Asiantuntijuus karttuu
      kokemuksen myötä, joten parhaiten työhön sopii pidemmälle opinnoissa
      kerennyt tai jo valmistunut fyysikko.
    </Accordion>
  </Accordion>
);

const Geophysics = () => (
  <Accordion title="Geofysiikka">
    <h5>Yleinen esittely</h5>
    <p>
      Geofysiikka on tiede, joka tutkii luonnonilmiöitä fysiikan menetelmin.
      Geofysiikan opiskelijat ovat yleensä geotieteilijöitä, fyysikoita,
      ympäristötieteilijöitä tai matemaattisten ja teknillisten alojen
      opiskelijoita, joilla on taustalla fysiikan perusopinnot sekä
      laskennallisten menetelmien perusopinnot, ja jotka valitsevat geofysiikan
      erikoistumissuunnakseen maisterivaiheessa. Geofyysikoita koulutetaan vain
      Helsingin yliopistossa. Alan opintoihin sisältyy geofysikaalisen aineiston
      käsittelyä sekä jonkin verran kenttäosuuksia ja maastotöihin valmentavia
      osuuksia.
    </p>
    <h5>Tittelit</h5>
    <Accordion title="Konsultti" noShadow>
      Geofysiikan konsultteja toimii erityisesti ympäristöalalla ja
      kalliorakentamisessa. Geofysiikan konsultit voivat olla erikoistuneita
      esimerkiksi arktisten alueiden kysymyksiin, vesihuoltoon tai
      maa-/kallioperätutkimuksiin.
    </Accordion>
    <Accordion title="Hydrologi" noShadow>
      Hydrologit kehittävät pinta- ja pohjavesimalleja, laskevat vesistöjen ja
      vesialtaiden vesimääriä, arvioivat tulvariskejä ja keräävät ja
      käsittelevät makean veden kiertoon liittyvää havaintoaineistoa.
    </Accordion>
    <Accordion title="Suunnitteluinsinööri" noShadow>
      Geofyysikot osallistuvat ammattitaidollaan esimerkiksi kalliotilojen
      suunnitteluun tai laivojen suunnitteluun.
    </Accordion>
    <Accordion title="Geofyysikko" noShadow>
      Yleisnimike henkilölle, joka tekee geofysiikan alaan kuuluvaa työtä.
      Esimerkiksi kaivosteollisuudessa geofyysikot keräävät ja tulkitsevat
      potentiaalikenttiin liittyvää aineistoa.
    </Accordion>
    <Accordion title="Tutkimusavustaja" noShadow>
      Melkein minkä tahansa vaiheen opiskelijoita voi rekrytoida
      tutkimusapulaisiksi tai kenttätöihin. Tieteellisen laskennan kurssit
      suorittaneilla on parhaat edellytykset tehdä numeeriseen laskentaan ja
      mallien kehitykseen liittyvää työtä.
    </Accordion>
  </Accordion>
);

const Geology = () => (
  <Accordion title="Geologia">
    <h5>Yleinen esittely</h5>
    <p>
      Geologia tutkii maan kuoren prosesseja ja planeetan kehitystä, joten
      geologien keskuudesta löytyy osaamista paitsi mineraali- ja
      pohjavesivarantojen hyödyntämiseen, myös ympäristökysymysten ratkaisuun ja
      ilmastonmuutoksen tutkimukseen. Geologian kandidaatinopinnot tarjoavat
      opiskelijoille kuvan maankuoren prosesseista ja geologisten luonnonvarojen
      hyödyntämisestä ja kartoittamisesta kentällä. Ulkoilmassa viihtyvät
      geologit soveltuvatkin kandivaiheessa erinonomaisesti esimerkiksi kallio-
      tai maaperäkartoituksiin tai geofysikaalisiin mittaustöihin. Sivuaineinaan
      geologit opiskelevat kemiaa, matematiikkaa, fysiikkaa ja
      menetelmätieteitä. Geologian kandivaiheeseen kuuluu myös GIS-opintoja,
      joten geologit osaavat myös laatia karttoja ja suoriutuvat
      laboratoriotöistä.
    </p>
    <p>
      Myöhemmissä opinnoissaan geologit erikoistuvat taloudelliseen- ja
      kallioperägeologiaan, hydro- ja ympäristögeologiaan, kiinteän maan
      geofysiikkaan tai paleobiologiaan ja paleoklimatologiaan. Maisterivaiheen
      opiskelijat osaavat jo toimia itsenäisesti laboratoriossa ja kentällä.
    </p>
    <h5>Tittelit</h5>
    <Accordion title="Tutkija / erikoistutkija" noShadow>
      <ul>
        <li>
          Tuotantoympäristöt ja kierrätys, työllistäjä esim. Geologian
          tutkimuskeskus
        </li>
        <li>
          Työtehtävinä kestävän kaivostoiminnan ja teollisuusympäristöjen
          ratkaisujen kehittäminen: vesien hallinta, vesien ja aineiden
          kulkeutumisen mallinnus, geokemiallinen mallintaminen, riskinarviointi
          maaperässä; kohteena kaivos- ja teollisuusympäristöt
        </li>
      </ul>
    </Accordion>
    <Accordion title="Malmigeologi" noShadow>
      <ul>
        <li>Työllistäjä esim. kaivosyhtiöt</li>
        <li>
          Kairasydänloggaus: kivilajien määritys, mineraalit, malmimineraalit ja
          niiden arvioidut pitoisuudet, magneettisuuden mittaus, sydämen
          kuvaaminen, näytteiden merkkaaminen ja tietojen kirjaaminen
          tietokantaan
        </li>
        <li>
          Kentällä kalliopaljastumien etsintää ja kartoitusta, lohkareiden
          etsintää, kairapaikkojen merkintää ja kairausvalvontaa
        </li>
      </ul>
    </Accordion>
    <Accordion title="Hydrogeologi" noShadow>
      <ul>
        <li>Ympäristö ja luonnonvarat, työllistäjä esim. ELY-keskus</li>
        <li>
          Pohjavesien suojelu ja kartoittaminen, pohjavesitutkimuksen
          kenttätyöryhmän ohjaus, tutkimustulosten tulkinta ja raportointi,
          vedenhankinnan yleissuunnittelu vesilaitosten kanssa ja
          vedenottamoiden velvoitetarkkailujen seuranta ja kehittäminen
        </li>
      </ul>
    </Accordion>
  </Accordion>
);

const Chemistry = () => (
  <Accordion title="Kemia">
    <h5>Yleinen esittely</h5>
    <p>
      Kemia tutkii aineen rakennetta, ja siinä tapahtuvia muutoksia. Kemian
      erikoistumisaloja ovat esimerkiksi materiaalitiede, analyyttinen kemia ja
      laskennallinen kemia. Reaktiomekanismien tutkiminen voi johtaa
      teollisuuden prosessien optimointiin, tai kokonaan uusien,
      ympäristöystävällisempien tuotteiden kehittämiseen. Laskennallista kemiaa
      hyödynnetään kaikessa materiaalien ja lääkkeiden suunnittelussa uusien
      molekyylien simuloimisessa ennen varsinaisia käytännön kokeita.
      Jokapäiväinen elämämme on ympäröity eri kemian sovelluksilla, vaikka emme
      niitä yleensä huomaa. Siksi kemian osaajia tarvitaan hyvin monilla eri
      aloilla.
    </p>
    <h5>Tittelit</h5>
    <Accordion title="Synteetikko" noShadow>
      Jokaisen lääkeaineen tulo markkinoille vaatii kemistin, joka sitä osaa
      valmistaa. Ja Kemian koulutusohjelma tarjoaa tähän hyvän alustuksen
      reaktio-oppeineen ja pitkine laboratoriotöineen. Ja mikäli opiskelija on
      suorittanut tai suorittamassa Synteettisen Kemian maisteriohjelmaa, hän ei
      osaa pelkästään tehdä yksinkertaisia synteesitöitä, vaan myös suunnitella
      ja ketjuttaa pidempiä prosesseja, ja pähkäillä esille helpoimmat,
      halvimmat, ja tuottoisimmat tavat tuottaa jokin tietty kemikaali.
    </Accordion>
    <Accordion title="Analyytikko" noShadow>
      Mitä ainetta ja miten paljon? Näihin kysymyksiin olemme tottuneitä
      vastaamaan jo perusopinnoissa, mutta Analyyttiseen kemiaan erikoistuvalla
      maisteriopiskelijalla tottumusta kertyy runsaasti. Opintojen aikana kertyy
      myös tietoa useasta vanhasta ja uudesta analyysimenetelmästä, joita
      analyytikko pystyy hyödyntämään laadunvalvonnassa, tutkimuksessa ja
      kehityksessä, luonnonaineen analyysissä...
    </Accordion>
    <Accordion title="Materiaaliasiantuntija" noShadow>
      Metalliyhdisteet? Muovipolymeerit? Ohutkalvot? Luonnolliset materiaalit?
      Nanomateriaalit? Näista kaikista materiaaleista löytyy yliopistolta
      osaajia, tarkoitti osaaminen sitten luonnonaineiden tutkimista,
      synteettisten aineiden tuottamista, tai kaikille aineille ominaisuuksien
      ja käyttöönottotapojen selvittämistä. Joka tapauksessa uuden materiaalin
      touttaminen ja käyttöönotto ei olisi mahdollista ilman syvää osaamista sen
      kemiallisista ominaisuuksista.
    </Accordion>
    <Accordion title="Tutkija" noShadow>
      Helsingin yliopiston kouluttama kemisti voi myös erikoistua fysikaaliseen
      kemiaan, jossa simuloidaan kemiallisia rakenteita kvanttimekaniikan
      avulla, tai kehitetään uusia mittausmenetelmiä vain teoriassa tunnettujen
      reaktioiden seuraamiseen. Lisäksi Helsingin Yliopistolla on Suomen ainoa
      Radiokemian osasto, jossa opiskelija voi erikoistua epästabiilien atomien
      tutkimiseen ja hyödyntämiseen.
    </Accordion>
  </Accordion>
);

const Geography = () => (
  <Accordion title="Maantiede">
    <h5>Yleinen esittely</h5>
    <p>
      Maantiede on yksi laaja-alaisimmista yliopistossa opiskeltavista aloista –
      maantiede liittyy kaikkeen ja kaikesta voi tehdä maantiedettä. Helsingin
      yliopistossa maantieteilijät opiskelevat muun muassa paikkatieto-ohjelmia,
      luonnonmaantiedettä, suunnittelumaantiedettä ja kehitysmaantiedettä.
      Osaamista löytyy siis laidasta laitaan, mutta kaikkia yhdistää sijainnin
      merkityksen ymmärtäminen. Maantieteilijät täydentävät tutkintojaan
      valinnaisilla opintokokonaisuuksilla, jotka löytyvät usein muista
      Helsingin Yliopiston tiedekunnista biologiasta kulttuurintutkimukseen.
      Maantieteilijöiden yksi ehdottomista vahvuuksista onkin taito yhdistää
      teknistä ja tekstuaalista osaamista.
    </p>
    <h5>Tittelit</h5>
    <Accordion title="Paikkatietokonsultti" noShadow>
      Paikkatieto on maantieteilijän valttikortti. Oli suuntautuminen sitten
      mikä tahansa maantieteen sisällä, jokainen maantieteilijä osaa
      paikkatieto-ohjelmista ainakin perusteet. Verkostoanalyysit,
      matka-kustannusarviot ja saavutettavuusanalyysit, kuuluvat monen
      paikkatietokonsultin toimenkuvaan ja niistä hyötyvät yritykset laidasta
      laitaan.
    </Accordion>
    <Accordion title="Suunnittelija" noShadow>
      Monet maantieteilijät työllistyvät suunnittelijana. Kaupungit, kunnat,
      valtio ja yritykset tuottavat esimerkiksi liikenne- ja
      kaupunkisuunnittelua, jolloin maantieteilijöiden osaaminen sijainnin ja
      muiden tekijöiden suhteen nousee suureen arvoon.
    </Accordion>
    <Accordion title="Kartografi" noShadow>
      Maantiede on karttoja. Kartografia on läsnä lähes kaikessa
      maantieteilijöiden tuottamassa visuaalisessa ulosannissa, joka näkyy
      karttojen lisäksi myös esimerkiksi raporteissa ja tutkielmissa.
      Visuaalinen osaaminen ja kuvankäsittelyohjelmien taitaminen kuuluu
      jokaisen maantieteilijän perusosaamiseen.
    </Accordion>
  </Accordion>
);
const Mathematics = () => (
  <Accordion title="Matematiikka">
    <h5>Yleinen esittely</h5>
    <p>
      Matematiikka kehittää kriittistä ajattelua, abstraktia hahmottamiskykyä
      sekä loogista päättelyä. Matematiikkaa on kaikkialla: kännyköissä,
      pankkilainoissa ja kotitalosi perustuksissa. Suurimmat työllistäjät
      matematiikan alueelta löytyvätkin sen sovellutuksista muilta
      tieteenaloilta. Tärkein matematiikan opettama taito ei ole suinkaan
      päässälaskemisen maailmanennätys, vaan uusien näkökulmien ja ajatustapojen
      omaksuminen, minkä avulla ratkeavat visaisetkin ongelmat. Päteviä
      matemaatikkoja tarvitaan aina ja kaikkialla - myös kandidaatteja - mutta
      yleisesti ottaen matemaatikot työllistyvät vakituisesti vasta
      maisterivaiheen opintojen jälkeen, sillä syvällinen erikoistuminen
      suoritetaan loppuun silloin. Kliseisen simppelisti voisi sanoa, että
      kandidaatti erikoistuu maisteria varten ja maisteri elämää varten.
    </p>
    <h5>Tittelit</h5>
    <Accordion title="Vakuutusmatemaatikko" noShadow>
      Matemaatikot laskevat ja tuottavat ennusteet, joiden perusteella
      vakuutuksia ja eläkkeitä kohdennetaan eri ryhmille. Pankit, Kela,
      vakuutusyritykset ja muut julkisen rahahallinnon laitokset ovat aina
      osaavien matemaatikkojen tarpeessa, puhumattakaan ulkomaan markkinoista.
      Tässä työssä kansainvälistyminen on helppoa ja verkostoituminen sekä
      vuorovaikutustaidot kannattavat.
    </Accordion>
    <Accordion title="Ohjelmistosuunnittelija" noShadow>
      Ohjelmistosuunnittelija osaa kertoa ensisilmäyksellä, mitä kaveri olisi
      voinut tehdä paremmin ohjelmakoodissaan ja lukee tietorakenteita sekä
      algoritmeja kuin avointa kirjaa. Matemaatikot testaavat, optimoivat ja
      suunnittelevat monenlaisia ohjelmistoja yrityskäyttöön tositarkoituksella.
      Työnantajiin kuuluvat niin software developmentiin keskittyvät start-upit,
      pk-yritykset kuin isommat tietotekniikkajätitkin.
    </Accordion>
    <Accordion title="Analyytikko" noShadow>
      Analyytikot analysoivat dataa, tuottavat uusia toiminta- ja
      havainnollistusmalleja, algoritmeja, ennusteita sekä ohjelmistoja saadun
      datan perusteella ja kertovat mitä kaikkea voisi tehdä aina vain paremmin,
      kunnes tuottavuus kasvaa rajatta. Matemaatikko on siis eräänlainen
      selvännäkijä, kunhan hänelle antaa tietokoneen ja lukuja, ja kukapa ei
      haluaisi nähdä tulevaisuuteen? Työllistäjiä löytyy alalta kuin alalta,
      aina logistiikasta päivittäistavarakauppaan ja finanssialalle ja kaikkea
      siltä väliltä.
    </Accordion>
    <Accordion title="Opettaja" noShadow>
      Opettajan työ on ihmisläheistä ja vuorovaikutustaidot ovatkin
      avainasemassa. Aineenopettajilla on yleensä timanttisen matematiikan
      aineenhallinnan lisäksi hallussa muitakin aineita, ja yleisimpiä
      yhdistelmiä lienee fysiikka, kemia tai tietojenkäsittelytiede. Opettajia
      tarvitaan aina alakoulusta yliopistotason oppilaitoksiin. Ehkäpä hieman
      yllättävästi pedagogisista opinnoista on hyötyä myös esimerkiksi
      HR-tehtävissä.
    </Accordion>
    <Accordion title="Tutkija" noShadow>
      Tutkijan työssä taistellaan ratkaisemattomia ongelmia vastaan.
      Matematiikan tutkimusaloja on kymmeniä, eivätkä eri alojen huiputkaan
      välttämättä ymmärrä toistensa tutkimusta. Tutkimuksen rahoitus on
      ikuisuuskysymys, mutta työssä saattaa myös kerätä kuolematonta mainetta ja
      kunniaa samalla, kun selvittää vastauksia uusiin kysymyksiin. Tutkijan
      paikat ovat kovan kilpailun kohteena. Myös useimpien matematiikan
      tutkijoiden uskollisena ystävänä toimii tietokone.
    </Accordion>
  </Accordion>
);

const Meteorology = () => (
  <Accordion title="Meteorologia">
    <h5>Yleinen esittely</h5>
    <p>
      Meteorologia on ilmakehän fysiikkaa. Säätiedotukset ovat meteorologian
      tunnetuin sovellutus, mutta meteorologinen tieto on välttämätöntä myös
      esimerkiksi ilmastonmuutoksen ymmärtämiseksi, ennustamiseksi ja
      lieventämiseksi. Meteorologit tutkivat ilmakehän ilmiöitä monenlaisilla
      ajallisilla ja paikallisilla skaaloilla teorioiden, simulaatioiden ja
      havaintojen avulla. Meteorologia on laskennallisten menetelmien kehityksen
      edelläkävijä: esimerkiksi kaaosteoria syntyi meteorologisen mallin
      odottamattoman käyttäytymisen pohjalta. Nykyaikainen meteorologi onkin
      laajan tieto- ja taitopohjan omaava tieteen ammattilainen.
    </p>
    <h5>Tittelit</h5>
    <Accordion title="Meteorologi" noShadow>
      Meteorologi on suojattu oppiarvo, jonka käyttö edellyttää
      korkeakoulututkintoa meteorologiasta. Meteorologi on ilmakehän fysiikan
      ammattilainen. Tämän lisäksi meteorologit osaavat laajasti eri
      menetelmätieteitä, kuten tietojenkäsittelytiedettä, tilastotiedettä ja
      data-analyysiä. Meteorologeja työskentelee esimerkiksi päivystys- ja
      tutkimustehtävissä. Varsinainen erikoistuminen ilmakehätieteisiin alkaa
      meteorologian opiskelijoilla toisena opiskeluvuonna fysiikan
      perusopintojen jälkeen.
    </Accordion>
    <Accordion title="Konsultti" noShadow>
      Meteorologeja toimii konsultteina esimerkiksi energia-alalla. Tuuli- ja
      aurinkoenergiapuistoja suunnitellessa on erittäin tärkeää ottaa huomioon
      suunnittelualueen meteorologiset olosuhteet, sillä näillä voi olla
      merkittäviä vaikutuksia valmiin voimalan tuottavuuteen. Konsulttina
      energia-alalla toimivan meteorologin tehtävänä onkin erilaisten mallien
      avulla tarjota mahdollisimman luotettavaa tietoa suunnittelun tueksi.
    </Accordion>
    <Accordion title="Fyysikko" noShadow>
      Useilla ilmakehätieteiden aloilla valmistuneiden meteorologien työnimike
      saattaa olla esimerkiksi fyysikko. Fyysikkona työskentelevät meteorologit
      saattavat työskennellä esimerkiksi aerosoli- tai ilmanlaatumittausten
      parissa. Meteorologien termo- ja virtausdynamiikkaan liittyvä osaaminen
      voi olla hyödyllistä myös monilla muilla fysiikan aloilla.
    </Accordion>
  </Accordion>
);

const ComputerScience = () => (
  <Accordion title="Tietojenkäsittelytiede">
    <h5>Yleinen esittely</h5>
    <p>
      Tietojenkäsittelytieteen opinnot lähtevät ohjelmoinnin perusteista mutta
      monipuolistuvat nopeasti. Mahdollisuuksia osaamisen syventämiseen löytyy
      niin ohjelmistosuunnittelun, algoritmiikan, koneoppimisen, hajautettujen
      järjestelmien, bioinformatiikan kuin big datankin saralla.
    </p>
    <h5>Tittelit</h5>
    <Accordion title="Full-stack Developer" noShadow>
      Full-stack Developer on osastomme opiskelijoille tyypillinen titteli jo
      opintojen aikana. Web-ohjelmoinnin salat aukeavat innokkaimille jo
      ensimmäisen opiskeluvuoden aikana, joten opiskelijoillamme on usein
      nuoremmalta ohjelmistokehittäjältä odotettavat taidot hallussa jo hyvin
      aikaisessa vaiheessa.
    </Accordion>
    <Accordion title="Data Scientist" noShadow>
      Algoritmeihin ja koneoppimiseen keskittyvät opiskelijat voivat muun muassa
      päätyä etsimään arvokkaita syy-seuraussuhteita isojen yritysten suurista
      datamassoista tai kehittämään verkkopalveluiden suosittelujärjestelmiä.
      Löydät joukostamme paljon maisterivaiheen loppusuoralla olevia
      koneoppimisen asiantuntijoita, mutta monet jatkavat opintojaan vielä
      tohtorin tutkintoon asti.
    </Accordion>
    <Accordion title="Security / Networking Expert" noShadow>
      Networking and services -erikoistumislinjan opiskelijat perehtyvät
      kursseilla esimerkiksi ohjelmistojen ja tietoliikenteen turvallisuuteen
      sekä hajautettuihin järjestelmiin sekä pilvilaskenta-arkkitehtuureihin.
      Linjalta valmistuneet voivat työskennellä esimerkiksi tittelillä Cloud
      infrastructure architect tai Cyber Security Engineer.
    </Accordion>
    <Accordion title="Software Architect" noShadow>
      Ohjelmistojärjestelmien linjalla opiskellaan muun muassa
      ohjelmistoarkkitehtuureja, ohjelmointitekniikkoita, testausta sekä
      ohjelmistoprojektien johtamista. Nämä taidot tekevät linjan opiskelijoista
      erinomaisia, laajoja kokonaisuuksia hallitsevia ohjelmistoarkkitehtejä.
    </Accordion>
  </Accordion>
);

const Statistics = () => (
  <Accordion title="Tilastotiede">
    <h5>Yleinen esittely</h5>
    <p>
      Tilastotiede on väline todellisuuden ilmiöiden ymmärtämiseen ja
      analysoimiseen. Tilastollisten mallien rakentaminen perustuu aineiston,
      datan, tehokkaaseen käsittelyyn, minkä vuoksi monet tilastotieteilijät
      opiskelevat myös ohjelmointia. Malleja voidaan rakentaa esimerkiksi
      asiakastyytyväisyyskyselyjen tuloksista, palveluiden käyttötilastoista ja
      vaikka työttömyystilastoista.
    </p>
    <h5>Tittelit</h5>
    <Accordion title="Data-analyytikko" noShadow>
      Data-analyytikko pyrkii etsimään syy-seuraussuhteita aineistoista ja
      tekemään päätelmiä tämän pohjalta. Data-analyytikko pyrkii esimerkiksi
      luomaan algoritmin, joka pystyy päättelemään minkä genren elokuvan haluat
      katsoa Netflixissä seuraavaksi tai minkälaisen mainoksen sinulle voisi
      näyttää vieraillessasi erilaisilla nettisivuilla. Data-analytiikan
      opintosuunnan voi valita vasta maisterivaiheessa ja kandiopinnot ovat
      pääosin tilastotiedettä. Jo 2. vuoden opiskelijat ovat usein alansa
      työssä.
    </Accordion>
    <Accordion title="Tilastotieteilijä" noShadow>
      Tilastotieteilijä pyrkii selittämään ihmisen ja luonnon toimintaa
      havaintojen pohjalta. Tilastotieteilijää tarvitaan käytännössä kaikilla
      yhteiskunnan aloilla. Useasti myös akateemisen tutkimuksen tekeminen
      vaatii tilastotieteilijän. Ei ole sattumaa että monien tieteellisten
      alojen opintoihin kuuluu hieman tilastotiedettä. Tilastotieteen
      opintosuunnan voi valita jo kandivaiheessa, josta on mahdollista jatkaa
      tilastotieteen maisterivaiheeseen. Jo 2. vuoden opiskelijat ovat usein
      alansa työssä.
    </Accordion>
    <Accordion title="Vakuutusmatemaatikko" noShadow>
      Myös vakuutusmatemaatikko on tekemissä erittäin paljon tilastotieteen
      kanssa. Vakuutusmatemaatikko on esimerkiksi vakuutusyhtiössä luomassa
      malleja, jonka pohjalta vakuutuksia hinnoitellaan. Myös monilla muilla
      aloilla työskenteleviä vakuutusmatemaatikkoja on paljon. Vakuutus- ja
      finanssimatematiikan opintosuunnan voi valita vasta maisterivaiheessa.
      Kandivaihe sisältää paljon matematiikkaa ja tilastotiedettä. Jo 2. vuoden
      opiskelijat ovat usein alansa työssä.
    </Accordion>
  </Accordion>
);
const Astrology = () => (
  <Accordion title="Tähtitiede">
    <h5>Yleinen esittely</h5>
    <p>
      Tähtitiede tutkii universumia fysikaalisin keinoin. Alan opiskelija omaa
      laajan osaamisen, johon sisältyy mm. matematiikka, ohjelmointi,
      tilastolliset menetelmät sekä kyky käsitellä monimutkaisia ongelmia.
      Helsingin Yliopistossa tutkitaan universumia kaikilla skaaloilla,
      aurinkokunnasta galakseihin. Opiskelijoilla on mahdollista tutustua
      lähiavaruuden ilmiöihin sekä asteroidien tuntemiseen, alueet joiden
      merkitys suurenee tulevaisuudessa.
    </p>
    <h5>Tittelit</h5>
    <Accordion title="Tutkija" noShadow>
      Yksi tähtitieteilijän uran luonnollisin loppupiste on tutkija.
      Ammattitutkijaksi voi ryhtyä vasta tohtorintutkinnon saatuaan, mutta jo
      kandivaiheessa tähtitieteen opiskelijat kesätöiden kautta saavat
      harjoitusta tutkimisen perusteista. Yleensä maisterin tutkinnot sisältävät
      jo jonkin verran omaa tutkimusta. Tutkijan on kyettävä loogiseen
      ajatteluun ja ongelmanratkaisuun. Sen lisäksi tutkijan täytyy hallita oman
      alansa matemaattiset sekä ohjelmoinnin taidot.
    </Accordion>
    <Accordion title="Koodaaja" noShadow>
      Alalla tarvittavien koodaustaitojen ansiosta tähtitieteilijät usein
      suuntaavat koodausalalle. Tähtitieteilijöitä löytyy mm. pelifirmoista,
      sekä pankkialalta, riskianalyysin tutkimuksesta, sekä big data-aloilta.
      Alan opiskelijat ovat tottuneet käsittelemään ja analysoimaan suuria
      määriä dataa. IT-aloille voi päätyä jo kandivaiheessa.
    </Accordion>
    <Accordion title="Satelliitti- ja avaruusfirmat" noShadow>
      Tähtitieteilijät soveltuvat erinomaisesti myös satelliitti- ja
      lähiavaruusfirmoihin, sekä tutkimus- että koodauspuolelle. Helsingin
      yliopistossa on useita erinomaisia lähiavaruuteen perehtyviä ryhmiä, sekä
      ns. avaruussään että asteroidien tutkimisessa.
    </Accordion>
    <Accordion title="Populaaritiede" noShadow>
      Tähtitiede kiinnostaa kansaa, ja tähtitieteilijät sopivat erinomaisesti
      alan popularisointiin. Alaan sisältyy mm. museoissa ja tiedekeskuksissa
      työsekentely sekä mediassa esiintyminen ja kirjoittaminen.
    </Accordion>
  </Accordion>
);

export const SubjectsPage = () => {
  return (
    <div className="page">
      <h1>Aineiden esittely</h1>
      <Physics />
      <Geophysics />
      <Geology />
      <Chemistry />
      <Geography />
      <Mathematics />
      <Meteorology />
      <ComputerScience />
      <Statistics />
      <Astrology />
    </div>
  );
};

SubjectsPage.propTypes = {};
