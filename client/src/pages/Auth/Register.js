/*import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css";
import logo from '../../assets/images/sz.png';
//import elo from '../../assets/images/enco1.png';
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    //console.log(name, email, password, phone, address);
    //toast.success("Register Successfully")
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {name, email, password, phone, confirmpassword, address});
      if (res.data.success) {
        toast.success( res.data.message);
        //toast.success("Register Successfully")
        navigate("/login");
        
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  };
  console.log(process.env.REACT_APP_API);
  return (
    <Layout title="Register - Shopping E-Zone">
    <div className="form-container" style={{ minHeight: "90vh", position:'relative', top:'50px'}}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
          </div>
          <div className="mb-3">
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Confirm Password"
            required
          />
          </div>
        <div className="mb-3">
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Phone"
            required
            maxLength={10}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Address"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>
      </form>
      <div class="image-text"><img
              src={logo}
              alt='logo'

              style={{ width: '185px', height: '90px', position: 'relative', top: '-25px' }}
            /><br/>
    Developed with &#10084;&#65039; by Subhajit Chakraborty
    </div>
    </div>
  </Layout>
  )
}

export default Register*/
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css";
import logo from '../../assets/images/sz.png';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, confirmpassword, address });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Shopping E-Zone">
      <div className="form-container" style={{ minHeight: "90vh", position: 'relative', top: '50px' }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Confirm Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={phone}
              onChange={handlePhoneChange}
              className="form-control"
              placeholder="Enter Your Phone"
              required
              maxLength={10}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
        <div className="image-text">
          <img
            src={logo}
            alt='logo'
            style={{ width: '185px', height: '90px', position: 'relative', top: '-25px' }}
          /><br />
          Developed with &#10084;&#65039; by Subhajit Chakraborty
        </div>
      </div>
    </Layout>
  )
}

export default Register;

