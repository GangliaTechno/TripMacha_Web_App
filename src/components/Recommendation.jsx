import React from 'react'
import image1 from '../assets/img/image1.jpg'
import image2 from '../assets/img/image2.jpg'
import image3 from '../assets/img/image3.jpg'
import image4 from '../assets/img/image4.jpg'
import image5 from '../assets/img/image5.jpg'
import image6 from '../assets/img/image6.jpg'

const Recommendation = () => {

    return (
        <>
            {/* Recommendations Section Starts */}
            <div className="container-xxl py5 destination">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center px-3 fs-3" style={{color: "#37249D"}}>Recommendations</h6>
                        <h1 className="mb-5">Different Places Based On Current Location</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12">
                                    <a href="#" className="d-block position-relative overflow-hidden">
                                        <img src={image1} alt="Historical" className="img-fluid"></img>
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">Heritage Site</div>
                                    </a>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <a href="#" className="d-block position-relative overflow-hidden">
                                        <img src={image2} alt="Religious" className="img-fluid"></img>
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">Spiritual Center</div>
                                    </a>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <a href="#" className="d-block position-relative overflow-hidden">
                                        <img src={image3} alt="Beaches" className="img-fluid"></img>
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">Beaches</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6" style={{ minHeight: "350px" }}>
                            <a href="#" className="d-block position-relative h-100 overflow-hidden">
                                <img src={image4} alt="Adventure Park" className="img-fluid position-absolute w-100 h-100" style={{ objectFit: "cover" }}></img>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">Adventure Land</div>
                            </a>
                        </div>
                        <div className="col-lg-5 col-md-6" style={{ minHeight: "350px" }}>
                            <a href="#" className="d-block position-relative h-100 overflow-hidden">
                                <img src={image5} alt="Adventure Park" className="img-fluid position-absolute w-100 h-100" style={{ objectFit: "cover" }}></img>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">Amusement Park</div>
                            </a>
                        </div>
                        <div className="col-lg-5 col-md-6" style={{ minHeight: "350px" }}>
                            <a href="#" className="d-block position-relative h-100 overflow-hidden">
                                <img src={image6} alt="Adventure Park" className="img-fluid position-absolute w-100 h-100" style={{ objectFit: "cover" }}></img>
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">Museum Complex</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Recommendations Section Ends */}
        </>
    )
}

export default Recommendation