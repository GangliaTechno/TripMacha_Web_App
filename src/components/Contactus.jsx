import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Popup from './Popup';

const Contactus = () => {
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const feedbackurl = 'http://127.0.0.1:8000/feedback';
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const data = {
                name: userName,
                email: userMail,
                subject: userSubject,
                messageContent: userMessage
            };
            console.log(JSON.stringify(data));
            const response = await fetch(feedbackurl, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            console.log(responseData);

            setIsAlertVisible(true);

            setUserName('');
            setUserMail('');
            setUserSubject('');
            setUserMessage('');

            setTimeout(() => {
                setIsAlertVisible(false);
            }, 1500);
            
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [userName, setUserName] = React.useState('');
    const [userMail, setUserMail] = React.useState('');
    const [userSubject, setUserSubject] = React.useState('');
    const [userMessage, setUserMessage] = React.useState('');
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
                                <form ref={form} onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent shadow-none text-white" id="name" name="userName" placeholder="Your name" required autoComplete='on' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                                                <label htmlFor="name" className="text-white">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control bg-transparent shadow-none text-white" id="mailID" name="mailId" placeholder="Your Contact Number" required autoComplete='on' value={userMail} onChange={(e) => setUserMail(e.target.value)}/>
                                                <label htmlFor="mailID" className="text-white">Your Email-ID</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent shadow-none text-white" id="subject" name="subject" placeholder="Subject" required autoComplete='on' value={userSubject} onChange={(e) => setUserSubject(e.target.value)}/>
                                                <label htmlFor="subject" className="text-white">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent shadow-none text-white" placeholder="Special Request" name="message" id="message" style={{ height: "100px" }} required autoComplete='on' value={userMessage} onChange={(e) => setUserMessage(e.target.value)}></textarea>
                                                <label htmlFor="message" className="text-white">Write message here...</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-outline-light w-100 py-3 shadow-none" type="submit">
                                                Send Message
                                            </button>
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
    );
};

export default Contactus;
