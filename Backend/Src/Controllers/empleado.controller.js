import { Empleado } from "../Models/Empleado.js"
    export const getEmpleado = async(req,res)=>{
        try {
            const empleado = await Empleado.findAll()
            res.json(empleado)
            console.log('Se envio los datos')
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    export const getEmpleados = async(req,res)=>{
        try {
            const{id}=req.params;
            const empleado=await Empleado.findOne({
                where:{
                    id,
                }
            });
            if(!empleado)return res.status(404).json({message:'el empleado que busca no existe'})
            res.json(empleado)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    export const createEmpleado = async(req,res)=>{
        const {nombre,apellido,email,telefono,dni} = req.body
        try {
            const newEmpleado =await Empleado.create({
                nombre,
                apellido,
                email,
                telefono,
                dni
            })

            res.json(newEmpleado)
            console.log('Se añadio un Nuevo Empleado')
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    export const updateEmpleado = async(req,res)=>{
        try {
            const {id}= req.params;
            const {nombre,apellido,email,telefono,dni}=req.body
            const empleado =await Empleado.findByPk(id)
            empleado.nombre=nombre
            empleado.apellido=apellido
            empleado.email=email
            empleado.telefono=telefono
            empleado.dni=dni
            await empleado.save()
            res.json(empleado)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    export const deleteEmpleado = async(req,res)=>{
        try {
            const {id}=req.params
            await Empleado.destroy({
                where:{
                    id,
                }
            })

            res.sendStatus(204)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        } 
    }