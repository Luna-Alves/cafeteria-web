import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const ClientesModal = ({
  show,
  handleClose,
  handleSaveCliente,
  clienteSelecionado,
}) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
    cep: "",
  });

  useEffect(() => {
    if (clienteSelecionado) {
      setFormData({
        nome: clienteSelecionado.nome,
        email: clienteSelecionado.email,
        dataNascimento: clienteSelecionado.dataNascimento,
        cep: clienteSelecionado.cep,
      });
    } else {
      setFormData({ nome: "", email: "", dataNascimento: "", cep: "" });
    }
  }, [clienteSelecionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.nome ||
      !formData.email ||
      !formData.dataNascimento ||
      !formData.cep
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    handleSaveCliente({
      ...formData,
      id: clienteSelecionado ? clienteSelecionado.id : null,
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome do cliente"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite o email do cliente"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDataNascimento">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCEP">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o CEP"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              required
              pattern="\d{5}-\d{3}"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Adicionar Cliente
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

ClientesModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSaveCliente: PropTypes.func.isRequired,
  clienteSelecionado: PropTypes.object,
};

export default ClientesModal;
