import './App.css'
import Navbar from './components/Navbar'
import Tripscheduler from './components/Tripscheduler'
import Recommendation from './components/Recommendation'
import Services from './components/Services'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Login from './components/Login'
import React from 'react';
import Backtotop from './components/Backtotop'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      {/* Home Section starts */}
      <section id="home">
        <div className="container-fluid position-relative p-0">
          {/* Navigation bar */}
          <AuthProvider>
            <Navbar />
          </AuthProvider>
          {/* Trip Scheduler Plan */}
          <Tripscheduler />
        </div>
      </section>
      {/* Home Section ends */}

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

      {/* Login/SignUp Modal starts */}
      <Login />

      {/* Login/SignUp Modal ends */}

      {/* Back To Top starts*/}
      <Backtotop />
      {/* Back To Top ends*/}
    </>
  )
}

export default App
