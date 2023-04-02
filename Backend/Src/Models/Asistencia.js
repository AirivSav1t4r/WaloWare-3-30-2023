import { DataTypes } from "sequelize";
import { Datasequelize } from "../Database/database.js";
import { Empleado } from "../Models/Empleado.js";


/* tabla Asistencia-Columnas */
export const Asistencia=Datasequelize.define('Asistencia',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    horallegada:{
        type:DataTypes.DATE
    },
    horasalida:{
        type:DataTypes.DATE
    },
},{
    timestamps:false
})


/* llaves foraneas */

Asistencia.hasMany(Empleado,{
    foreignKey: 'asistenciaId',
    sourceKey:'id'
})

Empleado.belongsTo(Asistencia,{
    foreignKey: 'asistenciaId',
    targetId:'id'
})
