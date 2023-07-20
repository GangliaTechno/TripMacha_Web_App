import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faClockRotateLeft, faClock } from '@fortawesome/free-solid-svg-icons'
import SavedIterneries from './SavedIterneries';

const Liked = () => {
    const [timeStamp, setTimeStamp] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    const [isHidden, setIsHidden] = useState(false);
    const [bgColor, setBgColor] = useState('white');
    const [txtColor, setTxtColor] = useState('black');

    return (
        <>
            <ToastContainer />
            {/* Saved Iternery Section Starts */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title text-center px-3 fs-3" style={{ color: "#37249D" }}>Your Saved Trip Plan</h6>
                        <h2 className="mb-5">Here are the Iternaries which you Saved</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-sm-6">
                            <div className="iternery-item rounded pt-3" style={{ backgroundColor: bgColor, color: txtColor }}
                                onClick={() => {
                                    if (bgColor == 'white') {
                                        setTxtColor('white');
                                        setBgColor('#37249D');
                                    }
                                    else {
                                        setTxtColor('black');
                                        setBgColor('white');
                                    }
                                    setIsHidden(!isHidden)
                                }
                                }>
                                <div className="p-4">
                                    <p className="text-center fs-5"><FontAwesomeIcon icon={faListCheck} />&nbsp;&nbsp;Iternery Plan</p>
                                    <p className='text-center mt-4'><FontAwesomeIcon icon={faClockRotateLeft} />&nbsp;&nbsp;Plan Saved on:-&nbsp;<span>18-07-2023</span></p>
                                    <p className='text-center mt-4'><FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;Time Reference:-&nbsp;<span>{timeStamp}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Saved Iternary Section Ends */}
            {isHidden && <SavedIterneries />}
        </>
    )
}

export default Liked