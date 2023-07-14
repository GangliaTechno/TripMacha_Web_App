import React from 'react'

const Services = () => {
    return (
        <>
            {/* Services Section Starts */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center px-3 fs-3" style={{color: "#37249D"}}>Services</h6>
                        <h2 className="mb-5">We Offer Our Best Services To Plan Your Trip</h2>
                    </div>
                    <div className="row g-4">

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-location-dot text-primary mb-4"></i>
                                    <h5>Convenient Trip Planning</h5>
                                    <p>Perfectly utilize your free time by planning your trip with us</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-gears text-primary mb-4"></i>
                                    <h5>Place Recommendations</h5>
                                    <p>Recommends you with best places to visit in short amount of time</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-compass-drafting text-primary mb-4"></i>
                                    <h5>Location using Google Map</h5>
                                    <p>Accurate and Best places recommended using google maps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services Section Ends */}
        </>
    )
}

export default Services