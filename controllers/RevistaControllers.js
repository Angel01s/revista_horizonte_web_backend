const where = require("sequelize");
const RevistaModel = require("../models/RevistaModels.js");
const EventoModel = require("../models/EventoModels.js");
//Mostrar todos los registros
module.exports = getAllAreasAndEvents = async (req, res) => {
    try {
        // Obtener todas las áreas
        const areas = await RevistaModel.findAll();
        
        // Obtener todos los eventos
        //const eventos = await EventoModel.findAll();

        const eventos6 = await EventoModel.findAll({
            where:{
                fecha:{
                    [Op.lte]: new Date() 
                }
            },
            order:[['fecha', 'desc']],
            limit: 1
        })
        
        // Enviar ambos en la respuesta
        res.json({
            areas: areas,
            //eventos: eventos,
            eventos6: eventos6,
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
module.exports = get6Events = async (req, res) =>{
    try{
        const eventos6 = await EventoModel.findAll({
            where:{
                fecha:{
                    [Op.lte]: new Date() 
                }
            },
            order:[['fecha', 'desc']],
            limit: 6
        })

    }catch(error){
        res.json({ message: error.message });
    }
}

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
        const area = await RevistaModel.findAll({
            where:{
                idarea:req.params.id
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
            where:{idarea:req.params.id}
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