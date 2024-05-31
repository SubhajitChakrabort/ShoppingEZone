/*import React from "react";
import Layout from "./../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/image/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%", position:"relative", top:"45px"}}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@shoppingzone.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 8768659911
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;*/

import React, { useRef } from 'react'
import Layout from "./../components/layout/Layout";
import styled from 'styled-components';
import emailjs from "emailjs-com";
import '../styles/email.css'
function Contact() {
const Wrapper = styled.section``;
const form = useRef();
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_i6uqanq', 'template_i6n8nh3', form.current, 'SVwM-CPv6nvolRb78')
    .then((result) => {
      console.log(result.text);
    })
    .catch((error) => {
      console.log('Error sending email:', error);
    })
    .finally(() => {
      e.target.reset();
    });
}
  return (
    <Layout className='contact'>
       
     
    <div className="container-box-box mt-5">
     
    <form ref={form} onSubmit={sendEmail}>

     

      <div class="container-box">
        <div class="contact-box">
          <div class="left"></div>
          <div class="right">
            <h2>Need help! Get in tuch</h2>
            <input type="text" class="field" name='user_name' placeholder="Your Name" />
                <input type="text" class="field" name='user_email' placeholder="Your Email" />
                <input type="text" class="field" name='user_subject' placeholder="Subject" />
                <input type="text" class="field" name='user_code' placeholder="Enter Product Code" />
                <input type="number" class="field" name='user_no' placeholder="Your Contact No" />
                <textarea placeholder="Message" class="field" name='user_message'></textarea>
            <button class="btn btn-success">Send query <i class="ri-send-plane-line"></i></button>
          </div>
        </div>
      </div>

    </form>
    <div className="col-12">
          <section>
            <Wrapper>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.8699278256745!2d88.71716887420556!3d26.52430747667646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e479e8a369fb07%3A0x7440dfb2d7aa5175!2sKadamtala%20Police%20Stand!5e0!3m2!1sen!2sin!4v1707029411182!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Wrapper>
          </section>
        </div>
  </div>
  <div className="p-3">
 
  </div>
  </Layout>
  )
}

export default Contact
