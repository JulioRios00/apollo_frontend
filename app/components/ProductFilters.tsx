import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { consts } from "../utils/constants";

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
        label={consts.productFilters.nameFilterLabel}
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel shrink id="category-label">
        {consts.productFilters.categoryFilterLabel}
        </InputLabel>
        <Select
          label={consts.productFilters.sortLabel}
          labelId="category-label"
          id="category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">{consts.productFilters.allCategories}</MenuItem>
          <MenuItem value="smartphones">{consts.item.smartphones}</MenuItem>
          <MenuItem value="furniture">{consts.item.furniture}</MenuItem>
          <MenuItem value="eletronics">{consts.item.eletronics}</MenuItem>
          <MenuItem value="portable_appliances">{consts.item.portable_appliances}</MenuItem>
          <MenuItem value="refrigerator">{consts.item.refrigerator}</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel shrink id="sort-ordenation-label">
        {consts.productFilters.sortLabel}
        </InputLabel>
        <Select
          label={consts.productFilters.sortLabel}
          labelId="sort-ordenation-label"
          id="sort-ordenation"
          value={sortOrdenation}
          onChange={(e) => setSortOrdenation(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">{consts.productFilters.selectBy}</MenuItem>
          <MenuItem value="alphabetical">{consts.productFilters.alphabetical}</MenuItem>
          <MenuItem value="priceAsc">{consts.productFilters.priceAsc}</MenuItem>
          <MenuItem value="priceDesc">{consts.productFilters.priceDesc}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductFilters;
