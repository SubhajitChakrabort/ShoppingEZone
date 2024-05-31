/*import React from "react";
import Layout from "./../components/layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Shopping E-Zone"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/image/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4" style={{position:'relative', top:'40px'}}>
          <p className="text-justify mt-2">
          Welcome to Shopping Zone, where seamless shopping meets unparalleled variety! We pride ourselves on being your go-to destination for all your needs, offering a curated selection of high-quality products that cater to diverse tastes and preferences. At Shopping Zone, we prioritize customer satisfaction, ensuring a user-friendly experience from browse to buy.

Discover a world of convenience with our intuitive website, featuring easy navigation and secure transactions. Our commitment to excellence extends to prompt delivery and responsive customer support, ensuring your peace of mind throughout the shopping journey.

Whether you're a fashion enthusiast, tech aficionado, or home decor lover, Shopping Zone has something for everyone. Embrace the joy of online shopping with us, where every click brings you closer to unparalleled quality and unbeatable prices. Join our growing community of satisfied customers and experience the future of ecommerce with Shopping Zone. Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;*/
import React from "react";
import Layout from "./../components/layout/Layout";
import RG from '../assets/images/sz.png'
import '../styles/About.css'
import '../styles/About2.css'

const About = () => {
    return (

        
        <Layout title={"About us - Shopping Zone"}>
            <div>


                <h1 className='text_about' style={{ position: 'relative', top: '30px' }}>ABOUT SHOPPING ZONE</h1>

                <div className='container'>
                    <section className='about'>
                        {/* <div className='about-img w-50' style={{ position: 'relative', top: '-50px' }}> */}

                        <div className='about-img w-50' >
                            {/* <img src={RG} alt='' style={{ width: '550px', marginRight: '100px', height: '350px', position: 'relative', top: '40px' }} /> */}
                            <img src={RG} alt='' />


                        </div>


                        <div className='about-content m-5'>
                            <h2>One of the best shopping zone in India</h2>
                            <p>Shopping Zone started in the year 2023. We are an ISO certified company and the best provider in North Bengal. We use the best equipment and technology for the manufacture of powder-coated wrought iron furniture in the entire northeastern region of India. We are the best furniture manufacturers in Jalpaiguri for buying fancy and stylish product pieces.
                                We are the high-quality product manufacturer and suppliers in Jalpaiguri and the first one in the region to provide durable, affordable and modern product. Our product is very resistant to rust, decay, and discoloration and it is very handy and easy to transport.
                            </p>

                        </div>

                    </section>
                </div>


                <div class="container-fluid" style={{ position: 'relative', top: '-20px' }}>
                    <h1 class="text-center display-3 fw-bold text-danger">OUR SERVICES</h1>
                    <hr class="mx-auto mb-5 w-25" />
                    <div class="row mb-5">
                        
                        <div class="col-12 col-sm-6 col-md-3 m-auto">

                            <div class="card shadow">
                                <img src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="card-img-top" />
                                <div class="card-body">
                                    <h3 class="text-center">ELECTRIC</h3>
                                    <hr class="mx-auto w-75" />
                                    <p className='para'>
                                        Shopping Zone offers a wide range of stylish and affordable Electric, from cozy sofas to elegant dining tables. Our pieces are crafted
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-12 col-sm-6 col-md-3 m-auto">

                            <div class="card shadow">
                                <img src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D" alt="" class="card-img-top" />
                                <div class="card-body">
                                    <h3 class="text-center">ELECTRONICS</h3>
                                    <hr class="mx-auto w-75" />
                                    <p className='para'>
                                        Shopping Zone’s Electronic things collection offers a variety of styles, sizes, and finishes to fit your house’s needs. 
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-12 col-sm-6 col-md-3 m-auto">

                            <div class="card shadow">
                                <img src="https://images.unsplash.com/photo-1594235048794-fae8583a5af5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwZnVybml0dXJlfGVufDB8fDB8fHww" alt="" class="card-img-top" />
                                <div class="card-body">
                                    <h3 class="text-center">STUDY</h3>
                                    <hr class="mx-auto w-75" />
                                    <p className='para'>
                                        Our collection of study materials offers a variety of designs to fit your needs. Our ergonomic chairs and spacious desks are crafted.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-12 col-sm-6 col-md-3 m-auto">

                            <div class="card shadow">
                                <img src="https://plus.unsplash.com/premium_photo-1665972634624-e99121403175?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" class="card-img-top" />
                                <div class="card-body">
                                    <h3 class="text-center" style={{fontSize:'26px'}}>AND MANY MORE</h3>
                                    <hr class="mx-auto w-75" />
                                    <p className = 'para'>
                                        All medicine, toy, sports, cosmetics collection includes patient beds, medical cabinets, and other sports designed. 


                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
          
        </Layout>
    );
};

export default About;

