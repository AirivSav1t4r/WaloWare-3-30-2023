import { Usuario } from "../Models/Usuario.js";
export const getUsuario = async(req,res) => {
    try {
        const usuario = await Usuario.findAll()
        res.json(usuario)
        console.log('Se envio los Datos')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const getUsuarios =async(req,res) => {
    try {
        const{id}= req.params;
        const usuario = await Usuario.findOne({
            where:{
                id,
            },
        });
        if(!usuario) return res.status(404).json({message:'el usuario no existe'})
        res.json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createUsuario = async(req,res) => {
    const{correo,contraseña} = req.body
    try {
        const newUsuario = await Usuario.create({
            correo,
            contraseña
        })
        res.json(newUsuario)
        console.log('Se creo el Usuario')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateUsuario = async(req,res)=>{
        try {
            const {id}= req.params;
            const {correo,contraseña}=req.body
            const usuario = await Usuario.findByPk(id)
            usuario.correo=correo;
            usuario.contraseña=contraseña;
            await usuario.save();

            res.json(usuario);
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

export const deleteUsuario = async(req,res) => {
    try {
        const{id} = req.params
        await Usuario.destroy({
            where:{
                id,
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
