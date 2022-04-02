import styles from "../styles/styles.module.css";

const ProductCard = () => {
  console.log(styles);
  return (
    <div className={styles.productCard}>
      {/* Because I put the Image inside of the public foler I was abale to fecth just like this ==>  */}
      <img src="./coffee-mug.png" alt="coffee mug" />
    </div>
  );
};

export default ProductCard;
