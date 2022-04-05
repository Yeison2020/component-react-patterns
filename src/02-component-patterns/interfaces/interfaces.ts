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

export interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export interface ProductCardMainPropsHOC {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
