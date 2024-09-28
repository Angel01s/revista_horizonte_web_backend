const where = require("sequelize");
const EventoModel = require("../models/EventoModels.js");
//Mostrar todos los registros
module.exports = getAllEventos = async (req, res) =>{
    try{
        const eventos = await EventoModel.findAll()
        res.json(eventos)
    }catch(error){
        res.json({message:error.message})
    }
}
//Mostrar un registro
module.exports = getEvento = async(req, res)=>{
    try{
        const evento = await EventoModel.findAll({
            where:{
                idevento:req.params.id
            }
        })
        res.json(evento)
    }catch(error){
        res.json({message:error.message})
    }
}
//Crear un registro
module.exports = createEvento = async(req,res)=>{
    try{
        await EventoModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch(error){
        res.json({message: error.message})
    }
}
//Actualizar un registro
module.exports = updateEvento = async(req,res)=>{
    try{
        await EventoModel.update(req.body,{
            where:{idevento:req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch(error){
        res.json({message: error.message})
    }
}
//Eliminar un registro
module.exports = deleteEvento = async(req,res)=>{
    try{
        await EventoModel.destroy({
            where:{idevento:req.params.id}
        })
    }catch(error){
        res.json({message:error.message})
    }
}