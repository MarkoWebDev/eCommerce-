import React from "react";
import Cart from "./Cart";

const Navbar = ({ cart, onRemove }) => {
  return (
    <div className="w-full flex justify-around items-center bg-white h-14">
      <div className="text-black font-semibold text-2xl font-mono items-center text-center no-underline normal-case">
        Klar'ci Clothing Shop
      </div>
      <div>
        <Cart cart={cart} onRemove={onRemove}></Cart>
      </div>
    </div>
  );
};

export default Navbar;
