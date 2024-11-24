import React from "react";

const ShoppingCart = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product List Section */}
        <div className="flex-grow">
          <div className="border-b pb-4 mb-4">
            {/* Product Item */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://via.placeholder.com/100" // Replace with actual image URL
                alt="Basic Tee"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">Basic Tee</h2>
                <p className="text-sm text-gray-500">
                  Sienna • Large
                </p>
                <p className="text-sm font-medium">$32.00</p>
                <p className="text-sm text-green-500 flex items-center">
                  ✅ In stock
                </p>
              </div>
              <div>
                <select className="border rounded-md p-1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <button className="text-gray-500 hover:text-red-500">
                ✖
              </button>
            </div>

            {/* Another Product */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://via.placeholder.com/100" // Replace with actual image URL
                alt="Basic Tee"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">Basic Tee</h2>
                <p className="text-sm text-gray-500">
                  Black • Large
                </p>
                <p className="text-sm font-medium">$32.00</p>
                <p className="text-sm text-gray-500 flex items-center">
                  🚚 Ships in 3–4 weeks
                </p>
              </div>
              <div>
                <select className="border rounded-md p-1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <button className="text-gray-500 hover:text-red-500">
                ✖
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-1/3 bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Order summary</h2>
          <div className="mb-4">
            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>$99.00</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>
                Shipping estimate
                <span className="text-gray-400 ml-1 cursor-pointer">?</span>
              </p>
              <p>$5.00</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>
                Tax estimate
                <span className="text-gray-400 ml-1 cursor-pointer">?</span>
              </p>
              <p>$8.32</p>
            </div>
          </div>
          <div className="flex justify-between text-lg font-semibold mb-6">
            <p>Order total</p>
            <p>$112.32</p>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
