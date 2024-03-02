import Link from "next/link";

export type Product = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export default async function ProductList({
  products,
}: {
  products: Product[];
}) {
  return (
    <ul>
      {products.map((productItem) => (
        <li key={productItem.id}>
          <Link href={`/products/${productItem.id}`}>{productItem.brand}</Link>
        </li>
      ))}
    </ul>
  );
}
