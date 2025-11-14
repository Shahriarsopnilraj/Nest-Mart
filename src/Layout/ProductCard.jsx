import React from "react";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-transform hover:scale-105 p-4 bg-white flex flex-col h-full">
      {/* Discount Badge (top-left, % only) */}
      {product.offPercentage && (
        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          {product.offPercentage}%
        </span>
      )}

      {/* Product Image */}
      <img
        src={product.img}
        alt={product.productName}
        className="w-full h-56 sm:h-64 md:h-52 lg:h-56 object-cover rounded-md"
      />

      {/* Product Info */}
      <div className="mt-3 flex flex-col flex-grow justify-between">
        <div>
          <p className="text-sm text-gray-500">{product.brand}</p>
          <h1 className="text-lg font-semibold leading-tight">
            {product.productName}
          </h1>
          <p className="text-xs text-gray-400">By {product.poweredBy}</p>
        </div>

        {/* Price + Cart Section */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <p className="text-green-600 font-semibold underline">
              ${product.currentPrice}
            </p>
            <p className="text-gray-400 line-through">${product.oldPrice}</p>
          </div>

          <button className="flex items-center gap-1 px-3 py-1 bg-green-200 rounded-md text-green-600 font-semibold hover:text-green-700">
            <IoCartOutline className="text-xl" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
