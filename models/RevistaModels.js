const db = require("../database/db.js");
const { DataTypes } = require("sequelize");

const RevistaModel = db.define('areas',{
    idarea: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    name:{
        type:DataTypes.STRING
    },
    foto:{
        type:DataTypes.STRING
    }
}, {
    tableName: 'areas', // Asegúrate de que el nombre de la tabla es correcto
    timestamps: false,  // Desactiva las columnas createdAt y updatedAt
  });
module.exports = RevistaModel;