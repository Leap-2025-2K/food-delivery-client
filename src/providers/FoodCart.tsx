"use client";

import { FoodType } from "@/constants/food";
import { createContext, useState } from "react";

type FoodWithQuantity = { food: FoodType; quantity: number };

type FoodCartContextType = {
  foodCart: FoodWithQuantity[];
  addToCart: (_food: FoodWithQuantity) => void;
  removeFromCart: (_foodId: string) => void;
};

export const FoodCartContext = createContext<FoodCartContextType>(
  {} as FoodCartContextType
);

export default function FoodCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [foodCart, setFoodCart] = useState<FoodWithQuantity[]>([]);

  const addToCart = (food: FoodWithQuantity) => {
    setFoodCart([...foodCart, food]);
  };

  const removeFromCart = (foodId: string) => {
    // setFoodCart();
  };

  return (
    <FoodCartContext.Provider
      value={{ foodCart, addToCart, removeFromCart: () => {} }}
    >
      {children}
    </FoodCartContext.Provider>
  );
}
