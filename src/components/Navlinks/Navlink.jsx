import React from 'react'
import "./NavLink.scss"
import { useNavigate } from 'react-router-dom'
import {

    UilTimes,
    UilFacebookF,
    UilInstagram,
    UilWhatsapp,

} from '@iconscout/react-unicons'
function Navlink({ setShowLink }) {
    const navigate = useNavigate();
    return (
        <div className='navLinks'>
            <div className="opac-layer"></div>

            <div className="nav-content">
                <div className="content">
                    <div className="header">
                        <span className='heading'>Menu</span>
                        <span className='close-btn'
                            onClick={() => { setShowLink(false) }}
                        >
                            <UilTimes />
                            <span className="text">close</span>
                        </span>

                    </div>

                    <div className="items" onClick={() => { setShowLink(false) }}>

                        <li onClick={() => navigate("/")}  >Home</li>
                        <li onClick={() => navigate("/category/:id")} >Categories</li>

                        <li onClick={() => navigate("/about")}  >About Us</li>
                        <li onClick={() => navigate("/contact")} >Contact Us</li>


                    </div>



                </div>


                <div className="footer">
                    <div className="social-icons">
                        <UilFacebookF />
                        <UilInstagram />
                        <UilWhatsapp />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navlink