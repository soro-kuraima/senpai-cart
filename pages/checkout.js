import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import { useStore, useStoreDispatch } from "../lib/StoreContext";

function Checkout() {
  const store = useStore();
  const dispatch = useStoreDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [payment, setPayment] =useState("");
    

    function handleCheckout(){
      /*console.log(firstName);
      console.log(lastName);
      console.log(email);
      console.log(phone);
      console.log(address);
      console.log(pincode);
      console.log(city);
      console.log(payment);*/

      dispatch({
        type: 'provideAddress',
        payload: {address: {
          firstName,
          lastName,
          email,
          phone,
          address,
          pincode,
          city,
          payment
        }}
      })

      alert("your order successfully placed. you're bieng redirected to paypal for payment");

    }


  return (
    <Layout>
      {/*
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
*/}
      <section>
        <h1 className="sr-only">Checkout</h1>
        <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
          <div className="py-12 bg-gray-50 md:py-24">
            <div className="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
              <div className="flex items-center">
                <span className="w-10 h-10 bg-yellow-700 rounded-full" />
                <h2 className="ml-4 font-medium text-gray-900">Your cart</h2>
              </div>
              <div>
                <p className="text-2xl font-medium tracking-tight text-gray-900">
                  ₹ {store.total}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  For the purchase of
                </p>
              </div>
              <div>
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-100">
                    {store.cart.map((cartItem) => {
                      return (
                        
                          <li key={cartItem.id}
                           className="flex items-center py-4">
                            <Image
                              src={cartItem.image}
                              alt={cartItem.name}
                              className="object-cover w-16 h-16 rounded"
                              height={100}
                              width={100}
                            />
                            <div className="ml-4">
                              <h3 className="text-sm text-gray-900">
                                {cartItem.name}
                              </h3>
                              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                <div>
                                  <dt className="inline">Size:</dt>
                                  <dd className="inline">{cartItem.size}</dd>
                                </div>
                                <div>
                                  <dt className="inline">Quantity:</dt>
                                  <dd className="inline">
                                    {cartItem.quantity}
                                  </dd>
                                </div>
                                <div>
                                  <dt className="inline">Price:</dt>
                                  <dd className="inline">{cartItem.price}</dd>
                                </div>
                              </dl>
                            </div>
                          </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="py-12 bg-white md:py-24">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  console.log("submit called")
                  handleCheckout()}}
                className="grid grid-cols-6 gap-4"
              >
                <div className="col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                  required
                    type="text"
                    id="FirstName"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                   value={firstName}
                   onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                  required
                    type="text"
                    id="LastName"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    value={lastName}
                   onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                  required
                    type="email"
                    id="Email"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    value={email}
                   onChange={(event) => setEmail(event.target.value)}
                  />
                 
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Phone"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                  required
                    type="tel"
                    id="Phone"
                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    value={phone}
                   onChange={(event) => setPhone(event.target.value)}
                

                  />
                </div>
                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Address
                  </legend>
                  <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                    <div>
                      <label htmlFor="HouseAddress" className="sr-only">
                        {" "}
                        House Address{" "}
                      </label>
                      <input
                      required
                        type="text"
                        id="HouseAddress"
                        placeholder="House Address"
                        className="relative w-full mt-1 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                        value={address}
                   onChange={(event) => setAddress(event.target.value)}
                      
                      />
                    </div>
                    <div className="flex -space-x-px">
                      <div className="flex-1">
                        <label htmlFor="PINCODE" className="sr-only">
                          {" "}
                          PINCODE{" "}
                        </label>
                        <input
                        required
                          type="text"
                          id="PINCODE"
                          placeholder="PINCODE"
                          className="relative w-full border-gray-200 rounded-bl-md focus:z-10 sm:text-sm"
                          value={pincode}
                   onChange={(event) => setPincode(event.target.value)}


                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="City" className="sr-only">
                          {" "}
                          City{" "}
                        </label>
                        <input
                        required
                          type="text"
                          id="City"
                          placeholder="City"
                          className="relative w-full border-gray-200 rounded-br-md focus:z-10 sm:text-sm"
                          value={city}
                   onChange={(event) => setCity(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Payment Method
                  </legend>
                  <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                    <div>
                      <label htmlFor="Country" className="sr-only">
                        Payment
                      </label>
                      <select
                      required
                        id="Country"
                        className="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                        value={payment}
                   onChange={(event) => setPayment(event.target.value)}
                      >
                        <option>Paypal</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                <div className="col-span-6">
                  <button type="submit" className="block w-full rounded-md bg-yellow-500 p-2.5 text-sm text-white transition hover:shadow-lg">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });
