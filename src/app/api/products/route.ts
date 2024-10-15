import { NextRequest, NextResponse } from "next/server";

const dummyProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    image: "https://picsum.photos/seed/laptop/200",
    description:
      "Powerful and portable computing device for work and entertainment.",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 499.99,
    image: "https://picsum.photos/seed/smartphone/200",
    description:
      "Advanced mobile device with cutting-edge features and connectivity.",
  },
  {
    id: 3,
    name: "Headphones",
    price: 99.99,
    image: "https://picsum.photos/seed/headphones/200",
    description: "High-quality audio gear for immersive listening experiences.",
  },
  {
    id: 4,
    name: "Tablet",
    price: 299.99,
    image: "https://picsum.photos/seed/tablet/200",
    description:
      "Versatile touchscreen device for productivity and entertainment on-the-go.",
  },
  {
    id: 5,
    name: "Smartwatch",
    price: 199.99,
    image: "https://picsum.photos/seed/smartwatch/200",
    description: "Wearable technology that combines style with smart features.",
  },
  {
    id: 6,
    name: "Camera",
    price: 599.99,
    image: "https://picsum.photos/seed/camera/200",
    description:
      "Capture life's moments with stunning clarity and professional quality.",
  },
  {
    id: 7,
    name: "Gaming Console",
    price: 399.99,
    image: "https://picsum.photos/seed/console/200",
    description:
      "Next-gen gaming system for immersive and interactive entertainment.",
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: 149.99,
    image: "https://picsum.photos/seed/earbuds/200",
    description: "Compact and convenient audio solution for music and calls.",
  },
  {
    id: 9,
    name: "External Hard Drive",
    price: 79.99,
    image: "https://picsum.photos/seed/harddrive/200",
    description:
      "Reliable storage solution for backing up and expanding your data capacity.",
  },
  {
    id: 10,
    name: "Portable Charger",
    price: 39.99,
    image: "https://picsum.photos/seed/charger/200",
    description:
      "Keep your devices powered up on-the-go with this compact battery pack.",
  },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";

  // Add a 300ms delay to simulate API latency
  await new Promise((resolve) => setTimeout(resolve, 300));

  const filteredProducts = dummyProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(filteredProducts);
}
