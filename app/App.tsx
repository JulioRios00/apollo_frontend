import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import { CssBaseline, Container } from "@mui/material"; // Importando CssBaseline e Container

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline /> {/* Adiciona estilos CSS básicos */}
      <Header />
      <Container sx={{ marginTop: 2 }}> {/* Adicionando espaçamento acima do conteúdo */}
        <Routes>
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/product-list" element={<ProductTable />} />
          <Route path="/" element={<ProductTable />} /> {/* Página inicial */}
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
