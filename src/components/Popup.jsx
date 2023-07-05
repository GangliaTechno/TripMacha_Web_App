import React from 'react'
import popImage from '../assets/img/checkmark--outline.svg'

const Popup = () => {

    return (
        <>
            {/* Pop Up Starts */}
            <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100">
                <div className="toast-body toast-body-centered popup">
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_ctvgysft.json" background="transparent" speed="1" style={{ width: "300px", height: "240px" }} loop autoplay></lottie-player>
                    <h2>Thank You</h2>
                    <p>Your Message has been sent successfully!</p>
                </div>
            </div>
            {/* Pop Up Ends */}
        </>
    )
}

export default Popup