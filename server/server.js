/*import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors';
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res)=>{
    res.set('Cache-Control', 'no-store');
    res.send(
      "<h1>Welcome Shopping E-Zone</h1>"

    );

});
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`.bgCyan.white);
});*/
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
import uploadUserData from './utils/uploadUserData.js'; // Import the uploadUserData function
import exportUserData from './utils/exportUserData.js'; // Import the exportUserData function
import path from 'path'; // Import path module for file handling
import { fileURLToPath } from 'url';

// Handle __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.send("<h1>Welcome to Shopping E-Zone</h1>");
});

// Route to handle user data upload from Excel file
app.post('/upload-users', async (req, res) => {
  const filePath = path.join(__dirname, 'data', 'users.xlsx'); // Ensure the file path is correct
  try {
    await uploadUserData(filePath);
    res.send('User data uploaded successfully');
  } catch (err) {
    res.status(500).send('Error uploading user data: ' + err.message);
  }
});

// Route to export user data to an Excel file
app.get('/export-users', async (req, res) => {
  const filePath = path.join(__dirname, 'data', 'exported_users.xlsx'); // Ensure the file path is correct
  try {
    await exportUserData(filePath);
    res.download(filePath); // Send the file to the client
  } catch (err) {
    res.status(500).send('Error exporting user data: ' + err.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
