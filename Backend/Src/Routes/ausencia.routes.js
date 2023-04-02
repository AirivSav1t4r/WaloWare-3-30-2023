import { Router } from 'express';
import { createAusencia, deleteAusencia, getAusencia, getAusencias, updateAusencia } from '../Controllers/ausencia.controller.js';

const router= Router()
router.get('/ausencia',getAusencia)
router.post('/ausencia',createAusencia)
router.put('/ausencia/:id', updateAusencia)
router.delete('/ausencia/:id',deleteAusencia)
router.get('/ausencia/:id',getAusencias)

export default router;