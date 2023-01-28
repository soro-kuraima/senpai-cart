import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Product({ productData }) {

  return (
    <div className="relative block overflow-hidden group border border-gray-700 rounded-lg shadow-2xl">
      <Link href={`/product/${productData.id}`}>
        <Image
          src={productData.images[0]}
          alt="uhmm"
          height={400}
          width={400}
          className="object-contain w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
        />
      </Link>
      <div className="relative p-6 bg-white">
        <Link href={`/product/${productData.id}`}>
          <h3 className="mt-4 text-lg font-medium text-gray-900 hover:text-yellow-400">
            {productData.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-sm text-gray-700">₹ {productData.price}</p>
      </div>
    </div>
  );
}
