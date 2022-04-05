import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}
// Context API
// Check this out how important It is
// This's been using in the provider
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}
