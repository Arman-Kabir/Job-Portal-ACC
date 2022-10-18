const express = require("express");
const app = express();
const cors = require("cors");


// middlewares
app.use(express.json());
app.use(cors());

// routes
const userRoute = require('./routes/user.route');
const hiring_managerRoute = require('./routes/hiring-manager.route');

app.get("/",(req,res)=>{
    res.send("Route is working! ");
});

// 
app.use('/api/v1/user',userRoute);
app.use('/api/v1/hiring-manager',hiring_managerRoute);

module.exports = app;