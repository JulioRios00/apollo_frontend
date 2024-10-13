import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

interface ProductFiltersProps {
  nameFilter: string;
  setNameFilter: (value: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  sortOrdenation: string;
  setSortOrdenation: (value: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  nameFilter,
  setNameFilter,
  categoryFilter,
  setCategoryFilter,
  sortOrdenation,
  setSortOrdenation,
}) => {
  return (
    <Box sx={{ p: 1 }}>
      <TextField
        sx={{ m: 1 }}
        label="Filtrar por nome"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel shrink id="category-label">
          Filtrar por categorias
        </InputLabel>
        <Select
          label="Filtrar por categorias"
          labelId="category-label"
          id="category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">Todas as categorias</MenuItem>
          <MenuItem value="Smartphones">Smartphones</MenuItem>
          <MenuItem value="Móveis">Móveis</MenuItem>
          <MenuItem value="Eletrônicos">Eletrônicos</MenuItem>
          <MenuItem value="Eletroportáteis">Eletroportáteis</MenuItem>
          <MenuItem value="Geladeiras">Geladeiras</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel shrink id="sort-ordenation-label">
          Ordenar por
        </InputLabel>
        <Select
          label="Ordenar por"
          labelId="sort-ordenation-label"
          id="sort-ordenation"
          value={sortOrdenation}
          onChange={(e) => setSortOrdenation(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">Selecionar</MenuItem>
          <MenuItem value="alphabetical">Ordem Alfabética</MenuItem>
          <MenuItem value="priceAsc">Menor preço</MenuItem>
          <MenuItem value="priceDesc">Maior preço</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductFilters;
