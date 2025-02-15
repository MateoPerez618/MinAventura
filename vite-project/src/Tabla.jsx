import Table from "react-bootstrap/Table";
import "./App.css"; // Asegúrate de importar los estilos

function Tabla() {
  return (
    <Table striped bordered hover className="custom-table">
      <thead>
        <tr>
          <th>Fechas</th>
          <th>Horas Ingreso</th>
          <th>Horas Salida</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lunes-Martes</td>
          <td>8:00Am</td>
          <td>5:00Pm</td>
        </tr>
        <tr>
          <td>Jueves-Viernes</td>
          <td>8:00Am</td>
          <td>5:00Pm</td>
        </tr>
        <tr>
           <td>Sabados-Domingos y festivos</td>
           <td>10:00Am</td>
           <td>6:00Pm</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabla;
