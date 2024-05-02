import React, { useEffect, useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, Select, MenuItem, TextField } from '@material-ui/core';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products); // Set the fetched data from API
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = searchQuery
    ? products.filter(product =>
      product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : products;

  // Calculate total number of pages for filtered products
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  // Calculate starting index and ending index for current page
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Slice filtered products array to display only products for current page
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangePerPage = (event) => {
    setPerPage(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset page number when search query changes
  };

  return (
    <div>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedProducts.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button onClick={() => handleChangePage(page - 1)} disabled={page === 1}>Previous</Button>
        <Button onClick={() => handleChangePage(page + 1)} disabled={page === totalPages}>Next</Button>
        <Select
          value={perPage}
          onChange={handleChangePerPage}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Products;
