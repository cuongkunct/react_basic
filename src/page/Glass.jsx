import React, { useState } from "react";
import data from "../assets/data.json";
import GlassItem from "../component/GlassPage/GlassItem.jsx";

export const Glass = () => {
  const [option, setOption] = useState(data[0]);
  console.log(option);
  return (
    <div className="bg-[url('/img/background.jpg')] bg-cover bg-center h-screen text-center">
      <h1 className=" bg-black/2 backdrop-blur-sm text-4xl font-bold p-4 ">
        TRY GLASS APP ONLINE
      </h1>

      <div className="flex flex-row justify-center items-center gap-40">
        <div className="relative inline-block">
          <img
            className="w-72 h-auto border border-gray-700 rounded-2xl shadow-md"
            src="/img/model.jpg"
            alt="model"
          />
          <img
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 opacity-90"
            src={option.url}
            alt="glasses"
          />
        </div>
        <div>
          <img
            className="w-70 h-90 border border-gray-700 rounded-2xl shadow-sm"
            src="/img/model.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-row gap-4 shadow-2xl mt-20">
        {data.map((item, index) => (
          <GlassItem
            key={index}
            name={item.name}
            url={item.url}
            desc={item.desc}
            price={item.price}
            onSelect={() => setOption(item)}
          />
        ))}
      </div>
    </div>
  );
};
