import { useState, useEffect } from "react";
import ClientesTable from "../components/ClientesTable";
import ClientesModal from "../components/ClientesModal";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const Clientes = () => {
  let [clientes, setClientes] = useState([]);
  const [show, setShow] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setClienteSelecionado(null);
    setShow(true);
  };

  const handleSaveCliente = async (cliente) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/clientes",
        cliente
      );

      setShow(false);
    } catch (error) {
      console.error("Erro ao adicionar cliente", error);
    }
  };

  useEffect(() => {
    const fetchClientes = async () => {
      const response = await axios.get("http://localhost:5000/clientes");
      setClientes(response.data);
    };
    fetchClientes();
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adicionar Cliente
      </Button>
      <ClientesTable clientes={clientes} />
      <ClientesModal
        show={show}
        handleClose={handleClose}
        handleSaveCliente={handleSaveCliente}
        clienteSelecionado={clienteSelecionado}
      />
    </>
  );
};

export default Clientes;
