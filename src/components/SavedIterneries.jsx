import React from 'react'

const SavedIterneries = () => {
    return (
        <>
            <h6 className="bg-white text-center px-3 fs-3 mt-5" style={{ color: "#37249D" }}>Iternery Plan</h6>
            <h2 className="mb-5 text-center">Here are the Iternery Details</h2>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8 offset-md-4">
                        <ul className="timeline-3">
                            <li>
                                <h4><span>Udupi Sri krishna matha</span></h4>
                                <span className="text-muted">6:00 AM - 7:00 AM</span>
                                <p className="text-muted mt-2 mb-1">Activity: <span>Visit the temple and witness the morning rituals</span></p>
                                <p className="text-muted mb-1">Distance: <span>1 km</span></p>
                                <p className="text-muted">Travel-Time: <span>5 minutes</span></p>
                            </li>
                            <li>
                                <h4><span>Malpe Beach</span></h4>
                                <span className="text-muted">7:05 AM - 8:00 AM</span>
                                <p className="mt-2 mb-1 text-muted">Activity: <span>Enjoy the early morning beach walk</span></p>
                                <p className="text-muted mb-1">Distance: <span>4 km</span></p>
                                <p className="text-muted mb-1">Travel-Time: <span>15 minutes</span></p>
                            </li>
                            <li>
                                <h4><span>Woodlands Restaurant</span></h4>
                                <span className="text-muted">8:20 AM - 9:15 AM</span>
                                <p className="mt-2 mb-1 text-muted">Activity: <span>Have a Good breakfast</span></p>
                                <p className="text-muted mb-1">Distance: <span>2 km</span></p>
                                <p className="text-muted">Travel-Time: <span>10 minutes</span></p>
                            </li>
                            <li>
                                <h4><span>Kaup lighthouse</span></h4>
                                <span className="text-muted">9:45 AM - 10:45 AM</span>
                                <p className="mt-2 mb-1 text-muted">Activity: <span>Climb up the lighthouse for a scenic view</span></p>
                                <p className="text-muted mb-1">Distance: <span>1 km</span></p>
                                <p className="text-muted">Travel-Time: <span>5 minutes</span></p>
                            </li>
                            <li>
                                <h4><span>Manipal End point</span></h4>
                                <span className="text-muted">6:00 AM - 7:00 AM</span>
                                <p className="mt-2 mb-1 text-muted">Activity: <span>Take a stroll and enjoy the beautiful views</span></p>
                                <p className="text-muted mb-1">Distance: <span>8 km</span></p>
                                <p className="text-muted">Travel-Time: <span>20 minutes</span></p>
                            </li>
                            <li>
                                <h4><span>Diana Restaurant</span></h4>
                                <span className="text-muted">12:20 PM - 1:20 PM</span>
                                <p className="mt-2 mb-1 text-muted">Activity: <span>Have a Good and Healthy Lunch</span></p>
                                <p className="text-muted mb-1">Distance: <span>2 km</span></p>
                                <p className="text-muted">Travel-Time: <span>10 minutes</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SavedIterneries