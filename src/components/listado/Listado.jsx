import Card from "../Card/Card";

const Listado = ({ clientes }) => {
  return (
    <>
      <h1>Listado de Clientes</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>CORREO</th>
            <th>EDAD</th>
            <th>CARGO</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <Card key={index} cliente={cliente} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listado;