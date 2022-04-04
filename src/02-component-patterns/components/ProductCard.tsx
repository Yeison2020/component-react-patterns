import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProducts } from "../hooks/useProducts";
import { Children, ReactElement } from "react";

// Implementing my Types:
interface Props {
  product: Product;
  children?: ReactElement;
}
interface Product {
  id: string;
  title: string;
  img?: string;
}
// Small block Components

// Product Image

export const ProductImage = ({ img = "" }) => {
  return (
    <img
      className={styles.productImg}
      src={img ? img : noImage}
      alt="coffee Mug"
    />
  );
};

// Product Title

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

// Product Buttons
interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductButtons = ({
  counter,
  increaseBy,
}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
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
    <div className={styles.productCard}>
      {Children}
      {/* Because I put the Image inside of the public foler I was abale to fecth just like this ==>  */}
      {/* 
      <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
    </div>
  );
};

export default ProductCard;
