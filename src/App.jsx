import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Tripscheduler from './components/Tripscheduler'
import Recommendation from './components/Recommendation'
import Services from './components/Services'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {

  return (
    <>
      {/* Top bar Starts */}
      <Topbar/>
      {/* Top bar Ends */}

      {/* Home Section starts */}
      <section id="home">
        <div className="container-fluid position-relative p-0">
          {/* Navigation bar */}
          <Navbar/>

          {/* Hero Section
          <Herosection/> */}
        </div>
      </section>
      {/* Home Section ends */}
      
      {/* Trip Scheduler Plan starts */}
      <section id="scheduler">
        <Tripscheduler/>
      </section>
      {/* Trip Scheduler Plan Ends */}

      {/* Recommendation Section starts */}
      <section id="recommendation">
        <Recommendation/>
      </section>
      {/* Recommendation Section ends */}

      {/* Service Section starts */}
      <section id="services">
        <Services/>
      </section>

      {/* About Us Section starts */}
      <section id="about">
        <Aboutus/>
      </section>
      {/* About Us Section ends */}

      {/* Contact Us Section starts */}
      <section id="contact">
        <Contactus/>
      </section>
      {/* Contact Us Section ends */}

      {/* Footer Section starts */}
      <Footer/>
      {/* Footer Section ends */}

      {/* Login/SignUp Modal starts */}
      <Login/>
      {/* Login/SignUp Modal ends */}
    </>
  )
}

export default App
