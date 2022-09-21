import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Cart = ({ cart, onRemove }) => {
  const itemsPrice = cart.reduce((a, c) => a + c.amount * c.price, 0);
  const basketAmount = cart.reduce((a, c) => a + c.amount, 0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const checkout = () => {
    alert("Thank you for shopping...");
    window.location.reload();
  };

  return (
    <div>
      {cart.length > 0 ? (
        <Fragment>
          <div className="flex flex-row items-center justify-around">
            <svg
              onClick={handleOpen}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="rounded-full bg-gray-300 px-2 text-black font-mono text-sm ml-2">
              {basketAmount}
            </span>

            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Its a simple dialog.</DialogHeader>
              <DialogBody divider>
                <div className="h-[600px] overflow-auto">
                  {cart.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="grid grid-cols-2 justify-items-center py-6"
                      >
                        <div>
                          <img
                            className="w-24 h-24"
                            src={item.img}
                            alt={item.name}
                          ></img>
                        </div>
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.text}</p>
                          <p>Amount: {item.amount}</p>
                          <span>Size: {item.size}</span>
                          <p className="flex">
                            Color:{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill={item.color}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>
                          </p>
                          <div>
                            <svg
                              onClick={() => onRemove(item)}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 cursor-pointer text-red-400"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </DialogBody>
              <DialogFooter className="flex justify-between">
                <div>Total price: ${itemsPrice}</div>
                <div>
                  {" "}
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span onClick={checkout}>Confirm</span>
                  </Button>
                </div>
              </DialogFooter>
            </Dialog>
          </div>
        </Fragment>
      ) : (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Cart;
