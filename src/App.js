import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import config from "./data/config.json";
import moment from "moment";
import "moment/locale/fi";
import "moment/locale/en-gb";
import { Page } from "./components/Page";
import Fallback from "./components/partials/Fallback";

/*const SchedulePage = React.lazy(() => import("./pages/SchedulePage"));
const SingleSchedulePage = React.lazy(() =>
  import("./pages/SingleSchedulePage")
);*/
const SingleCompanyPage = React.lazy(() => import("./pages/SingleCompanyPage"));
const SubjectsPage = React.lazy(() => import("./pages/SubjectsPage"));
const CompanyRegistrationPage = React.lazy(() =>
  import("./pages/CompanyRegistrationPage")
)
// const MapPage = React.lazy(() => import("./pages/MapPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
const MainPage = React.lazy(() => import("./pages/MainPage"));
const CompanyPage = React.lazy(() => import("./pages/CompanyPage"));
const Nav = React.lazy(() => import("./components/partials/Nav"));
const Footer = React.lazy(() => import("./components/partials/Footer"));

moment.locale(config.defaultLocale);

const App = () => {
  return (
    <>
              <Suspense
            fallback={
              <Page noTopPadding noBottomPadding>
                <Fallback.Loader />
              </Page>
            }
          >
      <Suspense fallback={<Fallback.Nav />}>
        <Nav />
      </Suspense>
      <div className="content-wrapper">
        <Page>
            <Routes>
              <Route exact="true" path="/" element={<MainPage/>} />
              {/*<Route exact path="/schedule" element={<SchedulePage/>} />
              <Route
                exact
                path="/schedule/:id"
                component={SingleSchedulePage}
          />*/}
              <Route exact="true" path="/company/:id" element={<SingleCompanyPage/>} />
              <Route exact="true" path="/companies" element={<CompanyPage/>} />
              <Route exact="true" path="/subjects" element={<SubjectsPage/>} />
              {/*<Route exact path="/map" element={<MapPage/>} />*/}
              <Route
                exact
                path="/registration"
                element={<CompanyRegistrationPage/>}
              />
              <Route component={<NotFoundPage/>} />
            </Routes>
          <Suspense fallback={<Fallback.Footer />}>
            <Footer />
          </Suspense>
        </Page>
      </div>
      <Suspense fallback={<Fallback.Footer />}>
        <Footer />
      </Suspense>
      </Suspense>
    </>
  );
};

export default App;
