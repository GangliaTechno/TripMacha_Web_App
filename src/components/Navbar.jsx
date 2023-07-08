import React, { useEffect , useRef} from 'react'
import { useAuth } from '../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faClockRotateLeft, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const {
        isLoggedIn,
        setIsLoggedIn,
        authUser,
        setAuthUser
    } = useAuth();

    const logOut = (e) => {
        setAuthUser(null);
        window.sessionStorage.setItem('authUser', null);
        window.location.reload();
    }

    const loginbtnRef = useRef();
    const autoOpenClick = () => {
        loginbtnRef.current.click();
    }

    useEffect(() => {
        autoOpenClick();
        setAuthUser(JSON.parse(window.sessionStorage.getItem('authUser')))
    }, []);

    return (
        <>
            {/* Navigation bar starts */}
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="#home" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><span style={{ color: '#37249D' }}><i className="fa fa-map-marked-alt me-3"></i>Trip</span><span style={{ color: "red" }}>Macha</span></h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="#home" className="nav-item nav-link active">Home</a>
                        <a href="#recommendation" className="nav-item nav-link">Recommendations</a>
                        <a href="#services" className="nav-item nav-link">Services</a>
                        <a href="#contact" className="nav-item nav-link">Contact us</a>
                    </div>
                    {
                        (authUser) ? (
                            (authUser.isAnonymous === true) ?
                                (
                                    <li className="nav-item dropdown" id="loginGuestDD">
                                        <a className="nav-link dropdown-toggle fs-5 px-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Guest
                                        </a>
                                        <div className="dropdown-menu" style={{ right: "0", minWidth: "0", marginRight: "-26px", width: "103px" }}>
                                            <a onClick={(e) => { logOut(e) }} className="dropdown-item bg-transparent" href="#" id="btnlogout">Logout</a>
                                        </div>
                                    </li>
                                ) : (
                                    <li className="nav-item dropdown" id="loginGuestDD">
                                        <a className="nav-link dropdown-toggle fs-5 px-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {authUser.displayName}
                                        </a>
                                        <div className="dropdown-menu" style={{ right: "0", minWidth: "0", marginRight: "-26px", width: "200px" }}>
                                            <div className="text-center">
                                                <img className="mt-2 rounded-circle" src={authUser.photoURL} alt="profilePhoto" style={{ width: "50px", height: "48px", border: "3px solid #8f96d4" }} />
                                                <p className="mt-2 font-weight-bold">{authUser.displayName}</p>
                                            </div>
                                            <hr />
                                            <div className="text-center">
                                                <a href="#" className="text-decoration-none text-capitalize linkhover"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faThumbsUp} />Liked Iternery</a><br /><br />
                                                <a href="#" className="text-decoration-none text-capitalize linkhover"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faClockRotateLeft} />Saved History</a>
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