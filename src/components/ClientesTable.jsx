import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const ClientesTable = ({ clientes }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Data de Nascimento</th>
          <th>CEP</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.dataNascimento}</td>
            <td>{cliente.cep}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

ClientesTable.propTypes = {
  clientes: PropTypes.array.isRequired,
};

export default ClientesTable;
