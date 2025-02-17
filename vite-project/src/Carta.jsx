function Cartas() {
  return (
    <div className="cartas-container">
      {/* Carta 1 - Tarifa Nacional */}
      <div className="card">
        <div className="content">
          <div className="title">Tarifa Nacional</div>
          <div className="description">
            Ingreso, Acceso a los lagos, museo del caolín
          </div>
          <ul className="price-list">
            <li><strong>Adulto Mayor:</strong> $XX</li>
            <li><strong>Adulto:</strong> $XX</li>
            <li><strong>Niños:</strong> $XX</li>
          </ul>
        </div>
        <button className="BotonCarta">Ver detalles</button>
      </div>

      {/* Carta 2 - Tarifa Premium */}
      <div className="card">
        <div className="content">
          <div className="title">Tarifa Internacional</div>
          <div className="description">
            Ingreso, Acceso a los lagos, Museo del caolín
          </div>
          <ul className="price-list">
            <li><strong>Adulto Mayor:</strong> $XX</li>
            <li><strong>Adulto:</strong> $XX</li>
            <li><strong>Niños:</strong> $XX</li>
          </ul>
        </div>
        <button className="BotonCarta">Ver detalles</button>
      </div>
    </div>
  );
}

export default Cartas;
