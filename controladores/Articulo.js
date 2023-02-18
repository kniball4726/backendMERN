const validar = require("validator");
const Articulo = require("../models/Articulo");

const prueba = (req,res) =>{
    return res.status(200).json({
        mensaje: "Acción de prueba en controlador de articulos"
    });
}

const crear = (req, res) => {
    //Recoger parametros por post a guardar
    let parametros = req.body;

    //validar datos
    try{
        const validarTitulo = !validar.isEmpty(parametros.titulo)
        const validarContenido = !validar.isEmpty(parametros.contenido)
        
        if(!validarTitulo || !validarContenido){
            throw new Error("No se ha validado la informacion");
        }

    }catch(error){
        return res.status(400).json({
            status: "error",
            mensaje: "Faltan datos"
    })
}
        
    //crear objeto a guardar en bd
    const articulo = new Articulo(parametros);
    //guardando datos en bd
    articulo.save((error, articuloGuardado) => {
        if(error || !articuloGuardado){
            return res.status(400).json({
                status:"error",
                mensaje:"No se ha guardado el articulo"
            })
        }else{
            return res.status(200).json({
                satatus:"succes",
                articulo: articuloGuardado,
                mensaje: "articulo guardado con exito"
            })
        }
    });

    return res.status(200).json({
        mensaje: "Guardado con exito",
        parametros
    })

    
}

module.exports = {
    prueba,
    crear
}