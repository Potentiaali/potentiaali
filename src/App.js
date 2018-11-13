import React from "react";
import Nav from "./components/partials/Nav";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/partials/Footer";
import logos from "./data/logos.json";
import config from "./data/config.json";
import moment from "moment";
import "moment/locale/fi";
import "moment/locale/en-gb";

import { MainPage } from "./pages/MainPage";
import Contact from "./components/partials/Contact";
import SchedulePage from "./pages/SchedulePage";
import SingleSchedulePage from "./pages/SingleSchedulePage";
import { SubjectsPage } from "./pages/SubjectsPage";
import { injectIntl, defineMessages } from "react-intl";

moment.locale(config.defaultLocale);

const appMessages = defineMessages({
  pageNotFound: {
    id: "app.pageNotFound",
    defaultMessage: "Sivua ei löydy"
  }
});

const App = ({ intl: { formatMessage } }) => {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/schedule" component={SchedulePage} />
        <Route exact path="/schedule/:id" component={SingleSchedulePage} />
        <Route exact path="/subjects" component={SubjectsPage} />
        <Route
          render={() => (
            <div
              style={{
                marginTop: 25
              }}
            >
              <h1>{formatMessage(appMessages.pageNotFound)}</h1>
            </div>
          )}
        />
      </Switch>
      <Contact />
      <Footer logos={logos} />
    </React.Fragment>
  );
};

export default injectIntl(App);
