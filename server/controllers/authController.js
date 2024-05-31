import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import {comparePassword, hashPassword } from "./../utils/authUtil.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
    try {
      const { name, email, password, confirmpassword, phone, address} = req.body;
      //validations
      if (!name || typeof name !== 'string' || !/^[a-zA-Z\s]+$/.test(name)) {
        return res.send({ error: "Name is Required" });
      }
      if (!email) {
        return res.send({ message: "Email is Required" });
      }
      if (!password) {
        return res.send({ message: "Password is Required" });
      }
      if (password !== confirmpassword) {
        return res.status(400).send({ message: "Passwords do not match" });
      }
      if (!phone) {
        return res.send({ message: "Phone no is Required" });
      }
      if (!address) {
        return res.send({ message: "Address is Required" });
      }
      //if (!answer) {
        //return res.send({ message: "Answer is Required" });
      //}
      //check user
      const exisitingUser = await userModel.findOne({ email });
      //exisiting user
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "Already Register please login",
        });
      }
      //register user
      const hashedPassword = await hashPassword(password);
      //save
      const user = await new userModel({
        name,
        email,
        phone,
        address,
        password: hashedPassword,
        
      }).save();
  
      res.status(201).send({
        success: true,
        message: "User Register Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Registeration",
        error,
      });
    }
  };
  export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      //token
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };
  export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };
  export const forgotPasswordController = async (req, res) => {
    try {
      const { email, newPassword } = req.body;
      if (!email) {
        res.status(400).send({ message: "Emai is required" });
      }
      //if (!answer) {
        //res.status(400).send({ message: "answer is required" });
      //}
      if (!newPassword) {
        res.status(400).send({ message: "New Password is required" });
      }
      //check
      const user = await userModel.findOne({ email });
      //validation
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Wrong Email Or Answer",
        });
      }
      const hashed = await hashPassword(newPassword);
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res.status(200).send({
        success: true,
        message: "Password Reset Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  };
  export const updateProfileController = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
      const user = await userModel.findById(req.user._id);
      //password
      if (password && password.length < 6) {
        return res.json({ error: "Passsword is required and 6 character long" });
      }
      const hashedPassword = password ? await hashPassword(password) : undefined;
      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || user.name,
          password: hashedPassword || user.password,
          phone: phone || user.phone,
          address: address || user.address,
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error WHile Update profile",
        error,
      });
    }
  };
  export const orderStatusController = async (req, res) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
      const orders = await orderModel.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error While Updateing Order",
        error,
      });
    }
  };
  /*export const getAllOrdersController = async (req, res) => {
    try {
      const orders = await orderModel
        .find({})
        .populate("products", "-photo")
        .populate("buyer", "name")
        .sort({ createdAt: "-1" });
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error WHile Geting Orders",
        error,
      });
    }
  };*/
  export const getAllOrdersController = async (req, res) => {
    try {
      // Find orders, populate fields, and sort in descending order
      const orders = await orderModel
        .find({})
        .populate("products", "-photo")
        .populate("buyer", "name")
        .sort({ createdAt: -1 })
        .exec(); // Ensure to call .exec() for proper execution of the query
  
      // Check if orders exist
      if (!orders || orders.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No orders found.",
        });
      }
  
      // Respond with the orders
      res.json(orders);
    } catch (error) {
      console.error(error);
  
      // Log specific error details, if available
      if (error.message) {
        console.error("Error Message:", error.message);
      }
  
      res.status(500).json({
        success: false,
        message: "Error while fetching orders.",
        error: error.message || error,
      });
    }
  };
  
  export const getOrdersController = async (req, res) => {
    try {
      const orders = await orderModel
        .find({ buyer: req.user._id })
        .populate("products", "-photo")
        .populate("buyer", "name");
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error WHile Geting Orders",
        error,
      });
    }
  };
  export const getAllUser = async (req, res) => {
    try {
      const users = await userModel.find();
  
      res.json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error while get users' });
    }
  };
 /* export const getUserOrdersController = async (req, res) => {
    try {
      const userId = req.params.userId;
      const userOrders = await orderModel.find({ userId: userId });
      res.status(200).json({ orders: userOrders });
    } catch (error) {
      console.error('Error fetching user orders:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };*/
  export const getUserOrdersController = async (req, res) => {
    try {
      const userId = req.params.userId;
      const userOrders = await orderModel.find({ userId: userId });
      if (!Array.isArray(userOrders)) {
        throw new Error('User orders data is not in the expected format');
      }
      res.status(200).json({ orders: userOrders });
    } catch (error) {
      console.error('Error fetching user orders:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  export const blockUserController = async (req, res) => {
    try {
      const userId = req.params.userId;

      console.log("yea thtis is the id",userId)
      
      await userModel.findByIdAndUpdate(userId, { blocked: true });
      res.status(200).json({ message: 'User blocked successfully' });
    } catch (error) {
      console.error('Error blocking user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const deleteUserController = async (req, res) => {
    try {
      const userId = req.params.userId;
      
      await userModel.findByIdAndDelete(userId);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  export const unblockUserController = async (req, res) => {
    try {
      const userId = req.params.userId;
      await userModel.findByIdAndUpdate(userId, { blocked: false });
      res.status(200).json({ message: 'User unblocked successfully' });
    } catch (error) {
      console.error('Error unblocking user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  // Define a controller function for updating a user
export const updateUserController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUserData = req.body; 
    await userModel.findByIdAndUpdate(userId, updatedUserData);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
