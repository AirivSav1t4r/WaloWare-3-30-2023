import  express  from "express";
import cors from "cors";
import rolRoutes from "../Routes/rol.routes.js";
import usuarioRoutes from "../Routes/usuario.routes.js";
import EmpleadoRoutes from "../Routes/empleado.routes.js";
import AsistenciaRoutes from "../Routes/asistencia.routes.js";
import AusenciasRoutes from "../Routes/ausencia.routes.js"
import HorarioRoutes  from "../Routes/horario.routes.js";

 const Servidor= express();
//middlewares
 Servidor.use(cors());
 Servidor.use(express.json())

 Servidor.use(usuarioRoutes)
 Servidor.use(rolRoutes)
 Servidor.use(EmpleadoRoutes)
 Servidor.use(AsistenciaRoutes)
 Servidor.use(AusenciasRoutes)
 Servidor.use(HorarioRoutes)

export default Servidor;
