import { useState, useEffect, ReactNode } from "react";

interface Product {
  category_display: ReactNode;
  id: number;
  name: string;
  description: string;
  color: string;
  category: string;
  price: number;
  promotional_price: number;
}

export const ProductFilter = (products: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [sortOrdenation, setSortOrdenation] = useState<string>("");

  useEffect(() => {
    applyFilterAndSort();
  }, [nameFilter, categoryFilter, sortOrdenation, products]);

  const applyFilterAndSort = () => {
    let filteredItems = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        (categoryFilter ? product.category.toLowerCase() === categoryFilter.toLowerCase(): true)
      );
    });

    if (sortOrdenation === "alphabetical") {
      filteredItems = filteredItems.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortOrdenation === "priceAsc") {
      filteredItems = filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortOrdenation === "priceDesc") {
      filteredItems = filteredItems.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filteredItems);

  };
  return {
    filteredProducts,
    nameFilter,
    setNameFilter,
    sortOrdenation,
    setSortOrdenation,
    categoryFilter,
    setCategoryFilter,
  }
};
