function Cartas() {
  return (
    <div className="cartas-container">
      {/* Carta 1 - Tarifa Nacional */}
      <div className="card">
        <div className="content">
          <div className="title">Tour Normal</div>
          <div className="description">
            Incluye acceso a: El museo del caolín, los muelles, mirador panorámico y la zona de los pequeños mineros.
          </div>
          <ul className="price-list">
            <li><strong>Adulto Mayor:</strong> $45.000</li>
            <li><strong>Adulto:</strong> $60.000</li>
            <li><strong>Niños:</strong> $45.000</li>
          </ul>
        </div>
        <button className="BotonCarta">Ver detalles</button>
      </div>

      {/* Carta 2 - Tarifa Premium */}
      <div className="card">
        <div className="content">
          <div className="title">Tour Premium</div>
          <div className="description">
             Incluye acceso a: El museo del caolín, los muelles, mirador panorámico y la zona de los pequeños mineros, Guia tuistico personal y acceso al taller alfareria.
          </div>
          <ul className="price-list">
            <li><strong>Adulto Mayor:</strong> $60.000</li>
            <li><strong>Adulto:</strong> $80.000</li>
            <li><strong>Niños:</strong> $60.000</li>
          </ul>
        </div>
        <button className="BotonCarta">Ver detalles</button>
      </div>
    </div>
  );
}

export default Cartas;
