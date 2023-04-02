import { DataTypes } from 'sequelize';
import { Datasequelize } from "../Database/database.js";
import {Usuario} from "../Models/Usuario.js"

/* Tabla Empleado y sus respectivos valores */
export const Empleado=Datasequelize.define('Empleado',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    apellido:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING    
    },
    telefono:{
        type:DataTypes.INTEGER(9)
    },
    dni:{
        type:DataTypes.INTEGER(8)
    },
},{
    timestamps:false
})

/* llaves foraneas--Relacion */

Empleado.hasMany(Usuario,{
    foreignKey: 'empleadoId',
    sourceKey:'id'
})

Usuario.belongsTo(Empleado,{
    foreignKey: 'empleadoId',
    targetId:'id'
})


