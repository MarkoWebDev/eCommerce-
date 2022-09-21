import React from "react";
import Navbar from "./Navbar";
import header1 from "./images/header1.avif";
import header2 from "./images/header2.avif";
import Product from "./Product";
import { products } from "./productData";

const Home = ({ cart, onRemove }) => {
  console.log(cart);
  return (
    <div>
      <div className="bg-lime-300 w-full h-8 items-center flex justify-center">
        <p className="font-semibold text-xs font-mono items-center text-center text-black no-underline normal-case">
          <span className="font-semibold text-xs font-mono items-center text-center text-red-600 no-underline normal-case">
            PROMOTIONS!{" "}
          </span>
          -30% on selected products
        </p>
      </div>
      <Navbar onRemove={onRemove} cart={cart}></Navbar>
      <div className="flex justify-around w-full items-center">
        <div>
          <img className="h-[42rem]" src={header1} alt="header"></img>
        </div>
        <div>
          <img className="h-[42rem]" src={header2} alt="header"></img>
        </div>
      </div>
      <div className="text-center font-semibold text-6xl font mono items-center text-black no-underline nromal-case py-20">
        Check out our new Collection
      </div>
      <Product products={products}></Product>
    </div>
  );
};

export default Home;
