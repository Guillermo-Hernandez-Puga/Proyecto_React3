
import { useState } from "react";
import "./App.css";
import Listado from "./components/listado/Listado";
import { base } from "./components/baseColaboradores/BaseColaboradores";
import Buscador from "./components/buscador/Buscador";
import Formulario from "./components/formulario/Formulario";
import Alert from "./components/alert/Alert";

function App() {
  const [data, setbasedata] = useState(base);
  const [datosFilter, setdatosFilter] = useState(data);
  console.log(data);
  console.log(datosFilter);
  const [myAlert, setMyAlert] = useState({
    error: "",
    msg: "",
    color: "",
  });
  
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="table-responsive">
          <Buscador data={data} datosFilter={setdatosFilter} />
          <Listado
            data={data}
            setbasedata={setbasedata}
            datosFilter={datosFilter}
            setdatosFilter={setdatosFilter}
            className="form"
          />
        </div>
        <div className="ms-5 border bg-white formulario">
          <Formulario
            data={data}
            setbasedata={setbasedata}
            datosFilter={datosFilter}
            setdatosFilter={setdatosFilter}
            setMyAlert={setMyAlert}
          />
          {myAlert.msg && <Alert info={myAlert} />}
        </div>
      </div>
    </>
  );
}

export default App;