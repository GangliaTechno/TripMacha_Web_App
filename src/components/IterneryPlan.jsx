import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faThumbsUp, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IterneryPlan = () => {

  //To Like the Iternery Plans
  const liked = () => {
    toast('Iternery Plan Liked!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  //To Save the Iternery plans
  const saved = () => {
    toast('Iternery Saved!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  return (
    <>
      <ToastContainer />
      {/* Iternery Section Starts */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3 fs-3">Your Trip Iternaries</h6>
            <h2 className="mb-5">Here are the Iternaries for a quick trip plan</h2>
          </div>
          <div className="row g-4">

            <div className="col-lg-4 col-sm-6">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <p className="text-center fs-5"><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;Iternery Plan:- 1</p>
                  <p className='text-center mt-4'>Places to visit: Temples, Beaches, Restaurant</p>
                  <div className='mb-4 mt-3'>
                    <div className='float-right' onClick={liked}><FontAwesomeIcon icon={faThumbsUp} />&nbsp;&nbsp;Like</div>
                    <div className='float-left' onClick={saved}><FontAwesomeIcon icon={faBookmark} />&nbsp;&nbsp;Save Plan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <p className="text-center fs-5"><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;Iternery Plan:- 2</p>
                  <p className='text-center mt-4'>Places to visit: Temples, Beaches, Restaurant</p>
                  <div className='mb-4 mt-3'>
                    <div className='float-right' onClick={liked}><FontAwesomeIcon icon={faThumbsUp} />&nbsp;&nbsp;Like</div>
                    <div className='float-left' onClick={saved}><FontAwesomeIcon icon={faBookmark} />&nbsp;&nbsp;Save Plan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <p className="text-center fs-5"><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;Iternery Plan:- 3</p>
                  <p className='text-center mt-4'>Places to visit: Temples, Beaches, Restaurant</p>
                  <div className='mb-4 mt-3'>
                    <div className='float-right' onClick={liked}><FontAwesomeIcon icon={faThumbsUp} />&nbsp;&nbsp;Like</div>
                    <div className='float-left' onClick={saved}><FontAwesomeIcon icon={faBookmark} />&nbsp;&nbsp;Save Plan</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Iternary Section Ends */}
    </>
  )
}

export default IterneryPlan