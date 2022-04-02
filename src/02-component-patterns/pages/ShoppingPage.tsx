import React from "react";
import ProductCard from "../components/ProductCard";

const ShoppingPage = () => {
  //Implementing Inline Styles review Notes CamelCase for name of the properties
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ShoppingPage;
