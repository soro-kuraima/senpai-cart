import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EmptyCart() {
  return (
    <div className="flex flex-col h-screen bg-white">
  <Image
    src="/images/banner-1.webp"
    alt="banner"
    className="object-cover w-full h-64"
    height={800}
    width={800}
  />

  <div className="flex items-center justify-center flex-1">
    <div className="max-w-xl px-4 py-8 mx-auto text-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Shopping Cart is empty.
      </h1>

      <p className="mt-4 text-gray-500">
        Add items to the cart.
      </p>

      <Link
        href="/"
        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  </div>
</div>

  )
}
