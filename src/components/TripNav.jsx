import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowRightFromBracket, faBookmark } from '@fortawesome/free-solid-svg-icons';
import guestImage from '../assets/img/guest.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TripNav = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

    const handleScroll = () => {
        setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const determineActiveLink = () => {
        const homeSection = document.getElementById('home');
        const recommendationSection = document.getElementById('recommendation');
        const servicesSection = document.getElementById('services');
        const contactSection = document.getElementById('contact');

        if (homeSection && recommendationSection && servicesSection && contactSection) {
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
            }
        }

        return '';
    };

    useEffect(() => {
        const active = determineActiveLink();
        setActiveLink(active);
    }, [scrollPosition]);

    const { authUser, setAuthUser } = useAuth();

    const logOut = (e) => {
        toast('Logged Out Successfully!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
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

    const loginbtnRef = useRef();
    const autoOpenClick = () => {
        loginbtnRef.current.click();
    }

    useEffect(() => {
        if (authUser !== null) {
            console.log("Already Logged In")
        } else {
            autoOpenClick();
        }
    }, []);

    return (
        <>
            <ToastContainer />
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
                                to="/"
                                id="a"
                                className={`nav-item nav-link ${activeLink === 'home' ? 'active' : ''} text-white`}
                                onClick={() => scrollToSection(null, 'home')}
                            >
                                Home
                            </Link>
                            <Link
                                to="/#recommendation"
                                className={`nav-item nav-link ${activeLink === 'recommendation' ? 'active' : ''}`}
                                onClick={() => scrollToSection(recommendation, 'recommendation')}
                            >
                                Recommendations
                            </Link>
                            <Link
                                to="/#services"
                                className={`nav-item nav-link ${activeLink === 'services' ? 'active' : ''}`}
                                onClick={() => scrollToSection(services, 'services')}
                            >
                                Services
                            </Link>
                            <Link
                                to="/#contact"
                                className={`nav-item nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                                onClick={() => scrollToSection(contact, 'contact')}
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
        </>
    )
}

export default TripNav;
