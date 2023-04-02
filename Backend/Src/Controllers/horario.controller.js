import { Horario } from "../Models/Horario.js"

export const getHorario = async (req, res) => {
    try {
        const horario = await Horario.findAll()
        res.json(horario)
        console.log('Se envio los Datos')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}

export const getHorarios = async (req, res) => {
    try {
        const{id}= req.params;
        const horario = await Horario.findOne({
            where:{
                id,
            },
        });
        if(!horario) return res.status(404).json({message: ' el Horario no existe'})
     res.json(horario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}

export const createHorario = async (req, res) => {
    const { fecha_inicio, fecha_fin, tiempolabor } = req.body
    try {
        const newHorario = await Horario.create({
            fecha_inicio,
            fecha_fin,
            tiempolabor
        });

        res.json(newHorario)
        console.log('Se creo el Horario')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateHorario = async (req, res) => {
    try {
        const {id}= req.params;
        const {fecha_inicio, fecha_fin, tiempolabor }=req.body
        const horario =await Horario.findByPk(id)
        horario.fecha_inicio=fecha_inicio
        horario.fecha_fin=fecha_fin
        horario.tiempolabor=tiempolabor
        await horario.save()
        res.json(horario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteHorario = async (req, res) => {
    try {
        const {id}= req.params
        await Horario.destroy({
            where:{
                id,
            }
        })
   
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}