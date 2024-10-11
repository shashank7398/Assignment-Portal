const mongoose= require("mongoose");

require("dotenv").config();

const connectwithDB= ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB Connected Successfully"))
    .catch((error)=>{
        console.log("DB connection Failed");
        console.log(error);
        process.exit(1);
    })

}

module.exports= connectwithDB;