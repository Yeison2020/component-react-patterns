import React from "react";
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
const products = {
  id: "1",
  title: "Coffee Mug Card",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  //Implementing Inline Styles review Notes CamelCase for name of the properties
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <div>
          <ProductCard product={products}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        </div>
        <div>
          <ProductCard product={products}>
            <ProductImage />
            <ProductTitle title="Cafe con Leche" />
            <ProductButtons />
          </ProductCard>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
