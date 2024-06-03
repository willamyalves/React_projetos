
import Button from './Button';
import './ImcForm.css';

const ImcForm = () => {
  return (
    <div className="container-form">
        <div className="container-form-inside">
          <h1>Calculadora de IMC</h1>
          <form className='form'>
            <label htmlFor="height" id='weight-label'>Altura:</label>
            <input 
            type="text" 
            id='height' 
            name='height' 
            placeholder='Exemplo: 1,75'
            />
            <label htmlFor="weight" id='weight-label'>Peso:</label>
            <input 
            type="text" 
            id='weight' 
            name='weight' 
            placeholder='Exemplo: 70,5'
            />
            <Button name={"Calcular"}/>
            <Button name={"Limpar"}/>
          </form>
        </div>
    </div>
  )
}

export default ImcForm