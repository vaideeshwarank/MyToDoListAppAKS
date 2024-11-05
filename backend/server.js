// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todos');

dotenv.config();
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());  // Enables CORS for all routes by default

// Connect to MongoDB
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
 //   .then(() => console.log("MongoDB connected"))
 //   .catch((error) => console.error("MongoDB connection error:", error));

mongoose.connect('mongodb://20.3.26.114:27017/todos_database', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

// Use the to-do routes
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
