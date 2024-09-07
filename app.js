const express = require("express");
const cors = require("cors");
const db = require("./database/db.js");
const revistaRoute = require("./routes/routes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/areas', revistaRoute);
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
app.listen(8000,()=>{
    console.log('Server UP running in http://localhost:8000/')
});