import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import config from "./data/config.json";
import dayjs from "dayjs";
import { Page } from "./components/Page";
import Fallback from "./components/partials/Fallback";
import TestimonialsPage from "./pages/TestimonialsPage";

const SubjectsPage = lazy(() => import("./pages/SubjectsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const MainPage = lazy(() => import("./pages/MainPage"));
const Nav = lazy(() => import("./components/partials/Nav"));
const CompanyRegistrationPage = lazy(() =>
  import("./pages/CompanyRegistrationPage"),
);
const CompanyPage = lazy(() => import("./pages/CompanyPage"));
const SingleCompanyPage = lazy(() => import("./pages/SingleCompanyPage"));

const Footer = lazy(() => import("./components/partials/Footer"));
const MapPage = lazy(() => import("./pages/MapPage"));
const SchedulePage = lazy(() => import("./pages/SchedulePage"));
const SingleSchedulePage = lazy(() =>
  import("./pages/SingleSchedulePage"),
);

dayjs.locale(config.defaultLocale);

const RedirectToFeedbck = () => {
  window.location.href = config.studentFeedbackForm;
};

const App = () => {
  return (
    <>
      <Nav />
      <div className="content-wrapper">
        <Suspense fallback={<Fallback.Loader />}>
          <Page>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route
                path="/schedule/:id"
                element={<SingleSchedulePage />}
              />
              <Route
                path="/company/:id"
                element={<SingleCompanyPage />}
              />
              <Route path="/companies" element={<CompanyPage />} />
              <Route
                path="/subjects"
                element={
                  <Suspense fallback={<Fallback.Loader />}>
                    <SubjectsPage />
                  </Suspense>
                }
              />
              <Route
                path="/feedback"
                element={<RedirectToFeedbck />}
              />
              <Route path="/map" element={<MapPage />} />
              <Route exact path="/map" element={<MapPage />} />
              <Route
                path="/registration"
                element={<CompanyRegistrationPage />}
              ></Route>
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Suspense fallback={<Fallback.Footer />}>
              <Footer />
            </Suspense>
          </Page>
        </Suspense>
      </div>

      <Suspense fallback={<Fallback.Footer />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
