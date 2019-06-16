import React, { Suspense, lazy } from "react";
import MainContent from "./../components/MainContent";
import { Page } from "../components/Page";
import Fallback from "../components/partials/Fallback";

const Hero = lazy(() => import("./../components/partials/Hero"));

const MainPage = () => (
  <Page fullWidth noTopPadding>
    <Suspense fallback={<Fallback.Hero />}>
      <Hero />
    </Suspense>
    <MainContent />
  </Page>
);

export default MainPage;
