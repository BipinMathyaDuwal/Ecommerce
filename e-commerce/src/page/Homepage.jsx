
import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto flex flex-col items-center py-12 px-6 text-center lg:text-left lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-gray-900
               bg-purple-600 px-4 py-2 rounded-lg shadow-2xl 
               border-4 border-purple-600  shadow-purple-500">
               Welcome to Newa-Store.
            </h2>
            <p className="mb-6 text-white-900 font-style: italic">
              Discover the best deals on the products you love. Shop now and save
              big!
            </p>
            <button className="btn btn-secondary" >Shop Now</button>
          </div>

          <div className="flex items-center lg:w-1/2 lg:justify-end">
           <img src="/src/photos/slogann.jpg" alt="Banner" 
           className="rounded-lg shadow-lg w-full lg:w-auto lg:max-w-md"/> 
           </div>
        </div>
      </section>
      

      {/* Categories */}
      <section className="container mx-full max-w-full py-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h2 className="text-3xl font-bold mb-9 text-center text-teal-900 font-style: italic underline"> Shop By Catagory</h2>       
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="card bg-purple-500 shadow-md">
            <div className="card-body items-center">
              <div>
              <img src="/src/photos/electronicss.jpg" alt="Category 1" className="w-full h-900 rounded-lg" />
              </div>
              <button className="btn btn-active btn-neutral">Electronics</button>
            </div>
          </div>

          <div className="card bg-purple-300 shadow-md">
            <div className="card-body items-center">
              <div >
              <img src="/src/photos/fashionnn.jpg" alt="Category 2" className="w-full h-900 rounded-lg" />
              </div>
              <button className="btn btn-active btn-neutral">Fashion</button>
            </div>
          </div>

          <div className="card bg-blue-300 shadow-md">
            <div className="card-body items-center">
              <div>
              <img src="/src/photos/home.jpg" alt="Category 3" className="w-full h-900 rounded-lg" />
              </div>
              <button className="btn btn-active btn-neutral">Home & Garden</button>
            </div>
          </div>

          <div className="card bg-blue-500 shadow-md">
            <div className="card-body items-center">
              <div>
              <img src="/src/photos/sportt.jpg" alt="Category 4" className="w-full h-full rounded-lg " />
              </div>
              <button className="btn btn-active btn-neutral">Sports</button>
            </div>
          </div>
        </div>
      </section>
 
      {/* Featured Products */}
      <section className="container mx-full max-w-full  bg-gradient-to-r from-purple-500 to-blue-500 text-white py-12">
        <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-9 text-center text-teal-900 font-style: italic underline"> Feature Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12].map((product, index) => {
        const imageIndex = (index % 12) + 1; // Cycle through 1 to 4
        return (
          <div key={product} className="card bg-white shadow-md hover:shadow-lg">
            <figure>
              <img
                src={`/src/photos/product${imageIndex}.jpg`}
                alt={`Product ${product}`}
                className="h-60 w-full object-cover rounded-lg" />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold text-pink-600">Product Name</h3>
              <p className="text-sm text-blue-500">$100.00</p>
              <button className="btn btn-primary btn-sm mt-2">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

    </div>
  );
};

export default Homepage;



