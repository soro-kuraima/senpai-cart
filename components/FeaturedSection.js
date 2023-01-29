import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedSection() {
  return (
    <div className="featured-section">
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              New Collection
            </h2>
            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Find the hottest and trendiest picks
            </p>
          </header>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <Link href="/tees" className="relative block group">
                <Image
                  src="/images/draken-oversize1_comicsense-3.webp"
                  alt="tees"
                  height={800}
                  width={800}
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium">
                    Tees
                  </h3>
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/hoodies" className="relative block group">
                <Image
                  src="/images/way-of-ace_hoodie2_comicsense.webp"
                  alt="hoodies"
                  height={800}
                  width={800}
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium">
                    Hoodies
                  </h3>
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Link href="/cosplay" className="relative block group">
              <Image
                  src="/images/akatsuki_naruto_cloak3_comicsense.webp"
                  alt="cosplay"
                  height={800}
                  width={800}
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium">
                    Cosplay
                  </h3>
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
