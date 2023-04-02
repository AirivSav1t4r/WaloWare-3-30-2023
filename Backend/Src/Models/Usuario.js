import { DataTypes } from "sequelize";
import { Datasequelize } from "../Database/database.js";
import { Rol } from "./Rol.js";

/* Tabla Usuario */
export const Usuario=Datasequelize.define('Usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    correo:{
        type:DataTypes.STRING,
    },
    contraseña:{
        type:DataTypes.STRING
    }  
},{
    timestamps:false
})

Usuario.hasMany(Rol,{
    foreignKey: 'usuarioId',
    sourceKey:'id'
})

Rol.belongsTo(Usuario,{
    foreignKey:'usuarioId',
    targetId:'id'
})
