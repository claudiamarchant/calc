
/* {props.children} etiquetas de apertura o cierre
{`btn-cont ${}`}> js para utilizar 
if op es children = true - else false 
en js - isNaN para validar si es num 
para espacios agregar trim or trimEnd - se llama al final 
al resultado total 
() =>  funcion anonima - para llamarla 
() no toma parametros, pero retorna => valor 
tambien se pueden usar if or else */
import '../stylesheet/Btn.css';

function Btn(props){

  const isOp = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
    return(
      <button className={`btn-cont ${isOp(props.children) ? 'op' : null}`}
      onClick={() => props.manejarClic(props.children)}>
        {props.children} 
      </button>

    );
}

export default Btn;