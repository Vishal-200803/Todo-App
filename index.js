const express = require("express");
const app = express();

//load config from env file

require("dotenv").config();

const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mout the todo ASPI routes
app.use("/api/V1", todoRoutes);

// start server
app.listen(PORT, ()=>{
    console.log('Server started sucessfully');
})

// connect to database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/",(req,res)=>{
    res.send('This is a homepage');
})