import React from "react";

function ProductCard({ product }) {
  return <div className="w-1/6">
    <img src={product.thumbnail} alt="" className="rounded-xl h-[150px]" />
    <p className="text-gray-900 hover:text-green-500">{product.title}</p>
    <p className="text-gray-900 font-semibold">{product.price} ₸</p>
    <button className="bg-gray-100 rounded-full px-3 py-1 hover:bg-gray-300">Добавить +</button>
  </div>;
}

export default ProductCard;
