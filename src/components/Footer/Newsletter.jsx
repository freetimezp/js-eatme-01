import React, {useState, useRef, useEffect} from 'react';

import SubHeading from  '../SubHeading/SubHeading';
import emailjs from "@emailjs/browser";

import './Newsletter.css';

const Newsletter = () => {
    const [userEmail, setUserEmail] = useState('');

    const refEmail = useRef();
    const refMessage = useRef();

    useEffect(() => {
        const elEmail = refEmail.current;
        const elMessage = refMessage.current;
    }, []);

    const sendMail = (e) => {
        e.preventDefault();

        //console.log(refEmail.current);

        if(refEmail.current.value === '') {
            //console.log('error');
            refMessage.current.className = 'color-red';
            refMessage.current.textContent = 'Please write your email..';
        }else{
            emailjs.sendForm('service_lqpyxd1', 'template_3ty9whb', '#contact-form', 'kk5oM2vPMYsBD367x')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                    console.log('FAILED...', err);
                });

            //console.log(refEmail.current);
            refMessage.current.className = 'color-green';
            refMessage.current.textContent = 'Hello! New Subscriber!';

            setTimeout(() => {
                setUserEmail('');
                refMessage.current.textContent = '';
            }, 5000)
        }
    }

    return (
        <div className="app__newsletter">
            <div className="app__newsletter-heading">
                <SubHeading title="Newsletter" />
                <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
                <p className="p__opensans">And never miss latest Updates!</p>
            </div>
            <form className="app__newsletter-input flex__center" id="contact-form" onSubmit={sendMail}>
                <input
                    type="email" placeholder="Enter your email" name="user_email" id="contact-email"
                    onChange={(e) => setUserEmail(e.target.value)}
                    ref={refEmail} value={userEmail}
                />
                <p id="contact-message" ref={refMessage}></p>
                <button className="custom__button">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
