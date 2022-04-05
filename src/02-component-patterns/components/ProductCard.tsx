import styles from "../styles/styles.module.css";
import { useProducts } from "../hooks/useProducts";
import { createContext, useContext } from "react";
import { ProductContextProps, Props } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
// Small block Components

// Product Image

// Product Title

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};

// Product Buttons

// Remember I replaced those using the context of the provider

export const ProductButtons = () => {
  const context = useContext(ProductContext);
  console.log(context);
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => context.increaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}> {context.counter} </div>
      <button
        className={styles.buttonAdd}
        onClick={() => context.increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};

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
