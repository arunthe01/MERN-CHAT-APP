const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./Routes/userRoutes');
const chatRoutes = require('./Routes/chatRoutes');
dotenv.config();
connectDB();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Api is running');
})
app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log("hello world!"));