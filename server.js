const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv').config();

const app = require('./app');

// DB connection
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log(`Database connection is successful` .red.bold);
})



// server
const PORT = process.env.PORT || 8080;
// const PORT = 5001;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`.yellow.bold);
})