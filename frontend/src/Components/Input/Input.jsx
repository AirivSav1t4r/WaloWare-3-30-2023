import "../Input/Input.css";
export const Input = (props) => {
    return (
      <>
        <input id={props.id} onBlur={props.onBlur} value={props.value} onChange={props.onChange} type={props.type} name="text" className={`${props.input} ${props.condicion} ${props.condicion2} ${props.condicion3}`} placeholder={props.entrada} />
        <button type={props.btnType} className={`microfono ${props.btnClassName} `} onClick={props.btnOnClick}>Micrófono</button>
      </>
    );
  };

  export const MensajeCampo = (props) => {
    return (
      <>   
         <label className="error-msg">{props.errorMessage}</label>
      </>
    );
  };

  export const InputBusqueda = (props) => {
    return (
      <>
        <input onBlur={props.onBlur} value={props.value} onChange={props.onChange} type={props.type} name="text" className={`${props.input}`} placeholder={props.entrada} />
  
      </>
    );
  };