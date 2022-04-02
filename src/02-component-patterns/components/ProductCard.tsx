import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

import { useState } from "react";

const ProductCard = () => {
  const [counter, setCounter] = useState(0);

  // Handler Functions
  const increaseBy = (value: number) => {
    // Here the Math.max If the Values goes down zero the Math.max will return my counter to be zero meaning that the counter will never go under zero.
    setCounter((prev) => Math.max(prev + value, 0));
  };

  console.log(styles);
  return (
    <div className={styles.productCard}>
      {/* Because I put the Image inside of the public foler I was abale to fecth just like this ==>  */}
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="coffee Mug"
      />
      {/* <img className={styles.productImg} src={noImage} alt="coffee Mug" /> */}
      <span className={styles.productDescription}>Coffee Mug</span>
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
