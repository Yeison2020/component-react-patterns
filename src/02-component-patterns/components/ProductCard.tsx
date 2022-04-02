import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

const ProductCard = () => {
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
        <button className={styles.buttonMinus}>-</button>
        <div className={styles.countLabel}> 0 </div>
        <button className={styles.buttonAdd}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
