import { DataTypes } from 'sequelize';
import {Datasequelize} from '../Database/database.js';
import { Empleado } from '../Models/Empleado.js'

export  const Ausencia=Datasequelize.define('Ausencia',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fecha:{
        type:DataTypes.DATE
    },
    descripcion:{
        type:DataTypes.STRING
    },
    motivo_asusencia:{
        type:DataTypes.TEXT
    },
    diasausentes:{
        type:DataTypes.INTEGER
    },
},{
    timestamps:false
})   

/* llaves foraneas */

Ausencia.hasMany(Empleado,{
    foreignKey: 'ausenciasId',
    sourceKey:'id'
})

Empleado.belongsTo(Ausencia,{
    foreignKey: 'ausenciasId',
    targetId:'id'
})