import React from 'react'
import "./Contact.scss"
import Service from "../../assets/my Image/service.jpg";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Helmet } from "react-helmet";



import {

  UilTwitter,
  UilFacebookF,
  UilInstagram,
  UilWhatsapp,

} from '@iconscout/react-unicons'

function Contact() {



  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w8wqyn9', 'template_5730wvf', form.current, 'xLdV6rpMsI-xlsU7a')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="contact">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Retro Furnix | Contact</title>
        <link rel="canonical" href="https://retrofurnix.com/contact" />
      </Helmet>
      <div className="content">
        <div className="head">

          <div className="title">
            <span>Contact Us</span>
          </div>
          <div className="detail">
            <span>
              Connect with RetroFurnix to explore our exquisite furniture collection in the UK. Reach out for inquiries, custom orders, or any assistance. We're here to transform your living space with timeless pieces!
            </span>
          </div>
        </div>
        <div className="mid">
          <div className="left">
            <form ref={form} onSubmit={sendEmail}>
              <div className="name">
                <span>Name</span><br />
                <input type="text" name='from_name' id='n1' />
              </div>
              <div className="email">
                <span>Email</span><br />
                <input type="email" name="from_email" id="e1" />
              </div>
              <div className="message">
                <span>Message</span><br />
                <textarea type="message" name='message' id='m1' />
              </div>
              <div className="button">
                <input type="submit" value="Send" className='btn1' />


              </div>
              <span style={{ color: "white" }}>{done && "Thanks for contacting me !"}</span>
            </form>
          </div>
          <div className="right">
            <img src={Service} alt="" id='img1' />
          </div>
        </div>

        <div className="tail">

          <div className="icons">
            <UilFacebookF />
            <UilInstagram />
            <UilWhatsapp />
            <UilTwitter />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact