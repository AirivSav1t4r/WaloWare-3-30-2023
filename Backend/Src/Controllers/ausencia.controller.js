import { Ausencia } from "../Models/Ausencia.js";

export const getAusencia = async(req,res)=>{
    try {
        const ausencia = await Ausencia.findAll()
        res.json(ausencia)
        console.log('Datos enviados')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAusencias = async(req,res)=>{
    try {
        const{id}=req.params;
        const ausencia =await Ausencia.findOne({
            where:{
                id,
            }
        });
        if(!ausencia)return res.status(404).json({message:'El listado no existe'})
        res.json(ausencia)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createAusencia = async(req,res)=>{
    const {fecha,descripcion,motivo_ausencia,diasausentes} =req.body
    try {
        const newAusencia = await Ausencia.create({
            fecha,
            descripcion,
            motivo_ausencia,
            diasausentes
        });
    res.json(newAusencia)
    console.log('Ausencia Registrada')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateAusencia = async(req,res)=>{
    try {
        const {id}=req.params;
        const {fecha,descripcion,diasausentes}=req.body
        const ausencia =await Ausencia.findByPk(id)
        ausencia.fecha=fecha
        ausencia.descripcion=descripcion
        ausencia.diasausentes=diasausentes
        await ausencia.save()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteAusencia = async(req,res)=>{
    try {
        const {id} = req.params
        await Ausencia.destroy({
            where:{
                id,
            }
        })
        res.senStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }  
}
