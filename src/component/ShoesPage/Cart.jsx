import React from "react";

export default function Cart({ cartItem }) {
  console.log("Cart - cart:", cartItem);
  return (
    <>
      <div className="min-h-screen w-full bg-[url('/img/bg-phoneshop.jpg')] bg-cover bg-center bg-fixed text-center px-2 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
        <h1 className="font-bold text-2xl my-4">Giỏ Hàng Của Bạn</h1>
        {cartItem.length === 0 ? (
          <p>Giỏ hàng của bạn đang trống.</p>
        ) : (
          <div className="">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className=" flex flex-row gap-8 border border-gray-800 rounded-lg p-4 bg-white/80 backdrop-blur-sm"
              >
                {/* <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain mb-4 rounded-lg"
                /> */}
                <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-2">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
