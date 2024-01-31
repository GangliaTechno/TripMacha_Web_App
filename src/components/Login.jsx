import React, { useEffect, useRef, useState } from 'react'
import guestImage from '../assets/img/user.png'
import { useAuth } from '../context/AuthContext'
import { auth, provider } from '../FirebaseConfig'
import { signInAnonymously, signInWithPopup } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const applenotify = () => toast.info('Feature Not supported yet.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    //When Login Clicked Username to be displayed 
    const {
        isLoggedIn,
        setIsLoggedIn,
        authUser,
        setAuthUser,
    } = useAuth();

    // Automatically closing the Login Modal
    const closebtnRef = useRef();
    const autoCloseClick = () => {
        closebtnRef.current.click();
    }

    //SignIn with Google user data
    const handleGoogleSignIn = async () => {

        if (!isLoggedIn) {
            try {
                const result = await signInWithPopup(auth, provider);
                setIsLoggedIn(true);
                //Storing Username and UserID in Session
                window.sessionStorage.setItem('authUser', JSON.stringify(result.user));
                setAuthUser(JSON.parse(window.sessionStorage.getItem('authUser')));
                autoCloseClick();
            }
            catch (error) {
                console.log(error)
            }
        }
    }

    //SignIn with Guest or Anonymous
    const handleAnonymousSignIn = async () => {

        if (!isLoggedIn) {
            try {
                const result = await signInAnonymously(auth);
                setIsLoggedIn(true);

                //For Popup after Clicking login as guest button
                toast.success('Logged In as Guest Successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                //Storing isAnonymousLogin and UserID in Session
                window.sessionStorage.setItem('authUser', JSON.stringify(result.user));
                setAuthUser(JSON.parse(window.sessionStorage.getItem('authUser')));
                autoCloseClick();
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <>
            <ToastContainer />
            {/* Login/Sign Up Modal Starts */}
            <div style={{ background: "rgba(0,0,0,0.5)" }} className="modal fade element" id="SignupSigninModal" tabIndex="-1" role="dialog" aria-labelledby="SignupSigninModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title w-100 text-center" id="exampleModalLongTitle">Login/SignUp</h4>
                            <button type="button" ref={closebtnRef} className="close" data-dismiss="modal" aria-label="Close"><i class="fa-solid fa-circle-xmark"></i>
                                {/* <span aria-hidden="true">&times;</span> */}
                            </button>
                        </div>
                        <div className="modal-body signin_modal">
                            <div className="social-login">
                                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_nc1bp7st.json" background="transparent" speed="1" style={{ width: "250px", height: "250px" }} loop autoplay></lottie-player>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mt-3">
                                    <a onClick={handleAnonymousSignIn} className="btn-lg btn-guest rounded-pill btn-block fs-6" href="#" id="btnGuest"><img src={guestImage} className="mb-1 me-2" />Continue as Guest</a>
                                </div>
                                <p className="loginOR mt-3">OR</p>
                                <p className='text-center'>For Better Experience, Login/SignUp</p>
                                <div className="col-md-12">
                                    <a onClick={handleGoogleSignIn} className="btn-lg btn-google rounded-pill btn-block fs-6" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 48 48" className="mb-1 me-2">
                                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        </svg>Sign in using Google
                                    </a>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <a onClick={applenotify} className="btn-lg btn-apple rounded-pill btn-block fs-6 my-3" href="#">
                                        <i class="fa-brands fa-apple fa-2xl"></i>
                                        <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                                        Sign in using Apple
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Login/Sign Up Modal Ends */}
        </>
    )
}

export default Login