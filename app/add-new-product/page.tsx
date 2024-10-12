import React from 'react';
import ProductForm from '../components/ProductForm';
import { Box, Typography } from '@mui/material';

const AddProduct: React.FC = () => {
  return (
    <Box>
      <Typography variant='h3' component='h1' gutterBottom>
        Cadastro de produto
      </Typography>
      <ProductForm />
    </Box>
  );
};

export default AddProduct;