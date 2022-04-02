import { useState } from "react";

export const useProducts = () => {
  const [counter, setCounter] = useState(0);
  const increaseBy = (value: number) => {
    // Here the Math.max If the Values goes down zero the Math.max will return my counter to be zero meaning that the counter will never go under zero.
    setCounter((prev) => Math.max(prev + 1, 0));
  };
  return { counter, increaseBy };
};
