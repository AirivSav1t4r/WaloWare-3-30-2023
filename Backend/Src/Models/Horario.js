import { DataTypes } from 'sequelize';
import {Datasequelize} from '../Database/database.js';
import { Empleado } from '../Models/Empleado.js'

/* tabla horario-Columnas*/
export const Horario=Datasequelize.define('Horario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fecha_inicio:{
        type:DataTypes.DATE 
    },
    fecha_fin:{
        type:DataTypes.DATE
    },
    tiempolabor:{
        type:DataTypes.STRING 
    },
},{
    timestamps: false
})

Horario.hasMany(Empleado,{
    foreignKey: 'horarioId',
    sourceKey:'id'
})

Empleado.belongsTo(Horario,{
    foreignKey: 'horarioId',
    targetId:'id'
})
