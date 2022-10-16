const colors = require('colors');


const app = require('./app');




// server
// const PORT = process.env.PORT || 8080;
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`.yellow.bold);
})