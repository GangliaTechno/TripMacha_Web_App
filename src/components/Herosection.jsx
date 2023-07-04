import React from 'react'

const Herosection = () => {
    return (
        <>
            {/* hero section starts */}
            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5" >
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-13 pt-lg-5 mt-5 text-center home-text">
                            <h4 className="mb-3">We Guide and Care for your trip</h4>
                            <h2 className="mb-3">Travel, Enjoy and Live a new and full life</h2>
                            <p className="fs-5 mb-4">Welcome to our Tour Go website, where adventure awaits at your fingertips!.Plan your perfect getaway with ease using our user-friendly website Design your ideal itinerary and
                                make the most of your travels with our personalized trip planner.</p>
                            <p><a href="#about" className="btn btn-outline-warning shadow-none btn1"><span><i className='bx bx-search-alt me-2'></i></span>Find out More</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero section ends */}
        </>
    )
}

export default Herosection