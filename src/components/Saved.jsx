import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

const Liked = () => {
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
                            <div className="iternery-item rounded pt-3" style={{ backgroundColor: "white", color: "black" }}>
                                <div className="p-4">
                                    <p className="text-center fs-5"><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;Iternery Plan:- 1</p>
                                    <p className='text-center mt-4'>Places to visit: Temples, Beaches, Restaurant</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="iternery-item rounded pt-3" style={{ backgroundColor: "white", color: "black" }}>
                                <div className="p-4">
                                    <p className="text-center fs-5"><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;Iternery Plan:- 2</p>
                                    <p className='text-center mt-4'>Places to visit: Temples, Beaches, Restaurant</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="iternery-item rounded pt-3" style={{ backgroundColor: "white", color: "black" }}>
                                <div className="p-4">
                                    <p className="text-center fs-5"><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;Iternery Plan:- 3</p>
                                    <p className='text-center mt-4'>Places to visit: Temples, Beaches, Restaurant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Saved Iternary Section Ends */}
        </>
    )
}

export default Liked