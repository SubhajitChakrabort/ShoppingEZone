import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { useAuth } from '../context/auth'
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import "../styles/Homepage.css";
import { Prices } from '../components/Prices';
import toast from "react-hot-toast";
import { Carousel } from 'react-bootstrap';
import { AiOutlineReload } from "react-icons/ai";
import f1 from '../assets/images/f21.jpg'
import f2 from '../assets/images/f22.jpg'
import f3 from '../assets/images/f23.jpg'
import Services from './Services';
import WCU from '../assets/images/wcu.jpg'
function Homepage() {
  const navigate = useNavigate(); 
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useCart();
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      //toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  const getAllProducts = async ()=>{
    try{
      setLoading(true)
      const {data} = await axios.get (`${process.env.REACT_APP_API}/api/v1/product/get-product`);
      setLoading(false)
      setProducts(data.products);

    } catch (error){
      setLoading(false)
      console.log(error);
    }
  };
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFilter = (value, id)=>{
let all = [...checked];
if (value) {
  all.push(id);
} else{
  all = all.filter((c)=> c !== id);
}
setChecked(all);
  }
  /*useEffect(()=>{

    getAllProducts();

  }, []);*/
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
   
    <Layout title={"All Products - Best offers "}>
       <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={f1}
            alt="First slide"
            height={'500px'}
            
          />
          <Carousel.Caption>
            <h3 style={{ position: 'relative', top: '-180px', fontWeight:'bold' }}></h3>
           {/* <p style={{ position: 'relative', top: '-450px' }}>Some description about the first image.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={f2}
            alt="Second slide"
            height={'500px'}
           
          />
          <Carousel.Caption>
            <h3 style={{ position: 'relative', top: '-180px', fontWeight:'bold' }}></h3>
          {/*  <p style={{ position: 'relative', top: '-150px' }}>Some description about the second image.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={f3}
            alt="Third slide"
            height={'500px'}
          />
          <Carousel.Caption>
            <h3 style={{ position: 'relative', top: '-180px', fontWeight:'bold' }}></h3>
          {/*  <p style={{ position: 'relative', top: '-150px' }}>Some description about the third image.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     {/* <img
        src="/image/banner.png"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />*/}
      <Services />
      <div className="why-choose-section mt-5 p-3 p-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="section-title text-black text-center mb-4">Why Choose Us</h2>
              <p className="text-center">
              Choose us for cutting-edge innovation, proven reliability, and a commitment to exceeding your expectations, ensuring your success in every endeavor. Our dedicated team and client-centric approach make us the ideal partner for achieving your goals.
              </p>

              <div className="row my-4">
                <div className="col-md-6 mb-4">
                  <div className="feature text-center">
                    <div className="icon">
                      <i className="ri-truck-line"></i>
                    </div>
                    <h3 className="text-black">Fast & Free Shipping</h3>
                    <p>
                    Swift and complimentary shipping for a seamless and expedited delivery experience.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="feature text-center">
                    <div className="icon">
                      <i className="ri-shopping-bag-line"></i>
                    </div>
                    <h3 className="text-black">Easy to Shop</h3>
                    <p>
                    Effortless shopping with intuitive navigation and user-friendly features for a seamless and enjoyable experience.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="feature text-center">
                    <div className="icon">
                      <i className="ri-supabase-fill"></i>
                    </div>
                    <h3 className="text-black">24/7 Support</h3>
                    <p>
                    Round-the-clock support, ensuring assistance and solutions whenever you need them.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="feature text-center">
                    <div className="icon">
                      <i className="ri-text-wrap"></i>
                    </div>
                    <h3 className="text-black">Hassle Free Returns</h3>
                    <p>
                    Painless and hassle-free returns for a worry-free shopping experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="img-wrap">
                <div className="img-cover">
                  <img src={WCU} alt="Image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid row mt-3 home-page'>
        <div className='col-md-3 filters'>
          <h4 className='text-center mt-4'>Filter by category</h4>
          <div className='d-flex flex-column'>
          {categories?.map((c)=>(
            <Checkbox key={c._id} onChange={(e)=>handleFilter(e.target.checked, c._id)}>
              {c.name}
            </Checkbox>
          ))}
          
        </div>
        <h4 className='text-center'>Filter by Price</h4>
          <div className='d-flex flex-column'>
          <Radio.Group onChange={(e)=> setRadio(e.target.value)}>
            {Prices?.map((p)=>(
              <div key={p._id}>
                <Radio value={p.array} > {p.name}</Radio>
              </div>
            ))}
              


           
          </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger mx-2"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>

        </div>
        
        <div className='col-md-9'>
        
        <h1 className='text-center'>All products</h1>
        <div className='d-flex flex-wrap'>
       {products?.map((p) => (
              
                <div className="card m-2" style={{ width: "17rem"}}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <hr/>
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring (0, 30)}...</p>
                    <p className="card-text"> RS/- {p.price}</p>
                    <div className="card-name-price">
                    <button className='btn btn-info ms-1' onClick={() => navigate(`/product/${p.slug}`)}>MORE DETAILS </button>
                    <button className='btn btn-dark ms-1' onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}>ADD TO CART </button>
                      </div>
                  </div>
                </div>
               
               
            ))}
           
        </div>
      
        <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                style={{background:'red'}}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
        
      </div>
      
    </Layout>
  )
}

export default Homepage