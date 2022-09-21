import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import { products } from "./productData";

const Pages = () => {
  const [current, setCurrent] = useState([]);

  const addToCart = (prod) => {
    const prodExist = current.find(
      (x) =>
        x.id === prod.id && x.size === values.size && x.color === values.color
    );
    if (prodExist) {
      setCurrent(
        current.map((item) =>
          item.id === prod.id &&
          item.size === values.size &&
          item.color === values.color
            ? { ...prodExist, amount: prodExist.amount + 1 }
            : item
        )
      );
    } else {
      setCurrent([
        ...current,
        { ...prod, amount: 1, size: values.size, color: values.color },
      ]);
    }
  };

  const onRemove = (prod) => {
    const prodExist = current.find(
      (item) =>
        item.id === prod.id &&
        item.size === prod.size &&
        item.color === prod.color
    );
    if (prodExist.amount === 1) {
      setCurrent(
        current.filter(
          (x) =>
            x.size !== prod.size || x.id !== prod.id || x.color !== prod.color
        )
      );
    } else {
      setCurrent(
        current.map((x) =>
          x.id === prod.id && x.size === prod.size && x.color === prod.color
            ? { ...prodExist, amount: prodExist.amount - 1 }
            : x
        )
      );
    }
  };

  const [values, setValue] = useState({
    size: "XL",
    color: "black",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home cart={current} onRemove={onRemove}></Home>}
        ></Route>
        <Route
          path="/productDetails/:id"
          element={
            <ProductDetails
              onChange={onChange}
              values={values}
              add={addToCart}
              products={products}
            ></ProductDetails>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Pages;
