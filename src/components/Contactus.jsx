import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Popup from './Popup';

const Contactus = () => {

    const form = useRef();

    const [isAlertVisible, setIsAlertVisible] = React.useState(false);

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        setIsAlertVisible(true);
        emailjs.sendForm('service_grunjk2', 'template_cfqe51l', form.current, '61z7u9vAr-SLueDvd')
            .then((result) => {
                // show the user a success message

                form.current.formName.value="";
                form.current.mailId.value="";
                form.current.subject.value="";
                form.current.message.value="";
                setTimeout(() => {
                    setIsAlertVisible(false);
                }, 1500);
            }, (error) => {
                // show the user an error
            });
    };

    return (
        <>
            {/* Contact us Section starts */}
            <div className="container-xxl py5">
                <div className="container">
                    <div className="contact p-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-6 text-white">
                                <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_vrcurbxk.json" background="transparent" speed="1" loop autoplay></lottie-player>
                            </div>
                            <div className="col-md-6">
                                <h1 className="text-white mb-4 text-center">Contact Us</h1>
                                <p className="text-white mb-4 text-center">Please Feel Free To Tell Us What You Think About Our Website Or Suggest Any Changes. We Value Your Feedback, Please Fill The Below Form To Provide Feedback /Any Queries.</p>
                                <form action="" ref={form} onSubmit={sendEmail}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent shadow-none text-white" id="name" name="formName" placeholder="Your name" required/>
                                                <label htmlFor="name" className="text-white">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control bg-transparent shadow-none text-white" id="mailID" name="mailId" placeholder="Your Contact Number" required/>
                                                <label htmlFor="phone" className="text-white">Your Email-ID</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent shadow-none text-white" id="subject" name="subject" placeholder="Your Email-ID" required/>
                                                <label htmlFor="email" className="text-white">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent shadow-none text-white" placeholder="Special Request" name="message" id="message" style={{ height: "100px" }} required></textarea>
                                                <label htmlFor="message" className="text-white">Write message here...</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-outline-light w-100 py-3 shadow-none" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact us Section Ends */}
            {/* Pop Up Starts */}
            {isAlertVisible && <Popup />}
            {/* Pop Up Ends */}
        </>
    )
}

export default Contactus