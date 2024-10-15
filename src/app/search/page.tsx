"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductList from "../../components/ProductList";
import { Product } from "../../types/Product";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearch = searchParams.get("q") || "";

  const [search, setSearch] = useState(initialSearch);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `/api/products?q=${encodeURIComponent(search)}`
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, router]);

  return (
    <div className="w-full flex items-center justify-center">
      <main className="flex flex-col gap-8 items-center w-full max-w-6xl px-4">
        <div className="flex flex-col gap-4 items-center py-24 w-full">
          <h1 className="text-3xl font-bold">Find some good stuff</h1>

          <div className="w-full max-w-xl">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {loading ? (
            <p>Loading products...</p>
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </main>
    </div>
  );
}
