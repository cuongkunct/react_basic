import { useState } from "react";
import { Glass } from "./page/Glass.jsx";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Gi3dGlasses } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import ShoesShop from "./page/ShoesShop.jsx";
function App() {
  const [page, setPage] = useState("Glass");
  const [cartItem, setCartItem] = useState({});

  console.log("cartItem: ", cartItem);

  const handleAddToCart = (id) => {
    // Sao chép state cũ để tránh mutate trực tiếp
    let cartData = structuredClone(cartItem);

    // Nếu sản phẩm đã tồn tại thì +1, ngược lại gán = 1
    if (cartData[id]) {
      cartData[id] += 1;
    } else {
      cartData[id] = 1;
    }

    // Cập nhật lại state
    setCartItem(cartData);
  };

  const getCartCount = () => {
    const totalQuantity = Object.values(cartItem).reduce(
      (sum, qty) => sum + qty,
      0
    );
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
