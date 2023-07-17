import Navbar from './components/Navbar'
import Tripscheduler from './components/Tripscheduler'
import Recommendation from './components/Recommendation'
import Services from './components/Services'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Login from './components/Login'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Backtotop from './components/Backtotop'
import { AuthProvider } from './context/AuthContext'
import IterneryPlan from './components/IterneryPlan'

function App() {

  return (
    <>
      <Router>

        {/* Navigation bar starts*/}
        <section id="home">
          <div className="container-fluid position-relative p-0">
            <AuthProvider>
              <Navbar />

              {/* Login/SignUp Modal */}
              <Login />
            </AuthProvider>
          </div>
        </section>
        {/* Navigation bar ends */}

        <Routes>

          <Route exact path='/' element={
            <>
              {/* Trip Scheduler Plan starts */}
              <section id="tripScheduler">
                <Tripscheduler />
              </section>
              {/* Trip Scheduler Plan ends */}

              {/* Recommendation Section starts */}
              <section id="recommendation">
                <Recommendation />
              </section>
              {/* Recommendation Section ends */}

              {/* Service Section starts */}
              <section id="services">
                <Services />
              </section>
              {/* Service Section ends */}

              {/* Contact Us Section starts */}
              <section id="contact">
                <Contactus />
              </section>
              {/* Contact Us Section ends */}

            </>}>
          </Route>

          <Route exact path='/recommendation' element={
            <>
              {/* Recommendation Section starts */}
              <section id="recommendation">
                <Recommendation />
              </section>
              {/* Recommendation Section ends */}
            </>
          }>
          </Route>

          <Route exact path='/services' element={
            <>
              {/* Service Section starts */}
              <section id="services">
                <Services />
              </section>
              {/* Service Section ends */}
            </>
          }>
          </Route>

          <Route exact path='/contact' element={
            <>
              {/* Contact Us Section starts */}
              <section id="contact">
                <Contactus />
              </section>
              {/* Contact Us Section ends */}
            </>
          }>
          </Route>

          <Route exact path='/Tripscheduler' element={
            <>
              {/* Trip Iternery Section starts */}
              <section id="iternery">
                <IterneryPlan />
              </section>
              {/* Trip Iternery Section ends */}
            </>}>
          </Route>

        </Routes>

        {/* Footer Section starts */}
        <Footer />
        {/* Footer Section ends */}

        {/* Back To Top starts */}
        <Backtotop />
        {/* Back To Top ends */}
        
      </Router>
    </>
  )
}

export default App
