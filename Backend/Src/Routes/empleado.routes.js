import { Router } from "express";
import { createEmpleado, deleteEmpleado, getEmpleado, getEmpleados, updateEmpleado } from "../Controllers/empleado.controller.js";

const router=Router()
router.get('/empleado',getEmpleado)
router.post('/empleado',createEmpleado)
router.put('/empleado/:id', updateEmpleado)
router.delete('/empleado/:id',deleteEmpleado)
router.get('/empleado/:id',getEmpleados)

export default router;