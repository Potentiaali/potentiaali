import React from "react";
import { Accordion } from "../../components/accordion/Accordion";
import { Localized } from "fluent-react/compat";

export const ComputerScience = () => (
  <Accordion
    title={
      <Localized id="computer-science-title-text">
        Tietojenkäsittelytiede
      </Localized>
    }
  >
    <h5>
      <Localized id="subjects-introduction">Yleinen esittely</Localized>
    </h5>
    <Localized id="computer-science-introduction-text">
      <p>
        Tietojenkäsittelytieteen opinnot lähtevät ohjelmoinnin perusteista mutta
        monipuolistuvat nopeasti. Mahdollisuuksia osaamisen syventämiseen löytyy
        niin ohjelmistosuunnittelun, algoritmiikan, koneoppimisen, hajautettujen
        järjestelmien, bioinformatiikan kuin big datankin saralla.
      </p>
    </Localized>
    <Localized id="work-descriptions-text">
      <h5>Tittelit</h5>
    </Localized>
    <Accordion
      title={
        <Localized id="computer-science-full-stack-developer-title-text">
          Full-stack Developer
        </Localized>
      }
      noShadow
    >
      <Localized id="computer-science-full-stack-developer-description-text">
        Full-stack Developer on osastomme opiskelijoille tyypillinen titteli jo
        opintojen aikana. Web-ohjelmoinnin salat aukeavat innokkaimille jo
        ensimmäisen opiskeluvuoden aikana, joten opiskelijoillamme on usein
        nuoremmalta ohjelmistokehittäjältä odotettavat taidot hallussa jo hyvin
        aikaisessa vaiheessa.
      </Localized>
    </Accordion>
    <Accordion
      title={
        <Localized id="computer-science-data-sciencist-title-text">
          Data Sciencist
        </Localized>
      }
      noShadow
    >
      <Localized id="computer-science-data-sciencist-description-text">
        Algoritmeihin ja koneoppimiseen keskittyvät opiskelijat voivat muun
        muassa päätyä etsimään arvokkaita syy-seuraussuhteita isojen yritysten
        suurista datamassoista tai kehittämään verkkopalveluiden
        suosittelujärjestelmiä. Löydät joukostamme paljon maisterivaiheen
        loppusuoralla olevia koneoppimisen asiantuntijoita, mutta monet jatkavat
        opintojaan vielä tohtorin tutkintoon asti.
      </Localized>
    </Accordion>
    <Accordion
      title={
        <Localized id="computer-science-security-networking-expert-title-text">
          Tietoturva- ja tietoverkkoasiantuntija
        </Localized>
      }
      noShadow
    >
      <Localized id="computer-science-security-networking-expert-description-text">
        Networking and services -erikoistumislinjan opiskelijat perehtyvät
        kursseilla esimerkiksi ohjelmistojen ja tietoliikenteen turvallisuuteen
        sekä hajautettuihin järjestelmiin sekä pilvilaskenta-arkkitehtuureihin.
        Linjalta valmistuneet voivat työskennellä esimerkiksi tittelillä Cloud
        infrastructure architect tai Cyber Security Engineer.
      </Localized>
    </Accordion>
    <Accordion
      title={
        <Localized id="computer-science-software-architect-title-text">
          Ohjelmistoarkkitehti
        </Localized>
      }
      noShadow
    >
      <Localized id="computer-science-software-architect-description-text">
        Ohjelmistojärjestelmien linjalla opiskellaan muun muassa
        ohjelmistoarkkitehtuureja, ohjelmointitekniikkoita, testausta sekä
        ohjelmistoprojektien johtamista. Nämä taidot tekevät linjan
        opiskelijoista erinomaisia, laajoja kokonaisuuksia hallitsevia
        ohjelmistoarkkitehtejä.
      </Localized>
    </Accordion>
  </Accordion>
);
