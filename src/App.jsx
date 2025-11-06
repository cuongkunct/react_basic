import { useState } from "react";
import { Glass } from "./page/Glass.jsx";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Gi3dGlasses } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import ShoesShop from "./page/ShoesShop.jsx";
import { toast } from "react-toastify";
function App() {
  const [page, setPage] = useState("Shoes");
  const [cartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  console.log("cartItem: ", cartItem);

  const setDataLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getDataLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const handleAddToCart = (id, quantity, name, price) => {
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
          return [...prevCart, { id, quantity, name, price }];
        }
      } catch (error) {
        toast.error("Có lỗi khi thêm sản phẩm vào giỏi hàng.");
      }
    });
    toast.success("!", {
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
    <div className="w-full">
      <nav>
        <ul className="flex flex-row items-center justify-center gap-8 bg-white p-4 shadow-2xl">
          <TiThMenu size={32} />
          <li className="flex flex-row gap-4 justify-center items-center">
            <Gi3dGlasses size={32} />
            <a
              className="cursor-pointer text-2xl font-bold hover:text-blue-500"
              onClick={() => setPage("Glass")}
            >
              GLASS SHOP
            </a>
          </li>
          <li className="flex flex-row gap-4 justify-center items-center">
            <IoPhonePortraitOutline size={32} />
            <a
              className="cursor-pointer text-2xl font-bold hover:text-blue-500"
              onClick={() => setPage("Shoes")}
            >
              SHOES SHOP
            </a>
          </li>
        </ul>
      </nav>

      {page === "Glass" ? (
        <Glass />
      ) : (
        <ShoesShop onAddToCart={handleAddToCart} getCartCount={getCartCount} />
      )}
    </div>
  );
}

export default App;
