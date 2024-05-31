
import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import AdminMenu from '../../components/layout/AdminMenu';
import axios from 'axios';
import '../../styles/User.css'
import { toast } from 'react-toastify';
{/*import { NavLink } from 'react-router-dom';*/}
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("this is the useEffect working")
    fetchData();
  }, []);

 
  const fetchData = async () => {

    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/users`);
      const usersData = response.data.users;
     
      const usersWithOrders = await Promise.all(
        usersData.map(async (user) => {
          const ordersResponse = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-orders/${user._id}`);
          const userWithOrders = { ...user, orders: ordersResponse.data };
         
          return userWithOrders;
        })
      );
      console.log("this is the problem how to fix this",usersWithOrders)
      setUsers(usersWithOrders);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 


  const handleDeleteUser = async (userId) => {
    try {
     
      await axios.delete(`${process.env.REACT_APP_API}/api/v1/auth/delete-user/${userId}`);
      
      fetchData();
      toast.success('User Deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error Deleting user. Please try again later.');
    }
  };

  
  return (
    <Layout title={"Dashboard - all users"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu/>
          </div>
          <div className='col-md-9' style={{position:"relative", top:"40px", display: "flex", flexWrap: "wrap", gap: "20px"}}>
  
  {users.map((user, index) => (
    <div key={index} className="user-card" style={{position:"relative", top:"20px"}}>
      <div className="card-body">
        <h4>{user.name}</h4>
        <h6>{user.email}</h6>
        <h6>{user.phone}</h6>
        <h6>{user.address}</h6>
        {/*<NavLink to={{ pathname: `/dashboard/user/profile/${user._id}`, state: { id: user._id } }} className="btn btn-primary mr-2">Update</NavLink>*/}
       <button onClick={() => handleDeleteUser(user._id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  ))}
</div>


        </div>
      </div>
    </Layout>
  );
}

export default Users;




