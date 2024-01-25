import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faArrowRightFromBracket, faBookmark } from '@fortawesome/free-solid-svg-icons'
import guestImage from '../assets/img/guest.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('false');
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });


    const handleScroll = () => {
        setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    // Function to determine the active link based on scroll position
    const determineActiveLink = () => {
        // Logic to determine which section is currently in view
        // For simplicity, you may need to adjust this based on your specific layout and section heights
        const homeSection = document.getElementById('home');
        const recommendationSection = document.getElementById('recommendation');
        const servicesSection = document.getElementById('services');
        const contactSection = document.getElementById('contact');

        if (
            scrollPosition.y >= homeSection.offsetTop &&
            scrollPosition.y < recommendationSection.offsetTop
        ) {
            return 'home';
        } else if (
            scrollPosition.y >= recommendationSection.offsetTop &&
            scrollPosition.y < servicesSection.offsetTop
        ) {
            return 'recommendation';
        } else if (
            scrollPosition.y >= servicesSection.offsetTop &&
            scrollPosition.y < contactSection.offsetTop
        ) {
            return 'services';
        } else if (scrollPosition.y >= contactSection.offsetTop) {
            return 'contact';
        } else {
            return ''; // No section is in view
        }
    };

    // Update the active link whenever the scroll position changes
    useEffect(() => {
        const active = determineActiveLink();
        setActiveLink(active);
    }, [scrollPosition]);


    const {
        authUser,
        setAuthUser
    } = useAuth();

    const logOut = (e) => {
        //For Popup after Clicking Logout button
        toast('Logged Out Sucessfully!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setAuthUser(null);
        window.sessionStorage.setItem('authUser', null);
        setTimeout(() => {
            window.location.reload();
        }, 1000);

    }

    const recommendation = useRef(null);
    const services = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef, section) => {
        setActiveLink(section);

        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',


        })
    }

    //Taking the reference of login button and clicking it automatically upon loading
    const loginbtnRef = useRef();
    const autoOpenClick = () => {
        loginbtnRef.current.click();
    }

    //If user is already logged In then Login modal is not shown otherwise show login modal
    useEffect(() => {
        if (authUser !== null) {
            console.log("Already Logged In")
        }
        else {
            autoOpenClick();
        }
    }, []);



    return (
        <>
            <ToastContainer />
            {/* Navigation bar starts */}
            <nav className="navbar navbar-expand-lg navbar-light left-50 px-lg-5 py-3 py-lg-0 shadow-sm">
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><span style={{ color: '#37249D' }}><i className="fa fa-map-marked-alt me-3"></i>Trip</span><span style={{ color: "red" }}>Macha</span></h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className='navbox'>
                        <div className="navbar-nav ms-auto py-0">
                            <Link
                                exact
                                to="#home"
                                id="a"
                                className={`nav-item nav-link ${activeLink === 'home' ? 'active' : ''} text-white`}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                Home
                            </Link>
                            <Link
                                to="#recommendation"
                                className={`nav-item nav-link ${activeLink === 'recommendation' ? 'active' : ''}`}
                                onClick={() => window.scrollTo({ top: recommendationSection.offsetTop, behavior: 'smooth' })}
                            >
                                Recommendations
                            </Link>
                            <Link
                                to="#services"
                                className={`nav-item nav-link ${activeLink === 'services' ? 'active' : ''}`}
                                onClick={() => window.scrollTo({ top: servicesSection.offsetTop, behavior: 'smooth' })}
                            >
                                Services
                            </Link>
                            <Link
                                to="#contact"
                                className={`nav-item nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                                onClick={() => window.scrollTo({ top: contactSection.offsetTop, behavior: 'smooth' })}
                            >
                                Contact us
                            </Link>
                        </div>

                        {/* Your other component content */}
                    </div>

                    {
                        (authUser !== null) ? (
                            (authUser.isAnonymous === true) ?
                                (
                                    <li className="nav-item dropdown" id="loginGuestDD">
                                        <a className="nav-link dropdown-toggle fs-5 px-0" style={{ color: "#37249D" }} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Guest Login
                                        </a>
                                        <div className="dropdown-menu" style={{ right: "0", minWidth: "0", marginRight: "-26px", width: "150px" }}>
                                            <div className="text-center">
                                                <img className="mt-2 rounded-circle" src={guestImage} alt="profilePhoto" style={{ width: "50px", height: "48px", border: "3px solid #8f96d4" }} />
                                                <p className="mt-2 font-weight-bold">Guest Login</p>
                                            </div>
                                            <hr />
                                            <a onClick={(e) => { logOut(e) }} className="dropdown-item bg-transparent text-center linkhover" href="#" id="btnlogout"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faArrowRightFromBracket} />Logout</a>
                                        </div>
                                    </li>
                                ) : (
                                    <li className="nav-item dropdown" id="loginGuestDD">
                                        <a className="nav-link dropdown-toggle fs-5 px-0" style={{ color: "#37249D" }} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {authUser.displayName}
                                        </a>
                                        <div className="dropdown-menu" style={{ right: "0", minWidth: "0", marginRight: "-26px", width: "200px" }}>
                                            <div className="text-center">
                                                <img className="mt-2 rounded-circle" src={authUser.photoURL} alt="profilePhoto" style={{ width: "50px", height: "48px", border: "3px solid #8f96d4" }} />
                                                <p className="mt-2 font-weight-bold">{authUser.displayName}</p>
                                            </div>
                                            <hr />
                                            <div className="text-center">
                                                <Link to="/Liked" className="text-decoration-none text-capitalize linkhover"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faThumbsUp} />Liked Iterneries</Link><br /><br />
                                                <Link to="/Saved" className="text-decoration-none text-capitalize linkhover"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faBookmark} />Saved Trip Plans</Link>
                                            </div>
                                            <hr />
                                            <a onClick={(e) => { logOut(e) }} className="dropdown-item bg-transparent text-center linkhover" href="#" id="btnlogout"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faArrowRightFromBracket} />Logout</a>
                                        </div>
                                    </li>
                                )
                        ) :
                            (
                                <button type="button" ref={loginbtnRef} className="btn btn-outline-primary py-2 px-4 shadow-none" data-toggle="modal" data-target="#SignupSigninModal" data-backdrop="false">Login/Signup</button>
                            )
                    }

                </div>
            </nav>
            {/* Navigation bar ends */}
        </>
    )
}

export default Navbar