import React from "react";
import { Page } from "./../components/Page";
import { Localized } from "fluent-react/compat";

const NotFoundPage = () => (
  <Page>
    <Localized id="pageNotFound">
      <h1>Sivua ei löydy</h1>
    </Localized>
  </Page>
);

export default NotFoundPage;
