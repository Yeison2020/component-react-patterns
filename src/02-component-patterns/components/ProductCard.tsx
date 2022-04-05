import styles from "../styles/styles.module.css";
import { useProducts } from "../hooks/useProducts";
import { createContext } from "react";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
// Main Component with integrated Components
export const ProductCard = ({ children, product }: ProductCardProps) => {
  // Customs Hooks Imports
  const { counter, increaseBy } = useProducts();
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
