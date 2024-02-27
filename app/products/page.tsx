"use client";
import { useState, useEffect } from "react";
import ProductList from "@/components/product-list";

// Create the fetchAllProducts function
async function fetchAllProducts() {
  const response = await fetch("https://dummyjson.com/products", {
    method: "GET",
  });

  const result = await response.json();

  if (result && result.products && result.products.length) {
    return result.products;
  }

  return []; // Return an empty array in case of no products
}

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts on the client side
    const fetchProducts = async () => {
      const products = await fetchAllProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return <ProductList getAllProducts={() => Promise.resolve(products)} />;
}
