"use client";

import React, { useState } from "react";
import api from "../services/api";
import {
  Box,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    color: "",
    category: "",
    price: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false); 
  const [severity, setSeverity] = useState<"success" | "error">("success"); 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    setProduct({ ...product, [e.target.name as string]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let parsedPrice = product.price.replace(/[.,]/g, "").replace(",", ".");

    try {
      await api.post("/products/", {...product, price: parsedPrice});
      setProduct({
        name: "",
        description: "",
        color: "",
        category: "",
        price: "",
      });
      setOpen(true);
      setSeverity("success");
    } catch (error) {
      setSeverity("error");
      setOpen(true);
      setError("Erro ao cadastrar o produto. Tente novamente");
      console.error(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
        margin: "auto",
        height: "100vh",
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Cadastro de produto
      </Typography>
      <TextField
        label="Nome do produto"
        name="name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Descrição do produto"
        name="description"
        value={product.description}
        onChange={handleChange}
        required
      />
      <TextField
        label="Cor do produto"
        name="color"
        value={product.color}
        onChange={handleChange}
        required
      />
      <FormControl fullWidth>
        <InputLabel id="category-label">Categoria</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          name="category"
          value={product.category}
          label="category"
          onChange={(e) =>
            setProduct({
              ...product,
              category: e.target.value as string,
            })
          }
        >
          <MenuItem value={"smartphones"}>Smartphones</MenuItem>
          <MenuItem value={"furniture"}>Móveis</MenuItem>
          <MenuItem value={"eletronics"}>Eletrônicos</MenuItem>
          <MenuItem value={"portable_appliances"}>Eletroportáteis</MenuItem>
          <MenuItem value={"refrigerator"}>Geladeiras</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Preço"
        name="price"
        value={product.price}
        onChange={handleChange}
        type="number"
        required
      />
      <Button type="submit" color="primary">
        Cadastrar produto
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity={severity}>
          {severity === "success" ? "Produto cadastrado com sucesso" : error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductForm;
