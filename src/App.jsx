import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Glass } from "./page/Glass.jsx";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Gi3dGlasses } from "react-icons/gi";
import ShoesShop from "./page/ShoesShop.jsx";

import { toast } from "react-toastify";
import OrderSeats from "./page/OrderSeats.jsx";
import Nav from "./component/Nav.jsx";
import Cart from "./component/ShoesPage/Cart.jsx";
import Home from "./component/HomePage/Home.jsx";
import Form from "./page/Form.jsx";
function App() {
  const [page, setPage] = useState("Shoes");
  const [cartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
    s;
  });

  console.log("cartItem: ", cartItem);

  const setDataLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getDataLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const handleAddToCart = (id, quantity, name, price, image) => {
    setCartItem((prevCart) => {
      try {
        const existingItem = prevCart.find((item) => item.id === id);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prevCart, { id, quantity, name, price, image }];
        }
      } catch (error) {
        toast.error("Có lỗi khi thêm sản phẩm vào giỏi hàng.");
      }
    });
    toast.success("Thêm vào giỏ hàng thành công!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  setDataLocalStorage("cartItems", cartItem);

  const getCartCount = () => {
    const cart = getDataLocalStorage("cartItems") || [];
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    return totalQuantity;
  };

  return (
    <div className="px-4">
      <div className="flex justify-center items-center bg-gray-500">
        {" "}
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glass" element={<Glass />} />
        <Route
          path="/shoes"
          element={
            <ShoesShop
              onAddToCart={handleAddToCart}
              getCartCount={getCartCount}
            />
          }
        />
        <Route path="/shoes/cart" element={<Cart cartItem={cartItem} />} />
        <Route path="/order-seats" element={<OrderSeats />} />
        <Route path="/user-form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
