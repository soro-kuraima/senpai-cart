import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import RadioInput from "../../components/RadioInput";
import { data } from "../../lib/data";
import { useStore, useStoreDispatch } from "../../lib/StoreContext";

export default function ProductDisplayPage() {
  const { query } = useRouter();
  const { slug } = query;
  const store = useStore();

  const [size, setSize] = useState("");
  const [isSizeSelected, setSizeSelected] = useState(true);

  //const store = useStore();
  const dispatch = useStoreDispatch();

  //console.log(Boolean(size));

  const product = data.products.find((product) => product.id === slug);
  //console.log(product);

  const [isPresentInCart, setPresentInCart] = useState(() =>
    Boolean(store.cart.find((cartItem) => cartItem.id === product.id))
  );

  if (!product) {
    return (
      <Layout>
        <div className="error-page">Error 404! Not found</div>
      </Layout>
    );
  }

  function addToCart(event) {
    event.preventDefault();
    if (!size) {
      setSizeSelected(false);
      return;
    }
    setPresentInCart(true);

    dispatch({
      type: "addItem",
      payload: { ...product, size: size, quantity: 1 },
    });
  }

  //console.log("item is present in cart", isPresentInCart)

  return (
    <Layout>
      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <Image
                alt={product.name}
                src={product.image}
                width={375}
                height={500}
                className="object-contain w-full aspect-square rounded-xl"
              />

            </div>

            <div className="sticky top-0">
              <div className="flex flex-col justify-between mt-8">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">{product.name}</h1>

                  <p className="mt-0.5 text-sm text-bold">
                    {product.rating} of {product.numberOfReviews} reviews
                  </p>

                  <div className="mt-0 -ml-0.5 flex">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-lg font-bold">₹ {product.price}</p>
              </div>

              <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p>{product.description}</p>
                    </div>

                    <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div className="pb-6 prose max-w-none">
                  <p>{product.description}</p>

                  <p>{product.description}</p>
                </div>
              </details>

              <form className="mt-8" onSubmit={addToCart}>
                <fieldset
                  className="mt-4"
                  onChange={(event) => {
                    setSize(event.target.value);
                    setSizeSelected(true);
                    //console.log(event.target.value);
                    //console.log(size);
                  }}
                >
                  <legend className="mb-1 text-sm font-medium">Size</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      <RadioInput input="xs" />
                      <RadioInput input="s" />
                      <RadioInput input="m" />
                      <RadioInput input="l" />
                      <RadioInput input="xl" />
                    </div>
                  </div>
                </fieldset>
                <div className="">
                  {!isSizeSelected && (
                    <p className="text-red-600"> Select a size!!</p>
                  )}
                </div>

                {!isPresentInCart && (
                  <div className="flex mt-8">
                    <button
                      type="submit"
                      className="block px-5 py-3 ml-3 text-xs font-medium text-black bg-yellow-400 rounded hover:bg-yellow-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
                {isPresentInCart && (
                  <div className="flex mt-8">
                    <Link href="/cart">
                      <span className="block px-5 py-3 ml-3 text-xs font-medium text-black bg-yellow-400 rounded hover:bg-yellow-300">
                        Go to Cart
                      </span>
                    </Link>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
