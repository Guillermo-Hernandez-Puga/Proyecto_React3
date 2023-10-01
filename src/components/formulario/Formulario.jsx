import { useState } from "react"



const Formulario = () => {
  const [id, setId] = useState ("")
  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  const [edad, setEdad] = useState ("")
  const [cargo, setCargo] = useState ("")
  const [error, setError] = useState (false)
  const [mensaje, setMensaje] = useState ("")
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!id || !name || !email || !edad || !cargo){
      setError(true)
      setMensaje("Todos los datos son Obligatorios")
      return;
    } else{
      setError(false)
      alert("Formulario enviado");
      setId("");
      setName("");
      setEmail("");
      setEdad("");
      setCargo("");
      const cliente = {id, name, email, edad,cargo};
      
  }
}

  return (
    <form className="f-form" onSubmit={handleSubmit} >

    <div className="input-group mb-3 w-50 ">
      <input
        type="id"
        name="id"
        className="form-control"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
     />
    </div>   
    <div className="input-group mb-3 w-50 ">
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="input-group mb-3 w-50 ">
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="email@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="input-group mb-3 w-50 " >
      <input
        type="edad"
        name="edad"
        className="form-control"
        placeholder="edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
    </div>
    <div className="input-group mb-3 w-50 ">
      <input
        type="cargo"
        name="cargo"
        className="form-control"
        placeholder="cargo"
       value={cargo}
       onChange={(e) => setCargo(e.target.value)}
      />  
    
    </div>
    {error && <p className="text-danger">{mensaje}</p>}   
    <button type="submit" className="btn btn-primary">Agregar</button>
     
  </form>
  )
}


export default Formulario