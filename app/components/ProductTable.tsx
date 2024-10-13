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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { ProductFilter } from "../hooks/ProductSorterFilter";
import ProductFilters from "./ProductFilters";

interface Product {
  id: number;
  name: string;
  description: string;
  color: string;
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

  return (
    <Box>
      <Box>
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
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.promotional_price}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
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
