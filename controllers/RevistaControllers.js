const where = require("sequelize");
const RevistaModel = require("../models/RevistaModels.js");
//Mostrar todos los registros
module.exports = getAllAreas = async (req, res) =>{
    try{
        const areas = await RevistaModel.findAll()
        res.json(areas)
    }catch(error){
        res.json({message:error.message})
    }
}
//Mostrar un registro
module.exports = getArea = async(req, res)=>{
    try{
        const area = RevistaModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(area)
    }catch(error){
        res.json({message:error.message})
    }
}
//Crear un registro
module.exports = createArea = async(req,res)=>{
    try{
        await RevistaModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch(error){
        res.json({message: error.message})
    }
}
//Actualizar un registro
module.exports = updateArea = async(req,res)=>{
    try{
        await RevistaModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch(error){
        res.json({message: error.message})
    }
}
//Eliminar un registro
module.exports = deleteArea = async(req,res)=>{
    try{
        await RevistaModel.destroy({
            where:{id:req.params.id}
        })
    }catch(error){
        res.json({message:error.message})
    }
}