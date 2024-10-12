import React, { useState } from "react";
import api from "../services/api";

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    color: "",
    category: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/products/", product);
      setProduct({
        name: "",
        description: "",
        color: "",
        category: "",
        price: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Nome do produto"
        required
      />
      <input
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Descrição do produto"
        required
      />
      <input
        name="color"
        value={product.color}
        onChange={handleChange}
        placeholder="Cor do produto"
        required
      />
      <input
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Categoria do produto"
        required
      />
      <input
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Preço do produto"
        required
        type="number"
      />
    </form>
  );
};
