const express = require("express");
const cors = require("cors");
const db = require("./database/db.js");
const revistaRoute = require("./routes/routes.js");

const appAreas = express();
appAreas.use(cors());
appAreas.use(express.json());
appAreas.use(revistaRoute);
// const appEventos = express();
// appEventos.use(cors());
// appEventos.use(express.json());
// appEventos.use('/eventos', revistaRoute);
/*app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})*/
async function startServer() {
try{
    await db.authenticate();
    console.log('Conexion exitosa a la DB');
}catch(error){
    console.log('El error de conexion es: ${error}')
}
}
appAreas.listen(8000,()=>{
    console.log('Server UP running in http://localhost:8000/')
});
// appEventos.listen(8000,()=>{
//     console.log('Server UP running in http://localhost:8000/')
// });