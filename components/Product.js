import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Product({ productData }) {
  return (
    <div className="relative overflow-hidden border border-gray-700 rounded-md shadow-xl">
      <Link href={`/product/${productData.id}`} className="block">
        
         <Image
          src={productData.image}
          alt={productData.name}
          height={400}
          width={400}
          className="object-cover w-full rounded aspect-square"
        />
        <div className="mt-3">
          <h3 className="pl-3 font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {productData.name}
          </h3>
          <p className="mt-1 pl-3 text-sm text-gray-700">₹ {productData.price}/- </p>
        </div>
      </Link>
    </div>
  );
}
