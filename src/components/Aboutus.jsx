import React from 'react'

const Aboutus = () => {
    return (
        <>
            {/* About Section starts */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6" style={{ minHeight: "400px" }}>
                            <div className="position-relative h-100">
                                <lottie-player style={{ objectFit:"cover",width: "400px",height: "400px"}} className="img-fluid position-absolute w-100 h-100" src="https://assets10.lottiefiles.com/packages/lf20_IzOUkXgvK9.json" background="transparent" speed="1" loop autoplay></lottie-player>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="section-title bg-white text-start text-primary pe-3 fs-3">About Us</h6>
                            <h1 className="mb-4">Welcome to <span style={{ color: "#37249D" }}>Tour</span><span style={{ color: "red" }}>Go.</span></h1>
                            <p className="mb-4">The ultimate destination for turning your travel dreams into reality. Whether you're an avid explorer seeking thrilling adventures or a leisure traveler in search of relaxation, our comprehensive trip planner has all the tools you need to plan the perfect getaway</p>
                            <p className="mb-4">At our Tour Go website, we believe that planning your journey should be as enjoyable as the adventure itself. That's why we've designed our platform to be both efficient and inspiring, allowing you to dive into the excitement of travel planning with ease. Begin by exploring a curated collection of popular destinations or let your wanderlust take you off the beaten path with our hidden gems section</p>

                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Accurate Trip Planning</p>
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Best Place Recommendations</p>
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Location using Google Map</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section Ends */}
        </>
    )
}

export default Aboutus