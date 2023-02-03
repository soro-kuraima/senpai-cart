import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import { useStore, useStoreDispatch } from "../lib/StoreContext";
import EmptyCart from "../components/EmptyCart";

function Cart() {
  const store = useStore();
  const dispatch = useStoreDispatch();

  //console.log(store);

  const isCartEmpty = !store.cart.length;
  //console.log(store);

  function removeItem(id) {
    dispatch({
      type: "removeItem",
      payload: id,
    });
  }

  function incrementQuantity(id, quantity) {
    //console.log("increment quantity called");

    if (!quantity) {
      return;
    }
    quantity = quantity + 1;
    dispatch({
      type: "changeQuantity",
      payload: {
        id,
        quantity,
      },
    });
  }

  function decrementQuantity(id, quantity) {
    //console.log("decrement quantity called");

   
    quantity = quantity - 1;
    if (!quantity) {
      removeItem(id)
      return
    }
    dispatch({
      type: "changeQuantity",
      payload: {
        id,
        quantity,
      },
    });
  }

  return (
    <Layout>
      {isCartEmpty && <EmptyCart />}
      {!isCartEmpty && (
        <section>
          <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Your Cart
                </h1>
              </header>

              <div className="mt-8">
                <ul className="space-y-4">
                  {store.cart.map((cartItem) => {
                    return (
                      <>
                        <li className="flex items-center">
                          <div className="relative">
                            <span className="absolute inset-0 translate-x-1 translate-y-1 bg-teal-500"></span>

                            <Image
                              src={cartItem.image}
                              alt={cartItem.name}
                              className="relative object-cover w-16 h-16 border-2 border-black"
                              height={100}
                              width={100}
                            />
                          </div>

                          <div className="ml-4">
                            <h3 className="font-mono text-sm">
                              {cartItem.name}
                            </h3>

                            <dl className="mt-0.5 space-y-px font-mono text-[10px]">
                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">{cartItem.size}</dd>
                              </div>

                              <div>
                                <dt className="inline">Price:</dt>
                                <dd className="inline">{cartItem.price}</dd>
                              </div>
                            </dl>
                          </div>

                          <div className="flex items-center justify-end flex-1 gap-2">
                            <div>
                              <label htmlFor="Quantity" className="sr-only">
                                {" "}
                                Quantity{" "}
                              </label>

                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    decrementQuantity(
                                      cartItem.id,
                                      cartItem.quantity
                                    );
                                  }}
                                >
                                  -
                                </button>

                                <span
                                  className="h-10 w-16 rounded border-gray-200 flex items-center justify-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                > {cartItem.quantity} </span>

                                <button
                                  onClick={(event) => {
                                    event.preventDefault();
                                    incrementQuantity(
                                      cartItem.id,
                                      cartItem.quantity
                                    );
                                  }}
                                  type="button"
                                  className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <button
                              className="transition hover:text-red-600"
                              onClick={(event) => {
                                event.preventDefault();
                                removeItem(cartItem.id);
                              }}
                            >
                              <span className="sr-only">Remove item</span>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>

                <div className="flex justify-end pt-8 mt-8 border-t-2 border-black">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 font-mono text-xs">
                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>₹ {store.total} /-</dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <Link
                        href="/checkout"
                        className="block px-5 py-3 font-mono text-sm text-white uppercase bg-yellow-500 border-black hover:bg-yellow-600"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Cart), {ssr: false})
