const express = require("express");
const router = express.Router();

const ArticuloController = require("../controladores/Articulo.js")

router.get("/ruta-de-prueba", ArticuloController.prueba);
router.post("/crear", ArticuloController.crear);

module.exports = router;