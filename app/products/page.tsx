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

export default async function Products() {
  const products = await fetchAllProducts();

  return <ProductList products={products} />;
}
