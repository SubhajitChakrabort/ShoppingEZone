import XLSX from 'xlsx';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js'; // Adjust the path as necessary
import path from 'path';

// Function to read Excel file and upload data to MongoDB
const uploadUserData = async (filePath) => {
  const absolutePath = path.resolve(filePath);
  const workbook = XLSX.readFile(absolutePath);
  const sheetName = 'Users'; // Name of the sheet to read from
  const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  for (const row of sheet) {
    const hashedPassword = await bcrypt.hash(row['Password'], 10);
    const user = new User({
      name: row['Name'],
      email: row['Email'],
      password: hashedPassword,
      phone: row['Phone'],
      address: row['Address'],
      role: row['Role'] || 0,
    });

    try {
      await user.save();
      console.log(`User ${row['Name']} saved to database.`);
    } catch (error) {
      console.error(`Error saving user ${row['Name']}:`, error.message);
    }
  }
};

export default uploadUserData;
