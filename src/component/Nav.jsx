import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className=" flex items-center justify-between py-5 font-medium bg">
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-950 font-bold" : "text-white"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/glass"
            className={({ isActive }) =>
              isActive ? "text-gray-950 font-bold" : "text-white"
            }
          >
            GLASS SHOP
          </NavLink>
          <NavLink
            to="/shoes"
            className={({ isActive }) =>
              isActive ? "text-gray-950 font-bold" : "text-white"
            }
          >
            SHOES SHOP
          </NavLink>
          <NavLink
            to="/order-seats"
            className={({ isActive }) =>
              isActive ? "text-gray-950 font-bold" : "text-white"
            }
          >
            REDUX BOOKING
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
      </div>
    </>
  );
}
