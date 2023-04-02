import { Router } from 'express';
import { createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario } from '../Controllers/controller.usuario.js';

const router= Router()
router.get('/usuario',getUsuario)
router.post('/usuario',createUsuario)
router.put('/usuario/:id', updateUsuario)
router.delete('/usuario/:id',deleteUsuario)
router.get('/usuario/:id',getUsuarios)

export default router;