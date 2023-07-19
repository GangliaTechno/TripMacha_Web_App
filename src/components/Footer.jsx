import React from 'react'
import googleImage from '../assets/img/Google Play.png'
import appleImage from '../assets/img/Play Store.png'

const Footer = () => {
    return (
        <>
            {/* Footer Section starts */}
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Company</h4>
                            <a href="https://www.ganglia.in/about-1" target="_blank" className="btn btn-link shadow-none">About us</a>
                            <a href="https://www.ganglia.in/" target="_blank" className="btn btn-link shadow-none">Contact Us</a>
                            <a href="#" className="btn btn-link shadow-none" target="_blank">Privacy Policy</a>
                            <a href="src\components\Terms_and_Condition.html" className="btn btn-link shadow-none" target="_blank">Terms & Condition</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-2"></i>1<sup>st</sup> Floor, Bio Incubator, Manipal, Udupi, Karnataka, India - 576104</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-2"></i>+91-9449584493</p>
                            <p className="mb-2"><i className="fa fa-envelope me-2"></i>director@ganglia.in</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Get in touch with us</h4>
                            <div className="row g-2 pt-2">
                                <div className="col-3">
                                    <a href="https://wa.me/9449584493" target="_blank" className="btn btn-outline-light btn-social-watsapp shadow-none"><i className="fa-brands fa-whatsapp"></i></a>
                                </div>
                                <div className="col-3">
                                    <a href="#" target="_blank" className="btn btn-outline-light btn-social shadow-none"><i className="fab fa-twitter"></i></a>
                                </div>
                                <div className="col-3">
                                    <a href="https://www.facebook.com/people/Ganglia-Technologies/100094390417846/?mibextid=ZbWKwL" target="_blank" className="btn btn-outline-light btn-social shadow-none"><i className="fab fa-facebook"></i></a>
                                </div>
                                <div className="col-3">
                                    <a href="https://www.linkedin.com/in/ganglia-technologies-973684278" target="_blank" className="btn btn-outline-light btn-social shadow-none"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Discover Our app</h4>
                            <div className="row g-2 pt-2">
                                <div className="col-7">
                                    <a href="#" target="_blank" className="glink shadow-none"><img src={googleImage} width="150px" height="65px" alt="Google Play Store" /></a>
                                </div>
                                <div className="col-7">
                                    <a href="#" target="_blank" className="glink shadow-none"><img src={appleImage} style={{ backgroundColor: "white", borderRadius: "6px", marginLeft: "9px", border: "1px solid grey" }} width="133px" height="43px" alt="App Store" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">Copyright &copy; 2023 @ Ganglia Technologies | Right Reserved.</div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href="#home" className="flink shadow-none">Home</a>
                                    <a href="https://www.ganglia.in/" target="_blank" className="flink shadow-none">Queries</a>
                                    <a href="#services" className="flink shadow-none">Services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Section Ends */}
        </>
    )
}

export default Footer