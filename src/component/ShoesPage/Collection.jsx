import React, { use, useState } from "react";

import ShoesItem from "./ShoesItem";

export default function Collection({ onAddToCart, newShoesList }) {
  const [productDetails, setProductDetails] = useState({});
  const [isOpenModal, setOpenModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const list = newShoesList;
  console.log("newShoesList", newShoesList);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5 p-4 mt-1">
        {newShoesList.map((item) => (
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
      {/* Modal product details  */}
      {isOpenModal && (
        <div className="fixed inset-0 bg-gray-200/70 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => {
                setOpenModal(false);
                setQuantity(1);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <img
              src={productDetails.image}
              alt={productDetails.name}
              className="w-full h-64 object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{productDetails.name}</h2>
            <p className="text-gray-600 mb-4">
              {productDetails.shortDescription}
            </p>
            <p className="text-xl font-semibold mb-6">
              ${productDetails.price}
            </p>
            <div className="flex gap-4 justify-center items-center my-4">
              <label className="block mb-2 font-bold">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 border border-gray-300 rounded-md p-2"
              />
            </div>
            <button
              onClick={() => {
                onAddToCart(
                  productDetails.id,
                  quantity,
                  productDetails.name,
                  productDetails.price,
                  productDetails.image
                );
                setOpenModal(false);
                setQuantity(1);
              }}
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
