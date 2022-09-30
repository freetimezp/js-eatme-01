import React, {useEffect} from 'react';

import SubHeading from  '../SubHeading/SubHeading';
import emailjs from '@emailjs/browser';

import './Newsletter.css';

const Newsletter = () => {
    const contactForm = document.getElementById('contact-form');
    const contactEmail = document.getElementById('contact-email');
    const contactMessage = document.getElementById('contact-message');

    const sendMail = (e) => {
        e.preventDefault();

        if(contactEmail.value === '') {
            contactMessage.classList.remove('color-green');
            contactMessage.classList.add('color-red');

            contactMessage.textContent = 'Please write your email..';
        }else{
            emailjs.sendForm('service_lqpyxd1', 'template_3ty9whb', '#contact-form', 'kk5oM2vPMYsBD367x');

            contactMessage.classList.remove('color-red');
            contactMessage.classList.add('color-green');

            contactMessage.textContent = 'Hello! New Subscriber!';
        }
    }

    contactForm?.addEventListener('submit', sendMail);

    return (
        <div className="app__newsletter">
            <div className="app__newsletter-heading">
                <SubHeading title="Newsletter" />
                <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
                <p className="p__opensans">And never miss latest Updates!</p>
            </div>
            <form className="app__newsletter-input flex__center" id="contact-form">
                <input type="email" placeholder="Enter your email" name="user_email" id="contact-email" />
                <p className="contact-message" id="contact-message"></p>
                <button className="custom__button">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;
