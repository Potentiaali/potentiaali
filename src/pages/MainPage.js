import React from "react";
import MainContent from "./../components/MainContent";
import { Hero } from "../components/partials/Hero";
import { Page } from "../components/Page";

const MainPage = () => (
  <Page fullWidth noTopPadding>
    <Hero />
    <MainContent />
  </Page>
);

export default MainPage;
