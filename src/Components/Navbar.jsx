import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ecommerce
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/products" color="inherit">Products</Button>
        <ShoppingCartIcon/>
        <Button component={Link} to="/login" color="inherit">Login</Button>
        <Button component={Link} to="/register" color="inherit">Register</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;