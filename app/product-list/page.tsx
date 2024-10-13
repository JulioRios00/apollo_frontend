import React from "react";
import ProductTable from "../components/ProductTable";
import { Box, Typography } from "@mui/material";

const ProductList: React.FC = () => {
  return (
    <Box>
      <Typography sx={{ m: 2 }} variant="h3" component="h1" gutterBottom>
        Lista de Produtos
      </Typography>
      <ProductTable />
    </Box>
  );
};

export default ProductList;
