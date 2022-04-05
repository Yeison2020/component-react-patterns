import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  // Checkout Tomorrow IMPORTANT

  // I needed to do it this way, because I needed to evualate three elements
  // 1. img , 2. product.img, 3. noImage
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }
  return <img className={styles.productImg} src={imgToShow} alt="coffee Mug" />;
};
