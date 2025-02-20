import React, { useEffect, useState } from 'react'
import './Pizza.css'
const Pizza = () => {
  const [info, setInfo] = useState([])
  const consumoApi = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    return setInfo(data)
  }
  useEffect(() => {
    consumoApi()
  }, [])
  return (
    <div className='container'>
      {info.map((pizza) => (
        <div className='card' key={pizza.id}>
          <h1>{pizza.name}</h1>
          <p>Precio ${pizza.price}</p>
          <ul className='lista'>
            {pizza.ingredients.map((ingre, index) => (
              <li key={index}>{ingre}</li>
            ))}
          </ul>
          <img className='imagen' src={pizza.img} alt={pizza.name} />
        </div>

      ))}
    </div>
  )
}

export default Pizza
