import { useState } from "react";

const Formulario = ({ clientes, setClientes }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // Utilizamos un estado local para mantener el contador de IDs
  const [contadorId, setContadorId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !edad || !cargo) {
      setError(true);
      setMensaje("Todos los campos son obligatorios");
      return;
    } else {
      setError(false);

      // Generamos automáticamente el ID utilizando el contador
      const id = contadorId;

      // Incrementamos el contador para el próximo ID
      setContadorId(contadorId + 1);

      alert("Formulario enviado");

      // Creamos el objeto cliente
      const cliente = { id, name, email, edad, cargo };

      // Agregamos el cliente a la lista de clientes
      setClientes([...clientes, cliente]);

      // Limpiamos los campos del formulario
      setName("");
      setEmail("");
      setEdad("");
      setCargo("");
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
            type="text"
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
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
