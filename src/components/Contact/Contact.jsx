import React from 'react'
import "./Contact.scss"
import Service from "../../assets/my Image/service.jpg";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


import {

  UilTwitter,
  UilFacebookF,
  UilInstagram,
  UilWhatsapp,

} from '@iconscout/react-unicons'

function Contact() {



  const form = useRef();
  const[done , setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zheuwpi', 'template_prby4pf', form.current, 'wNKUDWsWhwXQwh04H')
      .then((result) => {
          console.log(result.text);    
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact">
      <div className="content">
        <div className="head">

          <div className="title">
            <span>Contact Us</span>
          </div>
          <div className="detail">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nemo voluptas tempore placeat,
              ex et aperiam, nesciunt saepe veniam laudantium optio alias culpa inventore deserunt
              dolores sunt autem corrupti! Quidem!
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
            <input type="submit" value="Send" className='btn1'  />

       
            </div>
            <span   style={{color: "white"}}>{done && "Thanks for contacting me !"}</span>
            </form>
          </div>
          <div className="right">
            <img src={Service} alt=""  id='img1' />
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