import React from "react";
import { CiHeart } from "react-icons/ci";
export default function ShoesItem({ name, price, img, selectItem }) {
  return (
    <div
      onClick={selectItem}
      className="group relative overflow-hidden border bg-gray-100 rounded-xl cursor-pointer"
    >
      <img
        className="hover:scale-150 transition ease-linear"
        src={img}
        alt=""
      />

      <p className="pt-5 pb-1 text-sm font-bold">{name}</p>
      <div className="flex justify-center items-center gap-4">
        <p className="text-sm font-medium line-through text-red-700">
          {price + 50} $
        </p>
        <p className="text-sm font-medium">{price} $</p>
      </div>

      <div className="absolute inset-y-0 right-0  p-2  opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <CiHeart size={24} />
      </div>
    </div>
  );
}
