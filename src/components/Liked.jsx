import React, { useState } from 'react'
import LikedIterneries from './LikedIterneries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faClockRotateLeft, faClock } from '@fortawesome/free-solid-svg-icons'

const Liked = () => {

    const [timeStamp, setTimeStamp] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    const [isHidden1, setIsHidden1] = useState(false);
    const [bgColor1, setBgColor1] = useState('white');
    const [txtColor1, setTxtColor1] = useState('black');
    return (
        <>
            {/* Liked Iternery Section Starts */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title text-center px-3 fs-3" style={{ color: "#37249D" }}>Your Liked Trip Plan</h6>
                        <h2 className="mb-5">Here are the Iternaries which you liked</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-sm-6">
                            <div className="iternery-item rounded pt-3" style={{ backgroundColor: bgColor1, color: txtColor1 }}
                                onClick={() => {
                                    if (bgColor1 == 'white') {
                                        setTxtColor1('white');
                                        setBgColor1('#37249D');
                                    }
                                    else {
                                        setTxtColor1('black');
                                        setBgColor1('white');
                                    }
                                    setIsHidden1(!isHidden1)
                                }
                                }>
                                <div className="p-4">
                                    <p className="text-center fs-5"><FontAwesomeIcon icon={faListCheck} />&nbsp;&nbsp;Iternery Plan</p>
                                    <p className='text-center mt-4'><FontAwesomeIcon icon={faClockRotateLeft} />&nbsp;&nbsp;Plan Created on:-&nbsp;<span>18-07-2023</span></p>
                                    <p className='text-center mt-4'><FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;Time Reference:-&nbsp;<span>{timeStamp}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Liked Iternary Section Ends */}
            {isHidden1 && <LikedIterneries />}
        </>
    )
}

export default Liked