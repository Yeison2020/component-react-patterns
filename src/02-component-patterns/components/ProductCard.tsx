import styles from "../styles/styles.module.css";
import { useProducts } from "../hooks/useProducts";
import { createContext, useContext } from "react";
import { ProductContextProps, Props } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons ";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// Main Component with integrated Components

const ProductCard = ({ children, product }: Props) => {
  // Customs Hooks Imports
  const { counter, increaseBy } = useProducts();

  //
  // console.log(styles);
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      {/* Childrens Mini Components ==>  */}
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
// Attaching Components
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

export default ProductCard;
