const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./Routes/userRoutes');
const chatRoutes = require('./Routes/chatRoutes');
const messageRoutes = require('./Routes/messageRoutes');

dotenv.config();
connectDB();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Api is running');
})
app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);
app.use('/api/message',messageRoutes);
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,console.log("hello world!"));
const io = require('socket.io')(server,{
    pingTimeout:60000,
    cors:{
        origin:'http://localhost:3000',
    },
});

io.on("connection",(socket)=>{
    console.log("connected to socket.io");
})
