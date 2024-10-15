import { Product } from "../types/Product";
import Button from "./Button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-grow flex flex-col">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 flex-grow">{product.description}</p>
        <Button
          className="mt-2"
          onClick={() => console.log(`added product ${product.id} to cart`)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
