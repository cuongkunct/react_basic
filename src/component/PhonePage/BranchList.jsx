import React, { useState } from "react";
import { SiNike, SiAdidas, SiPuma, SiNewbalance } from "react-icons/si";
import {
  FaRunning,
  FaTshirt,
  FaHatCowboy,
  FaShoppingBag,
} from "react-icons/fa";
import { CiViewList } from "react-icons/ci";


export default function BranchList() {
  const [branch, setBranch] = useState("nike");
  const [category, setCategory] = useState(false);
  const [activeCategory, setActiveCategory] = useState("shoes");
  const branches = [
    {
      id: "nike",
      name: "Nike",
      icon: <SiNike className="text-3xl text-orange-500" />,
    },
    {
      id: "adidas",
      name: "Adidas",
      icon: <SiAdidas className="text-3xl text-blue-500" />,
    },
    {
      id: "puma",
      name: "Puma",
      icon: <SiPuma className="text-3xl text-gray-700" />,
    },
    {
      id: "newbalance",
      name: "New Balance",
      icon: <SiNewbalance className="text-3xl text-red-500" />,
    },
  ];

  const categories = [
    { id: "shoes", name: "Shoes", icon: <FaRunning className="text-xl" /> },
    { id: "clothes", name: "Clothes", icon: <FaTshirt className="text-xl" /> },
    { id: "hats", name: "Hats", icon: <FaHatCowboy className="text-xl" /> },
    {
      id: "accessories",
      name: "Accessories",
      icon: <FaShoppingBag className="text-xl" />,
    },
  ];

  return (
    <div>
      <div
        className="  rounded-xl cursor-pointer 
             transition-transform duration-300 hover:scale-105 p-2"
      >
        <div
          onClick={() => setCategory(!category)}
          className="flex gap-2 justify-center items-center bg-blue-50 p-4 rounded-xl"
        >
          <CiViewList className="size-6 text-black " />
          <p className="text-black   ">Danh mục sản phẩm</p>
        </div>

        <div
          className={`${
            category ? "grid" : "hidden"
          } grid-cols-2 gap-2 justify-center items-center mt-4`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all
            ${
              activeCategory === cat.id
                ? "bg-blue-100 scale-105 shadow-lg"
                : "bg-white hover:bg-gray-100"
            }
          `}
            >
              {cat.icon}
              <span className="font-sm">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center bg-blue-50  rounded-xl p-2 mt-4">
        <p className="text-black   ">Lựa chọn hãng</p>
        <div className="grid grid-cols-2 gap-2 mt-4 ">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="flex gap-1 justify-center items-center cursor-pointer border border-gray-200 rounded-2xl p-1 "
            >
              {branch.icon}
              <p>{branch.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
