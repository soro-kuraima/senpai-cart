import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Product({ productData }) {
  return (
    <Link href={`/${productData.category}/${productData.slug}`} className="relative block overflow-hidden group border border-gray-100">
    <div className="relative block overflow-hidden group border border-gray-700 rounded-lg shadow-2xl">
      <Image
        src={productData.image}
        alt="uhmm"
        height={400}
        width={400}
        className="object-contain w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative p-6 bg-white">
        <h3 className="mt-4 text-lg font-medium text-gray-900 hover:text-yellow-400">{productData.name}</h3>

        <p className="mt-1.5 text-sm text-gray-700">₹ {productData.price}</p>

        <form className="mt-4">
          <button className="block w-full p-4 text-sm font-medium transition bg-yellow-400 rounded hover:scale-105" onClick={(event) => {
            event.preventDefault()
            console.log("add to car clicked")
            }}>
            Add to Cart
          </button>
        </form>
      </div>
      </div>
    </Link>
    
  );
}
