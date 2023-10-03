
const Card  = ({cliente}) => {
  
  return (

  <tr>
    <th scope="row"><span className="fw-normal">{cliente.id}</span></th>
    <td><span className="fw-normal">{cliente.name}</span></td>
    <td><span className="fw-normal">{cliente.email}</span></td>
    <td><span className="fw-normal">{cliente.edad}</span></td>
    <td><span className="fw-normal">{cliente.cargo}</span></td>
    <td><span className="fw-normal">{cliente.telefono}</span></td>
  </tr>
  );
}

export default Card