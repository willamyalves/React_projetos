import './ResultForm.css'

const ResultForm = () => {
  return (
    <div className="container-result">
        <h2>Seu IMC: </h2>
        <p>Situação atual: </p>
        <h3>Confira as classificações</h3>
        <div className="imcTable">
          <p>IMC</p>
          <p>Classificação</p>
          <p>Obesidade</p>
        </div>
    </div>
  )
}

export default ResultForm