import './App.css'
import Navbar from './components/Navbar'
import Tripscheduler from './components/Tripscheduler'
import Recommendation from './components/Recommendation'
import Services from './components/Services'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Login from './components/Login'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Backtotop from './components/Backtotop'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      <Router>
        {/* Home Section starts */}
        <section id="home">
          <div className="container-fluid position-relative p-0">
            <AuthProvider>
              {/* Navigation bar */}
              <Navbar />
              {/* Login/SignUp Modal */}
              <Login />
            </AuthProvider>
          </div>
        </section>
        <section>
          {/* Trip Scheduler Plan */}
          <Tripscheduler />
          {/* Home Section ends */}
        </section>


        {/* Recommendation Section starts */}
        <section id="recommendation">
          <Recommendation />
        </section>
        {/* Recommendation Section ends */}

        {/* Service Section starts */}
        <section id="services">
          <Services />
        </section>

        {/* Contact Us Section starts */}
        <section id="contact">
          <Contactus />
        </section>
        {/* Contact Us Section ends */}

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
