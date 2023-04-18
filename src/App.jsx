import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import config from './data/config.json'
import moment from 'moment'
import 'moment/locale/fi'
import 'moment/locale/en-gb'
import { Page } from './components/Page'
import Fallback from './components/partials/Fallback'

const SubjectsPage = React.lazy(() => import('./pages/SubjectsPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))
const MainPage = React.lazy(() => import('./pages/MainPage'))
const Nav = React.lazy(() => import('./components/partials/Nav'))
/*const Footer = React.lazy(() => import("./components/partials/Footer"))
const CompanyPage = React.lazy(() => import("./pages/CompanyPage"))
const MapPage = React.lazy(() => import("./pages/MapPage"))
const SingleCompanyPage = React.lazy(() => import("./pages/SingleCompanyPage"))
const SchedulePage = React.lazy(() => import("./pages/SchedulePage"))
const SingleSchedulePage = React.lazy(() =>
  import("./pages/SingleSchedulePage")
)
*/
moment.locale(config.defaultLocale)

const App = () => {
  return (
    <>
      <Suspense fallback={<Fallback.Nav />}>
        <Nav />
      </Suspense>
      <div className="content-wrapper">
        <Suspense
          fallback={
            <Page noTopPadding noBottomPadding>
              <Fallback.Loader />
            </Page>
          }
        >
          <Page>
            <Routes>
              <Route exact="true" path="/" element={<MainPage />} />
              {/*  <Route exact path="/schedule" element={<SchedulePage />} />
              <Route
                exact="true"
                path="/schedule/:id"
                element={<SingleSchedulePage />}
              />
              <Route
                exact="true"
                path="/company/:id"
                element={<SingleCompanyPage />}
              />
              <Route exact="true" path="/companies" element={<CompanyPage />} />*/}
              <Route exact="true" path="/subjects" element={<SubjectsPage />} />
              {/*  <Route exact path="/map" element={<MapPage />} />
              <Route
                exact
                path="/registration"
                element={<CompanyRegistrationPage/>}
           />*/}
              <Route component={<NotFoundPage />} />
            </Routes>
            {/*  <Suspense fallback={<Fallback.Footer />}>
              <Footer />
        </Suspense>*/}
          </Page>
        </Suspense>
      </div>
      {/* 
      <Suspense fallback={<Fallback.Footer />}>
        <Footer />
      </Suspense>*/}
    </>
  )
}

export default App
