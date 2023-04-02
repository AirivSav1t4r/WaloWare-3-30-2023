import { Asistencia } from "../Models/Asistencia.js";

export const getAsistencia = async(req,res)=>{
    try {
        const asistencia = await Asistencia.findAll()
        res.json(asistencia)
        console.log('Se envio los Datos')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAsistencias = async(req,res)=>{
    try {
        const{id}=req.params;
        const asistencia = await Asistencia.findOne({
            where:{
                id,
            }
        });
        if(!asistencia) return res.status(404).json ({message: 'El asistente no existe'})
        res.json(asistencia)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createAsistencia = async(req,res)=>{
    const {horallegada,horasalida}=req.body
    try {
        const newAsistencia = await Asistencia.create({
            horallegada,
            horasalida
        });
        res.json(newAsistencia)
        console.log('Se creo los Datos')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateAsistencia = async(req,res)=>{
    try {
        const{id}=req.params;
        const{horallegada,horasalida}=req.body
        const asistencia =await Asistencia.findByPk(id)
        asistencia.horallegada=horallegada
        asistencia.horasalida=horasalida
        await asistencia.save()
        res.json(asistencia)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteAsistencia = async(req,res)=>{
    try {
        const{id}=req.params
        await Asistencia.destroy({
            where:{
                id,
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}