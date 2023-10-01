import Alert from "./components/alert/Alert"
import Buscador from "./components/buscador/Buscador"
import Formulario from "./components/formulario/Formulario"
import Listado from "./components/listado/Listado"


const App = () => {
  return (
    <div className="container">
      <Buscador/>
      <Formulario/>
      <Alert/>
      <Listado/>
    </div>
  )
}

export default App
