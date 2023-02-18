require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const DB_URI = process.env.DB_URI;

const dbconnect = async() =>{    
    try{
        await mongoose.connect(DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
        console.log("Conectado con exito a la base de datos mi_blog")

    }catch(error){
        throw new Error("No se conecto a la base de datos")
    }
    
}

module.exports = dbconnect;