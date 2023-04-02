import { Router } from 'express';
import { createRol, deleteRol, getRol, getRols, updateRol } from '../Controllers/rol.controller.js'
const router=Router()
router.get('/rol',getRol)
router.post('/rol',createRol)
router.delete('/rol/:id',deleteRol)
router.put('/rol/:id',updateRol)
router.get('/rol/:id',getRols)

export default router;