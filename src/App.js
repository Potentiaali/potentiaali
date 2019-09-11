import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import logos from "./data/logos.json";
import config from "./data/config.json";
import moment from "moment";
import "moment/locale/fi";
import "moment/locale/en-gb";
import { Page } from "./components/Page";
import Fallback from "./components/partials/Fallback";

const Contact = React.lazy(() => import("./components/partials/Contact"));
const SchedulePage = React.lazy(() => import("./pages/SchedulePage"));
const SingleSchedulePage = React.lazy(() =>
  import("./pages/SingleSchedulePage")
);
const SubjectsPage = React.lazy(() => import("./pages/SubjectsPage"));
const CompanyRegistrationPage = React.lazy(() =>
  import("./pages/CompanyRegistrationPage")
);
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
const MainPage = React.lazy(() => import("./pages/MainPage"));
const Nav = React.lazy(() => import("./components/partials/Nav"));
const Footer = React.lazy(() => import("./components/partials/Footer"));

moment.locale(config.defaultLocale);

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Fallback.Nav />}>
        <Nav />
      </Suspense>
      <Suspense
        fallback={
          <Page noTopPadding noBottomPadding>
            <Fallback.Loader />
          </Page>
        }
      >
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/schedule" component={SchedulePage} />
          <Route exact path="/schedule/:id" component={SingleSchedulePage} />
          <Route exact path="/subjects" component={SubjectsPage} />
          <Route
            exact
            path="/registration"
            component={CompanyRegistrationPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
      <Suspense fallback={<Fallback.Contact />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<Fallback.Footer />}>
        <Footer logos={logos} />
      </Suspense>
    </React.Fragment>
  );
};

export default App;
