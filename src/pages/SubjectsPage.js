import React from "react";
import { Page } from "./../components/Page";
import { Physics } from "./subjects/Physics";
import { Geophysics } from "./subjects/Geophysics";
import { Meteorology } from "./subjects/Meteorology";
import { Geology } from "./subjects/Geology";
import { Geography } from "./subjects/Geography";
import { Astrology } from "./subjects/Astrology";
import { Chemistry } from "./subjects/Chemistry";
import { Statistics } from "./subjects/Statistics";
import { Mathematics } from "./subjects/Mathematics";
import { ComputerScience } from "./subjects/ComputerScience";
import { Localized } from "fluent-react/compat";

export const SubjectsPage = () => {
  return (
    <Page usePadding data-testid="Subject">
      <h1>
        <Localized id="subjects-page-title-text">Aineiden esittely</Localized>
      </h1>
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
    </Page>
  );
};

SubjectsPage.propTypes = {};
