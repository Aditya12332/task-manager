const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const connectDB = require('./config/db');

dotenv.config();               // Load .env config
const app = express();

app.use(express.json());       // Parse JSON body

connectDB();                   // Connect to MongoDB

app.use('/api/tasks', taskRoutes);  // Use task-related routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
