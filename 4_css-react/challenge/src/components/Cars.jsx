import React from 'react'
import style from "./Cars.module.css"

const Cars = ({brand ,model ,year ,km}) => {

  return (
    <div>
          <div className = {style.carCard}>
          <h2>{brand}</h2>
          <p>Modelo: {model} </p>
          <p>Ano: {year}</p>
          <p>Km: {km}</p>
        </div>
    </div>
  )
}
export default Cars