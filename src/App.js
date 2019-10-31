import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import config from "./data/config.json";
import moment from "moment";
import "moment/locale/fi";
import "moment/locale/en-gb";
import { Page } from "./components/Page";
import Fallback from "./components/partials/Fallback";

const SchedulePage = React.lazy(() => import("./pages/SchedulePage"));
const SingleSchedulePage = React.lazy(() =>
  import("./pages/SingleSchedulePage")
);
const SingleCompanyPage = React.lazy(() => import("./pages/SingleCompanyPage"));
const SubjectsPage = React.lazy(() => import("./pages/SubjectsPage"));
const CompanyRegistrationPage = React.lazy(() =>
  import("./pages/CompanyRegistrationPage")
);
const MapPage = React.lazy(() => import("./pages/MapPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
const MainPage = React.lazy(() => import("./pages/MainPage"));
const CompanyPage = React.lazy(() => import("./pages/CompanyPage"));
const Nav = React.lazy(() => import("./components/partials/Nav"));
const Footer = React.lazy(() => import("./components/partials/Footer"));

moment.locale(config.defaultLocale);

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Fallback.Nav />}>
        <Nav />
      </Suspense>
      <div className="content-wrapper">
        <Page>
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
              <Route
                exact
                path="/schedule/:id"
                component={SingleSchedulePage}
              />
              <Route exact path="/company/:id" component={SingleCompanyPage} />
              <Route exact path="/companies" component={CompanyPage} />
              <Route exact path="/subjects" component={SubjectsPage} />
              <Route exact path="/map" component={MapPage} />
              <Route
                exact
                path="/registration"
                component={CompanyRegistrationPage}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
          <Suspense fallback={<Fallback.Footer />}>
            <Footer />
          </Suspense>
        </Page>
      </div>
      <Suspense fallback={<Fallback.Footer />}>
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default App;
