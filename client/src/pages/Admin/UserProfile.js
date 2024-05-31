import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function UserProfile({ user }) {
  const [updatedUserData, setUpdatedUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    if (user) {
      setUpdatedUserData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || ''
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData({ ...updatedUserData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform update request using updatedUserData
      console.log('Updated user data:', updatedUserData);
      // Add your update logic here, such as making an API call
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>; // Add loading indicator or message
  }

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={updatedUserData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={updatedUserData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" name="phone" value={updatedUserData.phone} onChange={handleInputChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={updatedUserData.address} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary mr-2">Update</button>
        <NavLink to={`/dashboard/user/profile/${user._id}`} className="btn btn-secondary">Cancel</NavLink>
      </form>
    </div>
  );
}

export default UserProfile;
