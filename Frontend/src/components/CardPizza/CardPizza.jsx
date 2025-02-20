const CardPizza = ({ nombre, precio, ingredientes, imagen }) => {
  return (
    <div className='card ' style={{ width: '18rem' }}>
      <img src={imagen} className='card-img-top' alt={nombre} />
      <div className='card-body'>
        <h5 className='card-title'>{nombre}</h5>
        <p className='card-text'>Precio: ${precio.toLocaleString('es-ES')}</p>
        <p className='card-text'>🍕 Ingredientes 🍕
          <ul>
            {ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </p>
        <div className='d-flex justify-content-around'>
          <a href='#' className='btn btn-outline-dark'>
            Ver más 👀
          </a>
          <a href='#' className='btn btn-dark ms-2'>
            Añadir 🛒
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
