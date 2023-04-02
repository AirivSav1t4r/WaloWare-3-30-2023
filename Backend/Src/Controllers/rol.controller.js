import { Rol } from'../Models/Rol.js';
export const getRol =async (req,res)=> {
    try {
        const rols = await Rol.findAll()
        res.json(rols)
        console.log('Se envio los datos')
    } catch (error) {
        return res.status(500).json({ message: error.message })   
    }
}


export const getRols =async(req,res) => {
    try {
        const{id}=req.params;
        const rol = await Rol.findOne({
            where:{
                id,
            },
        });
        if(!rol) return res.status(404).json({message: 'el rol no existe'})
        res.json(rol)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const createRol = async(req, res)=> {
    const{nombre,descripcion} = req.body 
    try {
        const newRol = await Rol.create({
            nombre,
            descripcion
    });
    res.json(newRol)
    console.log('Nuevo Rol creado')
    }    catch (error) {
    return res.status(500).json({ message: error.message })
}
}

export const updateRol =async (req,res) => {
    try {
        const {id}= req.params;
        const {nombre,descripcion}=req.body;

        const rol=await Rol.findByPk(id)
        rol.nombre=nombre;
        rol.descripcion=descripcion;
        await rol.save();

        res.json(rol);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const deleteRol = async (req,res) => {
    try {
        const {id}=req.params
        await Rol.destroy({
            where:{
                id,
            }
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}