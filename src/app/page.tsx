"use client";

import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="w-full flex items-center justify-center">
      <main className="flex flex-col gap-8 items-center w-full py-6">
        <Hero />

        {/*  */}

        <div className="flex flex-col gap-4 px-6">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <ProductList products={featuredProducts} />
        </div>

        {/*  */}

        <div className="flex flex-col gap-4 items-center py-16">
          <h1 className="text-[2rem] font-bold">Find some good stuff</h1>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
