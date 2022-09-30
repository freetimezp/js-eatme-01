import React from 'react';

import {images} from '../../constants';

import {FooterOverlay, Newsletter} from '../../components';
import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi";

import './Footer.css';

const Footer = () => (
    <div className="app__footer section__padding">
        <FooterOverlay />
        <Newsletter />

        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact us</h1>
                <p className="p__opensans">69000, ZPCity, Ukraine</p>
                <p className="p__opensans">+380 44 000 00 01</p>
                <p className="p__opensans">+380 44 000 00 02</p>
            </div>
            <div className="app__footer-links_logo">
                <img src={images.gericht} alt="footer"/>
                <p className="p__opensans">
                    "The best way to find yourself is to lose yourself in the service of others."
                </p>
                <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: '15px'}} />

                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiInstagram />
                    <FiTwitter />
                </div>
            </div>
            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__opensans">Monday-Friday:</p>
                <p className="p__opensans">08:00 am -12:00 am</p>
                <p className="p__opensans">Saturday-Sunday:</p>
                <p className="p__opensans">07:00 am -11:00 am</p>
            </div>
        </div>

        <div className="footer__copyright">
            <p className="p__opensans">2022 Freetime. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;
