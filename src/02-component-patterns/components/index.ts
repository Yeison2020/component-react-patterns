import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardMainPropsHOC } from "../interfaces/interfaces";

// Importadas
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons ";

// Exportadas Remember Their being use using Just their regular components
export { ProductButtons } from "./ProductButtons ";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
// export { ProductCard } from "./ProductCard";

// When Adding Object,assign is creating a Component from HOC and extending the component with those other components
export const ProductCard: ProductCardMainPropsHOC = Object.assign(
  ProductCardHOC,
  {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
  }
);

export default ProductCard;
