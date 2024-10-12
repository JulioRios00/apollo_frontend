import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Gerenciador de produtos</Link>
          </Typography>
          <Button component={Link} to="/add-product" color="inherit">
            Cadastrar Produto
          </Button>
          <Button component={Link} to="/product-list" color="inherit">
            Listar Produtos
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
