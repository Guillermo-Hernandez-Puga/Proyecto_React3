import { useState } from "react"


import Formulario from "./components/formulario/Formulario"
import Listado from "./components/listado/Listado"
import Buscador from "./components/buscador/Buscador"



const App = () => {
  const [clientes, setClientes] = useState([])
  return (
    <div className="container">
       <Buscador/>
      <Formulario clientes={clientes} setClientes={setClientes}/>

      <Listado clientes={clientes}/>
      
    </div>
  )
}

export default App
