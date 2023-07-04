import React from 'react'

const Topbar = () => {
    return (
        <>
            {/* Top bar Starts */}
            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
                            <small className="me-3 text-light topbar"><i className="fa fa-map-marked-alt me-2"></i>1<sup>st</sup> Floor, Bio Incubator, Manipal, Udupi, Karnataka, India - 576104</small>
                            <small className="me-3 text-light topbar"><i className="fa fa-phone-alt me-2"></i>+91-9449584493</small>
                            <small className="me-3 text-light topbar"><i className="fa fa-envelope me-2"></i>director@ganglia.in</small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
                            <a href="#" target="_blank" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2 shadow-none"><i className="fab fa-facebook fw-normal"></i></a>
                            <a href="https://www.linkedin.com/in/ganglia-technologies-973684278" target="_blank" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2 shadow-none"><i className="fab fa-linkedin-in fw-normal"></i></a>
                            <a href="#" target="_blank" className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2 shadow-none"><i className="fab fa-twitter fw-normal"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top bar Ends */}
        </>
    )
}

export default Topbar