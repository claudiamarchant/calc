/*componente funcional flecha
{props.children} - si es valor fijo

se asigna para que se llame desde el js */
import '../stylesheet/BtnClear.css'

const BtnClear = (props) => (
  <div className='btn-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BtnClear;