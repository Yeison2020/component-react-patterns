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
            <ProductCard.Image />
            <ProductCard.Title title="Caramel Object nested Coffee" />
            <ProductCard.Buttons />
          </ProductCard>
        </div>
        <div>
          <ProductCard product={products}>
            <ProductImage />
            <ProductTitle title="Cafe con Leche Regulars Component" />
            <ProductButtons />
          </ProductCard>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
