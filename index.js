require("dotenv").config();
const express = require("express");
const cors = require("cors");
//const server = require("./config/server");
const database = require("./config/dbconnect");
console.log("Iniciando App de Node");
const app = express();
const port = process.env.PORT || 3901;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas

const rutasArticulos = require("./routes/Articulo.js");

app.use("/api", rutasArticulos);

//Cargando servidor
server();
//Cargando base de datos
database();

