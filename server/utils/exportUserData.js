import XLSX from 'xlsx';
import User from '../models/userModel.js'; // Adjust the path as necessary
import path from 'path';

const exportUserData = async (filePath) => {
  const absolutePath = path.resolve(filePath);
  try {
    const users = await User.find().lean().exec();
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users'); // Set the sheet name to 'Users'
    XLSX.writeFile(workbook, absolutePath);
    console.log('User data exported successfully to', absolutePath);
  } catch (error) {
    console.error('Error exporting user data:', error.message);
  }
};

export default exportUserData;
