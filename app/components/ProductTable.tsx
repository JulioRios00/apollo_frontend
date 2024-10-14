"use client";

import React, { useState, useEffect } from "react";
import api from "../services/api";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";

import { ProductFilter } from "../hooks/ProductSorterFilter";
import ProductFilters from "./ProductFilters";

interface Product {
  id: number;
  name: string;
  description: string;
  color: string;
  category_display: string;
  category: string;
  price: number;
  promotional_price: number;
}

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/products/").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const {
    filteredProducts,
    nameFilter,
    setNameFilter,
    categoryFilter,
    setCategoryFilter,
    sortOrdenation,
    setSortOrdenation,
  } = ProductFilter(products);

  const handleDeleteProduct = async (id: number) => {
    try {
      await api.delete(`/products/${id}/`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <Box>
      <Box>
        <Typography sx={{ textAlign: "center" }} variant="h3" component="h1">
          Lista de Produtos
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <ProductFilters
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          sortOrdenation={sortOrdenation}
          setSortOrdenation={setSortOrdenation}
        />
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Cor</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Promoção</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell>{product.category_display}</TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell>
                  {formatCurrency(product.promotional_price)}
                </TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
