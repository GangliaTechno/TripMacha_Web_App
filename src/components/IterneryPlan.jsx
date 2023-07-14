import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faThumbsUp, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Iterneries from './Iterneries';

const IterneryPlan = () => {

  const [isHidden1, setIsHidden1] = useState(false);
  const [isHidden2, setIsHidden2] = useState(false);
  const [isHidden3, setIsHidden3] = useState(false);

  const [bgColor1, setBgColor1] = useState('white');
  const [bgColor2, setBgColor2] = useState('white');
  const [bgColor3, setBgColor3] = useState('white');

  const [txtColor1, setTxtColor1] = useState('black');
  const [txtColor2, setTxtColor2] = useState('black');
  const [txtColor3, setTxtColor3] = useState('black');

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
            <h6 className="section-title text-center px-3 fs-3" style={{ color: "#37249D" }}>Your Trip Iternaries</h6>
            <h2 className="mb-5">Here are the Iternaries for a quick trip plan</h2>
          </div>
          <div className="row g-4">

            <div className="col-lg-4 col-sm-6">
              <div className="iternery-item rounded pt-3" style={{backgroundColor: bgColor1, color: txtColor1}}
                onClick={() => {
                  if (bgColor1 == 'white') {
                    setTxtColor1('white');
                    setTxtColor2('black');
                    setTxtColor3('black');
                    setBgColor1('#37249D');
                    setBgColor2('white');
                    setBgColor3('white');
                  }
                  else {
                    setTxtColor1('black');
                    setTxtColor2('black');
                    setTxtColor3('black');
                    setBgColor1('white');
                    setBgColor2('white');
                    setBgColor3('white');
                  }
                  setIsHidden1(!isHidden1)
                  setIsHidden2(false)
                  setIsHidden3(false)
                }}>
                <div className="p-4">
                  <p className="text-center fs-5"><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;Iternery Plan:- 1</p>
                  <p className='text-center mt-4'>Places to visit: Temples, Beaches, Restaurant</p>
                  <div className='mb-4 mt-3'>
                    <hr />
                    <div className='float-right' onClick={liked}><FontAwesomeIcon icon={faThumbsUp} />&nbsp;&nbsp;Like</div>
                    <div className='float-left' onClick={saved}><FontAwesomeIcon icon={faBookmark} />&nbsp;&nbsp;Save Plan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="iternery-item rounded pt-3" style={{backgroundColor: bgColor2, color: txtColor2}}
                onClick={() => {
                  if (bgColor2 == 'white') {
                    setTxtColor1('black');
                    setTxtColor2('white');
                    setTxtColor3('black');
                    setBgColor1('white');
                    setBgColor2('#37249D');
                    setBgColor3('white');
                  }
                  else {
                    setTxtColor1('black');
                    setTxtColor2('black');
                    setTxtColor3('black');
                    setBgColor1('white');
                    setBgColor2('white');
                    setBgColor3('white');
                  }
                  setIsHidden1(false)
                  setIsHidden2(!isHidden2)
                  setIsHidden3(false)
                }}>
                <div className="p-4">
                  <p className="text-center fs-5"><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;Iternery Plan:- 2</p>
                  <p className='text-center mt-4'>Places to visit: Temples, Beaches, Restaurant</p>
                  <div className='mb-4 mt-3'>
                    <hr />
                    <div className='float-right'><span onClick={liked}><FontAwesomeIcon icon={faThumbsUp} />&nbsp;&nbsp;Like</span></div>
                    <div className='float-left' onClick={saved}><FontAwesomeIcon icon={faBookmark} />&nbsp;&nbsp;Save Plan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="iternery-item rounded pt-3" style={{backgroundColor: bgColor3, color: txtColor3}}
                onClick={() => {
                  if (bgColor3 == 'white') {
                    setTxtColor1('black');
                    setTxtColor2('black');
                    setTxtColor3('white');
                    setBgColor1('white');
                    setBgColor2('white');
                    setBgColor3('#37249D');
                  }
                  else {
                    setTxtColor1('black');
                    setTxtColor2('black');
                    setTxtColor3('black');
                    setBgColor1('white');
                    setBgColor2('white');
                    setBgColor3('white');
                  }
                  setIsHidden1(false)
                  setIsHidden2(false)
                  setIsHidden3(!isHidden3)
                }}>
                <div className="p-4">
                  <p className="text-center fs-5"><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;Iternery Plan:- 3</p>
                  <p className='text-center mt-4'>Places to visit: Temples, Beaches, Restaurant</p>
                  <hr />
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

      {isHidden1 && <Iterneries />}
      {isHidden2 && <Iterneries />}
      {isHidden3 && <Iterneries />}
    </>
  )
}

export default IterneryPlan