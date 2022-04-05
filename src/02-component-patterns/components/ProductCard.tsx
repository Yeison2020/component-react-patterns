import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProducts } from "../hooks/useProducts";
import { createContext, ReactElement, useContext } from "react";

// Implementing my Types:
interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}
interface Product {
  id: string;
  title: string;
  img?: string;
}
// Context API
// Check this out how important It is
// This's been using in the provider
interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
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
      <div className={styles.productCard}>
        {children}
        {/* Because I put the Image inside of the public foler I was abale to fecth just like this ==>  */}
        {/* 
      <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
// Attaching Components
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.buttons = ProductButtons;

export default ProductCard;
