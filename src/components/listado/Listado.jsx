import React from 'react';
import Card from "../Card/Card";
import { BaseColaboradores } from "../baseColaboradores/BaseColaboradores";

const Listado = ({ clientes }) => {
  // Combina los colaboradores de BaseColaboradores con los clientes
  const listaCompleta = [...BaseColaboradores, ...clientes];

  return (
    <>
      <h1>Lista de Colaboradores</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody >
          {listaCompleta.map((persona) => (
            <Card key={persona.id} cliente={persona} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listado;
