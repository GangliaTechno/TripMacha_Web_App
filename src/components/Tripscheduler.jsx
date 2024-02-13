import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import { useAuth } from '../context/AuthContext';

const Tripscheduler = () => {

    const {
        setUserFromTime,
        setUserPlaceName,
        setUserToTime,
        setUserWithinRadius,

        setResponse1,
        setResponse2,
        setResponse3
    } = useAuth()


    const handleSubmit = async () => {
        try {
            const url = 'http://127.0.0.1:8000/mltravel';
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const data = {
                place: placeName,
                start_time: fromTime,
                end_time: toTime,
                distance: radius
            };
            console.log(JSON.stringify(data));
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            return responseData

        } catch (error) {
            console.error('Error:', error);
        }
    };


    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [placeName, setPlaceName] = useState('');
    const [radius, setRadius] = useState('');

    const [currentDate, setCurrentDate] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');
    const [duration, setDuration] = useState('');

    const [error, setError] = useState(null);

    /* On Page Load Location will be populated in Location TextBox Starts */
    useEffect(() => {

        const successCallback = (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        };

        const errorCallback = (error) => {
            setError(error.message);
        };

        const formattedDate = new Date().toISOString().split('T')[0];
        setCurrentDate(formattedDate);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        }
        else {
            setError('Geolocation is not supported by this browser.');
        }

    }, []);
    /* On Page Load Location will be populated in Location TextBox Ends */

    /* On Page Load Current Date/Radius will be populated in Date/Radius TextBox Starts */
    useEffect(() => {

        const currentDateTime = new Date();
        const formattedFromTime = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        setFromTime(formattedFromTime);
        setToTime(formattedFromTime);

        const radius = "10";
        setRadius(radius)

    }, []);
    /* On Page Load Current Date/Radius will be populated in Date/Radius TextBox Ends */


    const handleTimeChange = (e) => {
        if (e.target.id === 'ftime') {
            setFromTime(e.target.value);
            setUserFromTime(e.target.value);
        }
        else if (e.target.id === 'ttime') {
            setToTime(e.target.value);
            setUserToTime(e.target.value);
        }
    };

    /* On Page Load / on Change of Time Field Current Time & Duration will be populated in Time TextBox Starts */
    useEffect(() => {
        const calculateDuration = () => {
            const start = new Date(`2000/01/01 ${fromTime}`);
            const end = new Date(`2000/01/01 ${toTime}`);
            if (start <= end) {
                const durationInMilliseconds = Math.abs(end - start);
                const durationInMinutes = Math.floor(durationInMilliseconds / 60000);
                const durationInHours = durationInMinutes / 60;
                const hours = Math.floor(durationInHours);
                const minutes = Math.round((durationInHours - hours) * 60);
                const result = hours + " Hour, " + minutes + " Minutes";
                setDuration(result);
            }
            else {
                alert("From Time should be Less Than To Time!");
                const currentDateTime = new Date();
                const formattedFromTime = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
                setFromTime(formattedFromTime);
                setToTime(formattedFromTime);
            }

        };
        calculateDuration();
    }, [fromTime, toTime]);
    /* On Page Load / on Change of Time Field Current Time & Duration will be populated in Time TextBox Ends */

    /* On change of Location Textbox Autocomplete Suggestion of places Starts */
    useEffect(() => {

        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        );

        // Textbox data was getting reset when other components were clicked, so wrote this code
        window.google.maps.event.addListener(autoCompleteRef.current, 'place_changed', () => {
            var cityName = ''
            var stateName = ''
            var address_components = autoCompleteRef.current.getPlace().address_components
            for (let i = 0; i < address_components.length; i++) {
                if (address_components[i].types.includes("locality")) {
                    cityName = address_components[i].long_name;
                }
                else if (address_components[i].types.includes("administrative_area_level_1")) {
                    stateName = address_components[i].long_name;
                }
            }
            var locate = cityName + ", " + stateName;

            setPlaceName(locate);
            setUserPlaceName(locate);
        })

        if (latitude && longitude) {
            const apiKey = 'AIzaSyDMWSgHTmFD9UdPTYIvLkXww_eyRdI5ggA';
            const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

            axios
                .get(apiUrl)
                .then((response) => {
                    if (response.data.results.length > 0) {
                        const addressComponents = response.data.results[0].address_components;
                        var cityName = "";
                        var stateName = "";
                        var pincode = "";
                        for (let i = 0; i < addressComponents.length; i++) {
                            const types = addressComponents[i].types;
                            if (addressComponents[i].types.includes("locality")) {
                                cityName = addressComponents[i].long_name;
                            }
                            else if (addressComponents[i].types.includes("administrative_area_level_1")) {
                                stateName = addressComponents[i].long_name;
                            }
                            else if (addressComponents[i].types.includes("postal_code")) {
                                pincode = addressComponents[i].long_name;
                            }
                        }
                        var locate = cityName + ", " + stateName + " - " + pincode;

                        setPlaceName(locate);
                    }
                    else {
                        setPlaceName('Location data not found');
                    }
                })
                .catch((error) => {
                    setError('Error fetching location data');
                });
        }
    }, [latitude, longitude]);

    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const options = {
        componentRestrictions: { country: "in" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ['(cities)']
    };
    /* On change of Location Textbox Autocomplete Suggestion of places Ends */


    return (
        <>
            {/* Scheduler Section Starts */}
            <div>
                <div className="container" style={{ marginLeft: "0px", marginRight: "0px", paddingLeft: "0px", paddingRight: "0px", maxWidth: "100%" }}>
                    <div className="scheduler p-5 mt-md-0" style={{ marginTop: "-100px" }}>
                        <div className="row g-5 align-items-center">
                            <div className="col-md-6">
                                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_IzOUkXgvK9.json" style={{ marginTop: "50px" }} background="transparent" speed="1" loop autoplay></lottie-player>
                            </div>
                            <div className="col-md-6">
                                <h1 className="text-white mb-4 text-center">Schedule a Trip Plan</h1>
                                <form action="">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent shadow-none text-white"
                                                    id="location"
                                                    placeholder="Location"
                                                    ref={inputRef}
                                                    value={placeName}
                                                    onChange={(e) => {
                                                        setPlaceName(e.target.value)
                                                        setUserPlaceName(e.target.value)
                                                    }}
                                                ></input>
                                                <label htmlFor="location" className="text-white fradius">Location</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="string"
                                                    className="form-control bg-transparent shadow-none text-white"
                                                    id="radius"
                                                    value={radius}
                                                    onChange={(e) => {
                                                        setRadius(e.target.value)
                                                        setUserWithinRadius(e.target.value)
                                                    }
                                                    }
                                                    placeholder="Within distance"
                                                    max="60"
                                                    min="10"
                                                ></input>
                                                <label htmlFor="radius" className="text-white fradius">Within the Radius of (Km)</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="date"
                                                    className="form-control bg-transparent shadow-none text-white"
                                                    id="fdate"
                                                    placeholder="Current Date"
                                                    value={currentDate}
                                                    onChange={(e) => {
                                                        setCurrentDate(e.target.value)
                                                    }}
                                                ></input>
                                                <label htmlFor="fdate" className="text-white fradius">Current Date</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="time"
                                                    className="form-control bg-transparent shadow-none text-white"
                                                    id="ftime"
                                                    placeholder="From Timings"
                                                    value={fromTime}
                                                    onChange={handleTimeChange}
                                                ></input>
                                                <label htmlFor="ftime" className="text-white fradius">From Timings</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="time"
                                                    className="form-control bg-transparent shadow-none text-white"
                                                    id="ttime"
                                                    placeholder="To Timings"
                                                    value={toTime}
                                                    onChange={handleTimeChange}
                                                ></input>
                                                <label htmlFor="ttime" className="text-white fradius">To Timings</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className=" form-control bg-transparent shadow-none text-white"
                                                    id="duration"
                                                    placeholder="Duration(in minutes)"
                                                    value={duration}
                                                    disabled
                                                >
                                                </input>
                                                <label htmlFor="duration" className="text-white">Duration</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <Link to='/Tripscheduler'>
                                                <button
                                                    className="btn btn-outline-light w-100 py-3 shadow-none"
                                                    type="submit"
                                                    id="btnlocate"
                                                    onClick={async () => {
                                                        let r1 = await handleSubmit().then((data) => { return JSON.stringify(data) })
                                                        setResponse1(JSON.parse(JSON.parse(r1)))
                                                        let r2 = await handleSubmit().then((data) => { return JSON.stringify(data) })
                                                        setResponse2(JSON.parse(JSON.parse(r2)))
                                                        let r3 = await handleSubmit().then((data) => { return JSON.stringify(data) })
                                                        setResponse3(JSON.parse(JSON.parse(r3)))

                                                        // setResponse2(handleSubmit().then((data)=>{return data}))
                                                        // setResponse3(handleSubmit().then((data)=>{return data}))
                                                    }
                                                    }
                                                >Locate Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scheduler Section Ends */}
        </>
    )
}

export default Tripscheduler

