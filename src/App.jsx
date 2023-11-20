import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import config from './data/config.json'
import dayjs from 'dayjs'
import { Page } from './components/Page'
import Fallback from './components/partials/Fallback'

const SubjectsPage = React.lazy(() => import('./pages/SubjectsPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))
const MainPage = React.lazy(() => import('./pages/MainPage'))
const Nav = React.lazy(() => import('./components/partials/Nav'))
const CompanyRegistrationPage = React.lazy(() => import('./pages/CompanyRegistrationPage'))
const CompanyPage = React.lazy(() => import("./pages/CompanyPage"))
const SingleCompanyPage = React.lazy(() => import("./pages/SingleCompanyPage"))

 const Footer = React.lazy(() => import("./components/partials/Footer"))
// const MapPage = React.lazy(() => import("./pages/MapPage"))
 const SchedulePage = React.lazy(() => import("./pages/SchedulePage"))
 const SingleSchedulePage = React.lazy(() =>import("./pages/SingleSchedulePage"))

dayjs.locale(config.defaultLocale)

const App = () => {
  return (
    <>
      <Nav />
      <div className="content-wrapper">
      <Suspense fallback={<Fallback.Loader/>}>
          <Page>
            <Routes>
              <Route exact="true" path="/" element={<MainPage />} />
               <Route exact path="/schedule" element={<SchedulePage />} />
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
              <Route exact="true" path="/companies" element={<CompanyPage />} />
              <Route exact="true" path="/subjects" element={<Suspense fallback={<Fallback.Loader/>}><SubjectsPage /></Suspense>} />
              {/* <Route exact path="/map" element={<MapPage />} />*/}
              <Route
                exact
                path="/registration"
                element={<CompanyRegistrationPage/>}></Route>
              <Route component={<NotFoundPage />} />
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
  )
}

export default App
