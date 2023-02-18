require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 3901;

const server = () => {
    if(app.listen(port, () => {})){
        console.log("Servidor corriendo en el puerto: "+port)
      }else{
        console.log("No se pudo conectar al servidor")
      }
} 

module.exports = server;