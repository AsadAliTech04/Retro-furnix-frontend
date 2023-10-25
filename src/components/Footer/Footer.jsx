import "./Footer.scss";
import React from "react";
import { UilLocationArrow } from '@iconscout/react-unicons'
import { UilEnvelopeAlt } from '@iconscout/react-unicons'
import { UilMobileAndroid } from '@iconscout/react-unicons'

import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Discover the perfect blend of style and affordability at RetroFurnix, your destination for furniture sales in the UK. Elevate your home with timeless pieces today

                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <UilLocationArrow />
                        <div className="text">
                            377 Wanstead Park Road | Ilford | IG1 3TT
                        </div>
                    </div>
                    <div className="c-item">
                        <UilMobileAndroid />
                        <div className="text">
                            Phone: +447918099801
                        </div>
                    </div>
                    <div className="c-item">
                        <UilEnvelopeAlt />
                        <div className="text">
                            E-maiil: retrofurnix@gmail.com

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Catgeories</div>
                    <span className="text">Wardrobes</span>
                    <span className="text">Sofa</span>
                    <span className="text">Beds</span>
                    <span className="text">Dining Tables & Chairs</span>
                    <span className="text">Home Set</span>
                    <span className="text">Corner Sofa</span>
                    <span className="text">Mattress</span>
                    <span className="text">Corner Sofa Bed</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <  span className="text">Privacy Policy</span>
                    <span className="text"> Returns</span>
                    <span className="text"> Terms & Conditions </span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bar-content">
                    <div className="text">
                        Retrofurnix.com | We Sell Best Quality Furniture in UK. FREE DELIVERY. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </div>
    )
};

export default Footer;
