/*otra alternativa de crear componentes
  {input} lo que se pasa */
import '../stylesheet/Pantalla.css'

const Pantalla = ({ input }) => (
  <div className = 'input'>
    {input}
  </div>
);

export default Pantalla;