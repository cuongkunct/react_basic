import React, { use, useState } from "react";
import shoesData from "../../assets/shoesData.json";
import ShoesItem from "./ShoesItem";

export default function Collection({ onAddToCart }) {
  const [productDetails, setProductDetails] = useState({});
  const [isOpenModal, setOpenModal] = useState(false);
  console.log("selectItem: ", productDetails);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5 p-4 mt-1">
        {shoesData.map((item) => (
          <ShoesItem
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.image}
            selectItem={() => {
              setProductDetails(item);
              setOpenModal(true);
            }}
          />
        ))}
      </div>
      {isOpenModal && (
        <div className="fixed inset-0 bg-gray-200/70 flex justify-center items-center z-50">
          {/* Popup */}
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            {/* Product Image */}
            <img
              src={productDetails.image}
              alt={productDetails.name}
              className="w-full h-64 object-contain mb-4 rounded-lg"
            />

            {/* Product Info */}
            <h2 className="text-2xl font-bold mb-2">{productDetails.name}</h2>
            <p className="text-gray-600 mb-4">
              {productDetails.shortDescription}
            </p>
            <p className="text-xl font-semibold mb-6">
              ${productDetails.price}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={() => onAddToCart(productDetails.id)}
              className="w-full bg-[rgba(25,70,112,1)] text-white py-3 rounded-lg hover:bg-[rgba(50,100,200,1)] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
