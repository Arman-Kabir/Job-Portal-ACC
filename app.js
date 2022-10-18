const express = require("express");
const app = express();
const cors = require("cors");


// middlewares
app.use(express.json());
app.use(cors());

// routes
const userRoute = require('./routes/user.route');
const hiring_managerRoute = require('./routes/hiring-manager.route');
const candidateRoute = require('./routes/candidate.route');

app.get("/",(req,res)=>{
    res.send("Route is working! ");
});

// 
app.use('/api/v1/user',userRoute);
app.use('/api/v1/hiring-manager',hiring_managerRoute);
app.use('/api/v1/candidate',candidateRoute);

module.exports = app;