const express = require("express");
const app = express();
const cors = require("cors");


// middlewares
app.use(express.json());
app.use(cors());

// routes
const userRoute = require('./routes/user.route');

app.get("/",(req,res)=>{
    res.send("Route is working! ");
});

// 
app.use('/api/v1/user',userRoute);

module.exports = app;