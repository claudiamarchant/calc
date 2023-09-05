import './App.css';
import logo from './img/reward.png';
import Btn from './comp/Btn';
import Pantalla from './comp/Pantalla';
import BtnClear from './comp/BtnClear';
import { useState } from 'react';
/*agregar paquete externo a js 
mathjs - librebria para calcular */
import { evaluate } from 'mathjs';

/* () - llamar a la funcion y pasarle resultados
{} - llamar directamente a la funcion*/

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularRes = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("ingresar valor");
    }
  };

  return (
    <div className='App'>
      <div className='logo-cont'>
        <img 
          src={logo}
          className='logo'
          alt='img' />
      </div>

      <div className='cont-calc'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Btn manejarClic={agregarInput}>1</Btn>
          <Btn manejarClic={agregarInput}>2</Btn>
          <Btn manejarClic={agregarInput}>3</Btn>
          <Btn manejarClic={agregarInput}>+</Btn>
        </div>
        <div className='fila'>
        <Btn manejarClic={agregarInput}>4</Btn>
        <Btn manejarClic={agregarInput}>5</Btn>
        <Btn manejarClic={agregarInput}>6</Btn>
        <Btn manejarClic={agregarInput}>-</Btn>
        </div>
        <div className='fila'>
        <Btn manejarClic={agregarInput}>7</Btn>
        <Btn manejarClic={agregarInput}>8</Btn>
        <Btn manejarClic={agregarInput}>9</Btn>
        <Btn manejarClic={agregarInput}>*</Btn>
        </div>
        <div className='fila'>
        <Btn manejarClic={calcularRes}>=</Btn>
        <Btn manejarClic={agregarInput}>0</Btn>
        <Btn manejarClic={agregarInput}>.</Btn>
        <Btn manejarClic={agregarInput}>/</Btn>
        </div>
        <div className='fila'>
          <BtnClear manejarClear={() => setInput('')}>
            Limpiar</BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;

/*<BtnClear manejarClear={() => setInput('')}>Limpiar</BtnClear>
se puede agregar directamente para funciones sencillas */
