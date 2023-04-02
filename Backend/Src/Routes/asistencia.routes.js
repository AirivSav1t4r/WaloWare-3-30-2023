import { Router } from "express";
import { createAsistencia, deleteAsistencia, getAsistencia, getAsistencias, updateAsistencia } from "../Controllers/asistencia.controller.js";

const router=Router()
router.get('/asistencia',getAsistencia)
router.post('/asistencia',createAsistencia)
router.put('/asistencia/:id', updateAsistencia)
router.delete('/asistencia/:id',deleteAsistencia)
router.get('/asistencia/:id',getAsistencias)

export default router;