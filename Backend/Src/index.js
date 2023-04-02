
import Servidor from "../Src/Server/servidor.js";

import { Datasequelize } from "./Database/database.js";

async function main() {
  try {
    await Datasequelize.sync({force:true})
    Servidor.listen(4000);
    console.log("El servidor se esta Ejecutando en el puerto(",4000,")")
  } catch (error) {
    console.log("Error de Conexion!!! Verifica en la Carpeta Database si tienes la Base de Datos Creado");
  }
}
main();
