const mongoose = require('mongoose');

require("dotenv").config

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser:true,useUnifiedTopology:true })
    .then(() => console.log("DB ka coneection is succesfuil"))
    .catch((error)=>{
        console.log("Issue in DB conncection");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;