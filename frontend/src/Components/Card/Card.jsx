import {  Btnfluid } from "../Buttons/Buttons.jsx";
import "../Card/Card.css";
import { Input, MensajeCampo } from "../Input/Input";

import { useState, useEffect } from "react";
import axios from "axios";

export const Card = () => {
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [empleados, setEmpleados] = useState([]);

  const [enviado, setEnviado] = useState(false);
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
  const [nombreTocado, setNombreTocado] = useState(false);
  const handleNombreBlur = () => {setNombreTocado(true);};
  const handleNombreChange = (e) => {setNombre(e.target.value);};

  const [apellidoTocado, setApellidoTocado] = useState(false);
  const handleApellidoBlur = () => {setApellidoTocado(true);};
  const handleApellidoChange = (e) => {setApellido(e.target.value);};

  const [emailTocado, setEmailTocado] = useState(false);
  const handleEmailBlur = () => {setEmailTocado(true);};
  const handleEmailChange = (e) => {setEmail(e.target.value);};

  const [telefonoTocado, setTelefonoTocado] = useState(false);
  const handleTelefonoBlur = () => {setTelefonoTocado(true);};
  const handleTelefonoChange = (e) => {setTelefono(e.target.value);};

  const [dniTocado, setDniTocado] = useState(false);
  const handleDniBlur = () => {setDniTocado(true);};
  const handleDniChange = (e) => {setDni(e.target.value);};
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
const [isRecordingN, setIsRecordingN] = useState(false);
const [isRecordingA, setIsRecordingA] = useState(false);
const [isRecordingE, setIsRecordingE] = useState(false);
const [isRecordingT, setIsRecordingT] = useState(false); 
const [isRecordingD, setIsRecordingD] = useState(false);    

  const handleVoiceInputN = () => {
  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  setIsRecordingN(true); // Actualizar estado para cambiar el color del botón

  recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    setNombre(result);
  };

  recognition.onend = () => {
    setIsRecordingN(false); // Actualizar estado para volver al color normal del botón
  }

  recognition.start();
  };

  const handleVoiceInputA = () => {
    const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      setIsRecordingA(true); // Actualizar estado para cambiar el color del botón

      recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1][0].transcript;
        setApellido(result);
      };

      recognition.onend = () => {
        setIsRecordingA(false); // Actualizar estado para volver al color normal del botón
      }

    recognition.start();
  };

  const handleVoiceInputE = () => {
    const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      setIsRecordingE(true); // Actualizar estado para cambiar el color del botón

      recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1][0].transcript;
        const formattedResult = result.toLowerCase().replace(/\s/g, '').replace('punto', '.').replace('arroba', '@');
        setEmail(formattedResult);
      };

      recognition.onend = () => {
        setIsRecordingE(false); // Actualizar estado para volver al color normal del botón
      }

    recognition.start();
  };

  const handleVoiceInputT = () => {
    const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      setIsRecordingT(true); // Actualizar estado para cambiar el color del botón

      recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1][0].transcript;
        const formattedResult = result.replace(/\s/g, '').replace(/guion/gi, '-');
        setTelefono(formattedResult);
      };

      recognition.onend = () => {
        setIsRecordingT(false); // Actualizar estado para volver al color normal del botón
      }


    recognition.start();
  };

  const handleVoiceInputD = () => {
    const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      setIsRecordingD(true); // Actualizar estado para cambiar el color del botón

      recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1][0].transcript;
        const formattedResult = result.replace(/\s/g, '').replace(/guion/gi, '-');
        setDni(formattedResult);
      };

      recognition.onend = () => {
        setIsRecordingD(false); // Actualizar estado para volver al color normal del botón
      }

    recognition.start();
  };
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
/*************************************************************************************************************************/
const handleLimpiar = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setDni("");
    setMensaje("");
    setNombreTocado(false);
    setApellidoTocado(false);
    setEmailTocado(false);
    setTelefonoTocado(false);
    setDniTocado(false);
    setEnviado(false)
  };
/*************************************************************************************************************************/
/*************************************************************************************************************************/
const handleSubmit = async (e) => {
  e.preventDefault();
  setEnviado(true);
// Validar nombre y apellido
  const nombreRegex = /[a-zA-Z]+$/;
  const apellidoRegex = /[a-zA-Z]+$/;
  const telefonoRegex = /^\d{9}$/;
  const dniRegex = /^\d{8}$/;



  if (!nombre || !apellido || !email || !telefono || !dni) {
      setMensaje("Todos los campos son requeridosss");
      return;
      }
      const usuarioRegistrado = empleados.find(
        (empleado) => empleado.dni === dni || empleado.email === email
      );
    
      if (usuarioRegistrado) {
        console.log(empleados);
        setMensaje("Este usuario ya está registrado");
        return;
      }
    
  if (!nombreRegex.test(nombre)) {
      setMensaje("Ingrese un nombre válido, sin números");
      return;
      }

  if (!apellidoRegex.test(apellido)) {
      setMensaje("Ingrese un apellido válido, sin números");
      return;
      }

  if (!telefonoRegex.test(telefono)) {
      setMensaje("Ingrese un número de teléfono válido (9 dígitos)");
      return;
      }

  if (!dniRegex.test(dni)) {
      setMensaje("Ingrese un DNI válido (8 dígitos)");
      return;
      }

  try {
        await axios.post("http://localhost:4000/empleado", {
          nombre,
          apellido,
          email,
          telefono,
          dni,
        });
        setMensaje("Empleado registrado con éxito");
        /*handleLimpiar();*/
      } catch (error) {
        console.log(error);
        setMensaje("Error en la Base de Datos");
      }
};

useEffect(() => {
  const obtenerEmpleados = async () => {
    try {
      const response = await axios.get("http://localhost:4000/empleado");
      setEmpleados(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  obtenerEmpleados();
}, [mensaje]);














  return (
    <>
      <div className="ContenedorCard">
      <form onSubmit={handleSubmit}>
        <div className="GrupoInput">
          <div className="ContenedorInput">
          <Input condicion={!nombre && nombreTocado ? "input error" : nombre ? "input success" : `input ${enviado && !nombre ? "input error" : ""}`}
                 condicion2={isRecordingN ? "recording" : ""}
                 entrada="Nombre"
                 value={nombre}
                 onBlur={handleNombreBlur}
                 onChange={handleNombreChange}
                 btnOnClick={handleVoiceInputN}
                 btnClassName={isRecordingN ? "recordingColor" : ""} 
                 btnType="button" // Agrega este atributo
                /><br></br>
                   {!nombre &&  nombreTocado && !isRecordingN &&  (<MensajeCampo errorMessage="Campo requerido"/>)}
          </div>
          <div className="ContenedorInput">
          <Input condicion={!apellido && apellidoTocado ? "input error" : apellido ? "input success" : `input ${enviado && !apellido ? "input error" : ""}`}
                 condicion2={isRecordingA ? "recording" : ""}
                 entrada="Apellido"
                 value={apellido}
                 onBlur={handleApellidoBlur}
                 onChange={handleApellidoChange}
                 btnOnClick={handleVoiceInputA}
                 btnClassName={isRecordingA ? "recordingColor" : ""} 
                 btnType="button"
                /><br></br>
                   {!apellido && apellidoTocado && !isRecordingA &&  (<MensajeCampo errorMessage="Campo requerido"/>)}
          </div>
          <div className="ContenedorInput">
          <Input condicion={!email && emailTocado ? "input error" : email ? "input success" : `input ${enviado && !email ? "input error" : ""}`}
                 condicion2={isRecordingE ? "recording" : ""}
                 entrada="Email"
                 value={email}
                 onBlur={handleEmailBlur}
                 onChange={handleEmailChange}
                 btnOnClick={handleVoiceInputE}
                 btnClassName={isRecordingE ? "recordingColor" : ""}
                 btnType="button" 
                /><br></br>
                   {!email && emailTocado && !isRecordingE && (<MensajeCampo errorMessage="Campo requerido"/>)}
          </div>
          <div className="ContenedorInput">
          <Input condicion={!telefono && emailTocado ? "input error" : telefono ? "input success" : `input ${enviado && !telefono ? "input error" : ""}`}
                 condicion2={isRecordingT ? "recording" : ""}
                 entrada="Telefono"
                 value={telefono}
                 onBlur={handleTelefonoBlur}
                 onChange={handleTelefonoChange}
                 btnOnClick={handleVoiceInputT}
                 btnClassName={isRecordingT ? "recordingColor" : ""}
                 btnType="button"
                /><br></br>
                   {!telefono && telefonoTocado  && !isRecordingT && (<MensajeCampo errorMessage="Campo requerido"/>)}
          </div>
          <div className="ContenedorInput">
          <Input condicion={!dni && dniTocado ? "input error" : dni ? "input success" : `input ${enviado && !dni ? "input error" : ""}`}
                 condicion2={isRecordingD ? "recording" : ""}
                 entrada="Dni"
                 type="number"
                 value={dni}
                 onBlur={handleDniBlur}
                 onChange={handleDniChange}
                 btnOnClick={handleVoiceInputD}
                 btnClassName={isRecordingD ? "recordingColor" : ""}
                 btnType="button"

                /><br></br>
                   {!dni && dniTocado &&  !isRecordingD && (<MensajeCampo errorMessage="Campo requerido"/>)}
          </div>
        </div>
     
        <div className="GrupoBtn">
          <div className="ContenedorBtn">
            <Btnfluid
              className="buttonfluid"
              type="submit"
              onSubmit={handleSubmit}
              btnnombre="Registrar"
            />
          </div>
          <div className="ContenedorBtn">
            <Btnfluid
              className="buttonfluid"
              onClick={handleLimpiar}
              type="button" 
              btnnombre="Limpiar" />
          </div>
          <div className="ContenedorBtn">
            <Btnfluid
              className="buttonfluid" 
              btnnombre="Actualizar" />
          </div>

          
        </div>
       {mensaje && <label className="mensaje">{mensaje}</label>}
        {/*{mensajeedit && <label className="mensaje">{mensajeedit}</label>} */}
        </form> 
      </div>

  
 
      
    </>
  );
};
