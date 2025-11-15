import React from "react";

const MegaMenuCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="group border rounded-lg p-3 bg-white hover:shadow-md transition cursor-pointer relative">

      {/* Discount Badge - on top of image */}
      {product?.offPercentage && (
        <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] font-semibold px-2 py-[2px] rounded z-10">
          {product.offPercentage}% OFF
        </span>
      )}

      {/* Image (bigger + hover scale) */}
      <div className="w-full flex justify-center relative">
        <img
          src={product?.img}
          alt={product?.productName}
          className="w-46 h-46 object-contain group-hover:scale-110 transition"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-sm font-semibold text-gray-800 mt-2">
        {product?.productName}
      </h3>

      {/* Brand */}
      <p className="text-xs text-gray-500">
       <span className="text-black">By--</span> {product?.brand}
      </p>

      {/* Prices */}
      <div className="flex items-center gap-2 mt-1">
        <span className="text-green-600 font-bold text-sm">
          ${product?.currentPrice}
        </span>

        <span className="text-gray-400 line-through text-xs">
          ${product?.oldPrice}
        </span>
      </div>

    </div>
  );
};

export default MegaMenuCard;
