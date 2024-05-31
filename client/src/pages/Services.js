// import React from 'react'
// import { Container, Row, Col } from 'reactstrap'
// import { motion } from 'framer-motion'
// import '../styles/services.css'
// import serviceData from '../assets/data/serviceData'

// function Services() {
//     return (
//         <div className='services'>
//             <Container>
//                 <Row>
//                     {
//                         serviceData.map((item, index) => (
//                             <Col lg='3' md='4' key={index}>
//                                 <motion.div whileHover={{ scale: 1.1 }} className='service_item' style={{ background: `${item.bg}` }}>
//                                     <span><i class={item.icon}></i></span>
//                                     <div>
//                                         <h3>{item.title}</h3>
//                                         <p>{item.subtitle} </p>
//                                     </div>

//                                 </motion.div>

//                             </Col>

//                         ))
//                     }
//                     {/*<Col lg='3' md='4'>
//             <div className='service_item'>
//             <span><i class="ri-truck-line"></i></span>
//             <div>
//                 <h3>Free Shipping</h3>
//                 <p>At Pepperfry </p>
//             </div>

//             </div>

//             </Col>*/}

//                 </Row>
//             </Container>
//         </div>
//     )
// }

// export default Services



import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import '../styles/services.css';
import serviceData from '../assets/data/serviceData';

function Services() {
  return (
    <div className='services'>
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg='3' md='4' key={index}>
              <motion.div whileHover={{ scale: 1.1 }} className='service_item' style={{ background: `${item.bg}` }}>
                <span><i className={item.icon}></i></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle} </p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;
