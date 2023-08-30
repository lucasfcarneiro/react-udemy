const CarDetails = ({brand,km,color,newCar}) => { //O nome deve ser o mesmo que esta vindo pelo componente


  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro é novo</p>}

    </div>
  )
}

export default CarDetails;