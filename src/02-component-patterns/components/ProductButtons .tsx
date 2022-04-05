import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

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
