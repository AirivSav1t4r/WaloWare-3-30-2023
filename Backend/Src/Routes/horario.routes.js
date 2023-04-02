import { Router } from 'express';
import { createHorario, deleteHorario, getHorario, getHorarios, updateHorario } from '../Controllers/horario.controller.js';

const router= Router()
router.get('/horario',getHorario)
router.post('/horario',createHorario)
router.put('/horario/:id', updateHorario)
router.delete('/horario/:id',deleteHorario)
router.get('/horario/:id',getHorarios)

export default router;