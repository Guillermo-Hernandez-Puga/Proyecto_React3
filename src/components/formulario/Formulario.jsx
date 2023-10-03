import { useState } from "react";

const Formulario = ({ clientes, setClientes }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  
  const [contadorId, setContadorId] = useState(4);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !edad || !cargo || !telefono) {
      setError(true);
      setMensaje("Todos los campos son obligatorios");
      return;
    } else {
      setError(false);

     
      const id = contadorId;

     
      setContadorId(contadorId + 1);

      alert("Formulario enviado");

      
      const cliente = { id, name, email, edad, cargo, telefono};

      
      setClientes([...clientes, cliente]);

      
      setName("");
      setEmail("");
      setEdad("");
      setCargo("");
      setTelefono("");
    }
  };

  return (
    <div className="w-50">
      <h1> Agregar Clientes</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 w-50">
          {error && <p className="text-danger">{mensaje}</p>}
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group mb-3 w-50">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group mb-3 w-50">
          <input
            type="number"
            name="edad"
            className="form-control"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="input-group mb-3 w-50">
          <input
            type="text"
            name="cargo"
            className="form-control"
            placeholder="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="input-group mb-3 w-50">
          <input
            type="text"
            name="telefono"
            className="form-control"
            placeholder="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
