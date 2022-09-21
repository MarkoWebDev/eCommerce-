import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Accordion from "./Accordion";
import { Button } from "@material-tailwind/react";

const ProductDetails = ({ add, values, onChange, products }) => {
  const { id } = useParams();
  const accordionData = [
    {
      title: "More",
      text: `Care for fiber & water: at least 25% recycled polyester.
      Recycled polyester is obtained from recycled PET plastic, which reduces the consumption of water, energy and natural resources. 
      This garment is produced using technologies that help us reduce water consumption in dyeing and washing processes.`,
    },
    {
      title: "Composition",
      text: `Outside: 52% POLYESTER FIBER - 48% COTTON - 0% ELASTIC FIBER
      Lining: 54% POLYESTER FIBER - 46% COTTON`,
    },
    {
      title: "Svailability in store",
      text: `+`,
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute top-10 left-8">
        <Button className="p-4 rounded-full " onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
      <div>
        {products
          .filter((prod) => prod.id === id)
          .map((item) => {
            return (
              <div key={item.id} className="flex justify-center py-40">
                <div>
                  <div>
                    <img
                      className="rounded-sm"
                      src={item.img}
                      alt={item.name}
                    ></img>
                  </div>
                </div>

                <div className="flex flex-col ml-8 w-1/3">
                  <div>
                    <h5 className="font-bold text-4xl font-mono tracking-wide text-black pb-10">
                      {item.name}
                    </h5>
                    <p className="font-normal text-lg  font-mono items-center text-center  text-black no-underline normal-case">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex flex-col w-44">
                    <label className="font-normal text-lg w-4/5 font-mono   text-black no-underline normal-case">
                      Pick a size
                    </label>
                    <select
                      className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      cursor-pointer
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="size"
                      value={values.size}
                      onChange={onChange}
                    >
                      {item.newSize.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="flex flex-col w-44 py-10 space-y-2 ">
                    <label className="font-normal text-lg w-4/5 font-mono   text-black no-underline normal-case">
                      Pick a color
                    </label>
                    <select
                      className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      cursor-pointer
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="color"
                      value={values.color}
                      onChange={onChange}
                    >
                      {item.colors.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="pb-4">
                    {accordionData.map((item, index) => {
                      return (
                        <Accordion
                          key={index}
                          title={item.title}
                          text={item.text}
                        ></Accordion>
                      );
                    })}
                  </div>
                  <div className="flex items-start w-full mr-4 ">
                    <Button onClick={() => add(item)}>Add to cart</Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>{" "}
    </div>
  );
};

export default ProductDetails;
