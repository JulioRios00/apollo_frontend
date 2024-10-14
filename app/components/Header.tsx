import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center', 
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}> 
          <Link href="/product-list" passHref legacyBehavior>
            <Button color="inherit" component="a"> 
              Listagem de Produtos
            </Button>
          </Link>

          <Link href="/add-new-product" passHref legacyBehavior>
            <Button color="inherit" component="a">
              Cadastrar Produto
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
