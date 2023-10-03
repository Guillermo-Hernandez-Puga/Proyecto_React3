
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Buscador = ({ data, datosFilter }) => {
  const valorBuscar = (e) => {
    const buscar = e.target.value.toLowerCase();
    const buscarFilter = data.filter(
      (persona) =>
        persona.nombre.toLowerCase().includes(buscar) ||
        persona.email.toLowerCase().includes(buscar) ||
        persona.edad.toLowerCase().includes(buscar) ||
        persona.cargo.toLowerCase().includes(buscar) ||
        persona.telefono.toLowerCase().includes(buscar)
    );
    
    datosFilter(buscarFilter)
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          id="buscador"
          name="buscador"
          placeholder="Buscar un colaborador"
          aria-label="Buscar un colaborador"
          aria-describedby="basic-addon2"
          onChange={valorBuscar}
        /> 
      </InputGroup>
    </div>
  );
};

export default Buscador;