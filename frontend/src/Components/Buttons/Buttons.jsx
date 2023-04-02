import "../Buttons/Btn.css";
import "../Buttons/BtnFluid.css";
export const Btn = (props) => {
  return (
    <>

      <button className={props.classBtn} style={{ backgroundColor: props.color }}>
        <span style={{ color: props.colortext }}>{props.btnnombre}</span>
        <div className={props.classBorder} style={{ border: props.border, width:props.ancho}}></div>
      </button>
    </>
  );
};

export const Btnfluid = (props) => {
  return (
    <>
<button className={props.className} onClick={props.onClick} onSubmit={props.onSubmit} type={props.type}>
    {props.btnnombre}
</button>
     
    </>
  );
};
