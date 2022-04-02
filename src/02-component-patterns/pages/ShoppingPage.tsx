import React from "react";
import ProductCard from "../components/ProductCard";
const products = {
  id: "1",
  title: "Coffee Mug Card",
};

const ShoppingPage = () => {
  //Implementing Inline Styles review Notes CamelCase for name of the properties
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={products} />
      </div>
    </div>
  );
};

export default ShoppingPage;
