import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";

const Product = ({ products }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center pt-4 pb-4 rounded-sm bg-gray-200">
      <div className="grid grid-cols-4 justify-items-centerc content-center gap-8">
        {products.map((prod) => {
          return (
            <Link key={prod.id} to={"/productDetails/" + prod.id}>
              <div>
                <div className="flex flex-col rounded-lg transition ease-in-out delay-50 hover:opacity-80 hover:scale-95 cursor-pointer bg-white">
                  <img src={prod.img} alt={prod.name}></img>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg font-mono tracking-wide text-gray-600">
                    {prod.name}
                  </h4>
                </div>
                <div className="pt-4">
                  <p className="font-semibold text-xs font-mono tracking-wide text-gray-600 no-underline normal-case">
                    {prod.text}
                  </p>
                </div>
                <div className="pt-2">
                  <p className=" text-lg font-mono tracking-wide text-gray-600 no-underline normal-case">
                    ${prod.price}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="bg-green-100 flex items-center justify-around w-4/5 h-44 my-20 rounded-lg">
        <div>
          <h3 className="font-bold text-3xl font-mono tracking-wide text-black">
            Sign up for our newsletter
          </h3>
          <p className="font-semibold text-sm font-mono tracking-wide text-black no-underline normal-case">
            Join our newsletter and get news in your inbox every week!
          </p>
        </div>
        <div className="w-72">
          <Input label="Email" />
        </div>
      </div>
    </div>
  );
};

export default Product;
