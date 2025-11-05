import React, { useState } from "react";
import shoesData from "../assets/shoesData.json";

import { SiContributorcovenant } from "react-icons/si";
import { IoSearch, IoLocation } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

import SlideImg from "../component/PhonePage/SlideImg.jsx";
import BranchList from "../component/PhonePage/BranchList.jsx";
import Collection from "../component/PhonePage/Collection.jsx";
import { ToastContainer, toast } from "react-toastify";

export default function ShoesShop({ onAddToCart, getCartCount }) {
  const [filteredShoes, setFilteredShoes] = useState(shoesData);
  const [active, setActive] = useState("moinhat");
  console.log("filteredShoes", filteredShoes);
  const buttons = [
    { id: "lienquan", label: "Liên quan" },
    { id: "moinhat", label: "Mới nhất" },
    { id: "banchay", label: "Bán chạy" },
    {
      id: "giatien",
      label: "Giá tiền",
      icon: <FaChevronUp className="text-sm ml-1" />,
    },
  ];

  const handleSearch = (key) => {
    if (!key.trim()) {
      setFilteredShoes(shoesData);
    } else {
      const result = shoesData.filter((item) =>
        item.name.toLowerCase().includes(key.toLowerCase())
      );
      setFilteredShoes(result);
    }
  };

  const handleSort = () => {
    if (active === "giatien") {
      const result = filteredShoes.sort((a, b) => a.price - b.price);
      setFilteredShoes(result);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[url('/img/bg-phoneshop.jpg')] bg-cover bg-center bg-fixed text-center px-2 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="flex justify-between items-center p-4">
        <div className="flex">
          <div className="flex gap-4  items-center">
            <SiContributorcovenant className="size-12 text-yellow-200" />
            <p className="text-white text-2xl font-bold font-mono flex justify-center items-center">
              CUONG SHOES.COM
            </p>
          </div>
          <div className="flex items-center ml-12">
            <input
              onChange={(e) => handleSearch(e.target.value)}
              className="border  border-gray-300 px-18 py-2 bg-white rounded-tl-2xl rounded-bl-2xl"
              placeholder="Tìm kiếm ....?"
            />
            <IoSearch className="border-l-2  border-gray-300 size-10  text-gray-700 cursor-pointer bg-white rounded-tr-2xl rounded-br-2xl" />
          </div>
        </div>
        <div className="flex gap-6 justify-center items-center ">
          <div className="flex gap-2 justify-center items-center hover:bg-[rgba(25,70,112,1)] hover:text-black rounded-xl cursor-pointer p-2">
            <IoLocation className="size-6 text-white " />
            <p className="text-white   ">Tìm kiếm siêu thị</p>
          </div>

          <div className="flex gap-2 justify-center items-center hover:bg-[rgba(25,70,112,1)] hover:text-black rounded-xl cursor-pointer p-2">
            <MdOutlineAccountCircle className="size-6 text-white " />
            <p className="text-white   ">Tài khoản</p>
          </div>
          <div className="flex gap-2 justify-center items-center hover:bg-[rgba(25,70,112,1)] hover:text-black rounded-xl cursor-pointer p-2">
            <FaCartArrowDown className="size-6 text-white " />

            <p className="text-white   ">{getCartCount()}</p>
          </div>
        </div>
      </div>

      {/* Chạy slide banner */}
      <SlideImg />
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div className="col-span-1">
          <BranchList />
        </div>
        <div className="col-span-4 ">
          <div className="bg-gray-100 flex items-center gap-4 px-6 py-2 mt-2 rounded-xl shadow-sm">
            <span className="text-gray-700 font-medium">Sắp xếp theo</span>
            {buttons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActive(btn.id) && handleSort()}
                className={`flex items-center justify-center px-6 py-2 rounded-md border transition-all duration-200
            ${
              active === btn.id
                ? "bg-teal-600 text-white border-teal-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-50"
            }`}
              >
                <span className="font-medium">{btn.label}</span>
                {btn.icon && <span>{btn.icon}</span>}
              </button>
            ))}
          </div>
          <div>
            <h1 className="flex justify-center items-center mt-4 text-white text-3xl">
              Hôm nay chúng tôi có gì?
            </h1>
            <Collection
              onAddToCart={onAddToCart}
              newShoesList={filteredShoes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
