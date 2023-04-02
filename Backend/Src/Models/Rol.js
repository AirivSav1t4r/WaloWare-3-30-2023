import { DataTypes } from 'sequelize';
import { Datasequelize } from "../Database/database.js";
export const Rol = Datasequelize.define('Rol',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
     nombre:{
            type:DataTypes.STRING,
        },
    descripcion:{
        type:DataTypes.STRING
    },
},{
    timestamps:false
})
