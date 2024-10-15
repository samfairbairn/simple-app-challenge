import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Good Stuff
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className="text-gray-600 hover:text-blue-500"
              >
                Search
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
