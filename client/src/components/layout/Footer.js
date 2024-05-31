/*import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Reserved &copy; RG Furniture</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;*/

import React from 'react';
import '../../styles/Footer.css';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import logo from '../../assets/images/sz.png';
import elo from '../../assets/images/elo.png';
import { Link } from 'react-router-dom';
import whatsappLogo from '../../assets/images/whatsapp.png';
import fbLogo from '../../assets/images/fcb2.svg';
import instLogo from '../../assets/images/instgm2.svg';
import ytLogo from '../../assets/images/ytb2.svg';
import xLogo from '../../assets/images/xt2.svg';
import { useLocation } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

function Footer() {


  const year = new Date().getFullYear();


  const handleLogoHover = (event) => {
    const logo = event.target;
    logo.style.width = '100%'; // Adjust the width as needed on hover

    const otherLogos = document.querySelectorAll('.logo:not(:hover)');

    otherLogos.forEach((otherLogo) => {
      otherLogo.style.width = '80px';
    });
  };

  const handleLogoLeave = () => {
    const logos = document.querySelectorAll('.logo');

    logos.forEach((logo) => {
      logo.style.width = '80px';
    });
  };

  const openWhatsAppChat = () => {
    window.location.href = 'https://wa.me/8768659911';
  };

  const location = useLocation();

  const hideFooterURL_1 = '/dashboard/admin/';
  const hideFooterURL_2 = '/dashboard/admin/create-product'
  const hideFooterURL_3 = '/dashboard/admin/create-category'
  const hideFooterURL_4 = '/dashboard/admin/products'

  const isHidden_1 = location.pathname === hideFooterURL_1;
  const isHidden_2 = location.pathname === hideFooterURL_2;
  const isHidden_3 = location.pathname === hideFooterURL_3;
  const isHidden_4 = location.pathname === hideFooterURL_4;


  return (

    <>

      {

        !(isHidden_1 || isHidden_2 || isHidden_3 || isHidden_4) &&

        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
          
          <section className="container text-center text-md-start mt-5" style={{position:'relative', top:'25px'}}>
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img
                  src={logo}
                  alt='logo'

                  style={{ width: '125px', height: '70px', position: 'relative', top: '-30px' }}
                />


                <div className='text-black'>
                Discover endless possibilities in home decor with Shopping Zone – your ultimate destination for quality and style. Elevate your living spaces with our curated collection of modern and accessories, designed to bring comfort and sophistication to every home.
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-black">
                <h6 className="text-uppercase  mb-4">Products</h6>

                <Link to="/categories" className="text-reset" style={{textDecoration:'none'}}>
                  Furniture
                </Link>

                <div>
                  <Link to="/categories" className="text-reset" style={{textDecoration:'none'}}>
                    Electric
                  </Link>
                </div>
                <div>
                  <Link to="/categories" className="text-reset" style={{textDecoration:'none'}}>
                    Electronics
                  </Link>
                </div>
                <div>
                  <Link to="/categories" className="text-reset" style={{textDecoration:'none'}}>
                    Study Meterial
                  </Link>
                </div>
                <div>
                  <Link to="/categories" className="text-reset" style={{textDecoration:'none'}}>
                    Book
                  </Link>
                </div>
                <div>
                  <Link to="/categories" className="text-reset" style={{textDecoration:'none'}}>
                    Cloths
                  </Link>
                </div>
                <div>
                  <Link to="/categories" className="text-reset" style={{textDecoration:'none'}}>
                    Medicine
                  </Link>
                </div>
                <div>
                  <Link to="/categories" className="text-reset" style={{textDecoration:'none'}}>
                    More
                  </Link>
                </div>

               




              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-black">
                <h6 className="text-uppercase mb-4">Useful links</h6>
                <div>
                  <Link to="/about" className="text-reset" style={{textDecoration:'none'}}>
                    About
                  </Link>
                </div>
                <div>
                  <Link to="/categories" className="text-reset" style={{textDecoration:'none'}}>
                    Product
                  </Link>
                </div>
               
                <div>
                  <Link to="/contact" className="text-reset" style={{textDecoration:'none'}}>
                    Contact
                  </Link>
                </div>

              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase mb-4 text-black">Contact</h6>
                <div className='text-black' style={{ position: 'relative', top: '-5px' }}>
                  <i className="ri-map-pin-line" style={{ marginLeft: '-5px' }}>&nbsp;Kadamtala, DBC Road, Jalpaiguri</i>
                </div>

                <div className='text-black p-1' style={{ marginLeft: "-5px" }}>
                  <i className="ri-phone-line">&nbsp;+91-8768659911</i>

                </div>
                <div className='text-black p-1' style={{ marginLeft: "-5px" }}>
                  <i className="ri-mail-line">&nbsp;sc801377@gmail.com</i>
                 
                </div>
                <div className='social logo' style={{ position: 'relative', top: '10px' }}>
                  <img
                    src={fbLogo}
                    alt='fb Logo'
                    className="logo"
                    style={{ width: '30px', height: '20px' }}

                  />
                  <img
                    src={instLogo}
                    alt='inst Logo'
                    className="logo"
                    style={{ width: '30px', height: '20px' }}

                  />
                  <img
                    src={ytLogo}
                    alt='yt Logo'
                    className="logo"

                    style={{ width: '30px', height: '20px' }}

                  />
                  <img
                    src={xLogo}
                    alt='x Logo'
                    className="logo"

                    style={{ width: '30px', height: '20px' }}

                  />

                </div>
               

              </div>
             
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>

                <div className='wp'>
                  <img
                    src={whatsappLogo}
                    alt='WhatsApp Logo'
                    onClick={openWhatsAppChat}
                    style={{ cursor: 'pointer', width: '60px', height: '60px', right: '5px', position: 'relative', top: '-100px' }}
                  />
                </div>
                <p onClick={openWhatsAppChat} style={{ cursor: 'pointer' }}></p>
              </ListGroupItem>
              
            </div>
          </section>

          <div className="text-center flex" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', }}>
            <p className='footer_copyright text-black' >
              © {year} SHOPPING ZONE - All rights reserved
            </p>
            <p className='dev text-black' style={{position:'relative', top:'-15px'}} >
              Developed with &#10084;&#65039; by Subhajit Chakraborty
            </p>
          </div>

        </footer>

      }


    </>


  );
}

export default Footer;


