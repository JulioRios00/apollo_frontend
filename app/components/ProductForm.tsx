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

import { consts } from "../utils/constants";

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

    try {
      await api.post("/products/", product);
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
      setError(consts.productForm.errorMessage);
      console.error(error);
    }
    console.log(product);
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
        {consts.productForm.title}
      </Typography>
      <TextField
        label={consts.productForm.nameLabel}
        name="name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <TextField
        label={consts.productForm.descriptionLabel}
        name="description"
        value={product.description}
        onChange={handleChange}
        required
      />
      <TextField
        label={consts.productForm.colorLabel}
        name="color"
        value={product.color}
        onChange={handleChange}
        required
      />
      <FormControl fullWidth>
        <InputLabel id="category-label">
          {consts.productForm.categoryLabel}
        </InputLabel>
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
          <MenuItem value={"smartphones"}>{consts.item.smartphones}</MenuItem>
          <MenuItem value={"furniture"}>{consts.item.furniture}</MenuItem>
          <MenuItem value={"eletronics"}>{consts.item.eletronics}</MenuItem>
          <MenuItem value={"portable_appliances"}>
            {consts.item.portable_appliances}
          </MenuItem>
          <MenuItem value={"refrigerator"}>{consts.item.refrigerator}</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label={consts.productForm.priceLabel}
        name="price"
        value={product.price}
        onChange={handleChange}
        type="number"
        required
      />
      <Button type="submit" color="primary">
        {consts.productForm.submitButton}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity={severity}>
          {severity === "success" ? consts.productForm.successMessage : error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductForm;
