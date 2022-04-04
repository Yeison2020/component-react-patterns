import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProducts } from "../hooks/useProducts";

// Implementing my Types:
interface Props {
  product: Product;
}
interface Product {
  id: string;
  title: string;
  img?: string;
}
const ProductCard = ({ product }: Props) => {
  // Customs Hooks Imports
  const { counter, increaseBy } = useProducts();

  //
  console.log(styles);
  return (
    <div className={styles.productCard}>
      {/* Because I put the Image inside of the public foler I was abale to fecth just like this ==>  */}
      <img
        className={styles.productImg}
        src={product.img ? product.img : noImage}
        alt="coffee Mug"
      />
      <span className={styles.productDescription}>{product.title}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}> {counter} </div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
