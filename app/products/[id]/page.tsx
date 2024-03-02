import Link from "next/link";
import { Product } from "@/components/product-list";

interface ProductDetailsProps {
  params: {
    id: number;
  };
}

async function fetchProductDetails(id: number) {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "GET",
  });

  const result = await response.json();
  return result;
}

async function ProductDetails({ params }: ProductDetailsProps) {
  const { id } = params;

  const product: Product = await fetchProductDetails(id);

  return (
    <div>
      <Link href="/products">&laquo; Tillbaka</Link>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
