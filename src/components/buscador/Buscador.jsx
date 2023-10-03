

const Buscador = ({setName}) => {
  return (
    <div>
          <h1>Buscador de clientes</h1>
          
          <form >
              <label htmlFor="">Nombre</label>
              <input type="text" name="name" />
              <button>Buscar</button>
          </form>
    </div>
  )
}

export default Buscador