const db = require("../database/db.js");
const { DataTypes } = require("sequelize");

const EventoModel = db.define('evento',{
    idevento: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    titulo:{
        type:DataTypes.STRING
    },
    idarea:{
        type:DataTypes.INTEGER
    },
    descripcion:{
        type:DataTypes.STRING
    },
    fecha:{
        type:DataTypes.DATE
    },
    idautor:{
        type:DataTypes.INTEGER
    },
    foto:{
        type:DataTypes.STRING
    },
    hora:{
        type:DataTypes.TIME
    },
    lugar:{
        type:DataTypes.STRING
    },
    pais:{
        type:DataTypes.STRING
    }
}, {
    tableName: 'evento', // Asegúrate de que el nombre de la tabla sea correcto
    timestamps: false,  // Desactiva las columnas createdAt y updatedAt
  });
module.exports = EventoModel;