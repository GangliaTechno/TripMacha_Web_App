import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext';



const Iterneries = (props) => {
    const {
        authUser,

        userPlaceName,
        userWithinRadius,
        userFromTime,
        userToTime,
        setUserPlaceName,
        setUserWithinRadius,
        setUserFromTime,
        setUserToTime,

        response1,
        response2,
        response3,
    } = useAuth();

    useEffect(() => { 
        if (response1)
            console.log(JSON.stringify(response1))
    }, [response1])

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // const placeName = require("./Tripscheduler.js");

    return (
        <>
            <h6 className="bg-white text-center px-3 fs-3 mt-5" style={{ color: "#37249D" }}>Quick Iternery Plan</h6>
            <h2 className="mb-5 text-center">Here is your iternery plans</h2>
            <div className="container py-5">
                <div className="main-timeline-4 text-white" style={{ content: null }}>
                    {
                        response1 !== null ?
                            response1.plan.map((place, index) => (
                                <div className={`timeline-4 ${index % 2 === 0 ? 'left-4' : 'right-4'}`} key={index}>
                                    <div className="card">
                                        <div className="card-body p-4 gradient-custom">
                                            <h4>Place: <span>{place === null ? "NULL" : capitalizeFirstLetter(place.location)}</span></h4>
                                            Timings: <span className="badge badge-dark mt-3 p-2">{place === null ? "NULL" : place.time}</span>
                                            <p className="mt-3">Activity: <span>{place === null ? "NULL" : capitalizeFirstLetter(place.activity)}</span></p>
                                            <p>Distance: <span>{place === null ? "NULL" : place.distance}</span></p>
                                            <p>Travel-Time: <span>{place === null ? "NULL" : place["travel time"]}</span></p>
                                            <a className="btn" style={{ backgroundColor: "white", color: "black" }} href={"https://www.google.com/maps/search/" + place.location} target='_blank' role="button">Open in Maps</a>
                                        </div>
                                    </div>
                                </div>
                            )) : <h2 style={{ color: "black", textAlign: "center"}} >Generating plan...</h2>
                    }
                </div>
            </div>
        </>
    )
}






export default Iterneries

