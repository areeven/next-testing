import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Product = {
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

type ApiResponse = Product[];

export default function ProductList({
  getAllProducts,
}: {
  getAllProducts: () => Promise<ApiResponse>;
}) {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiProducts = await getAllProducts();
        setProducts(apiProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [getAllProducts]);

  return (
    <ul>
      {products.map((productItem) => (
        <li
          onClick={() => router.push(`/products/${productItem.id}`)}
          key={productItem.id}
        >
          {productItem.brand}
        </li>
      ))}
    </ul>
  );
}
