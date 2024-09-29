import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./templates/Layout";
import Home from "./views/Home";
import NoPage from "./views/NoPage";
import Cardapio from "./views/Cardapio";
import Login from "./views/Login";
import Clientes from "./views/Clientes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cardapio" element={<Cardapio />} />
          <Route path="login" element={<Login />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
