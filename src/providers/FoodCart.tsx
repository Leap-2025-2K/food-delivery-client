"use client";

import { FoodType } from "@/constants/food";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type FoodCartContextType = {
  foodCart: { food: FoodType; quantity: number }[];
  setFoodCart: Dispatch<SetStateAction<{ food: FoodType; quantity: number }[]>>;
};

export const FoodCartContext = createContext<FoodCartContextType>(
  {} as FoodCartContextType
);

export default function FoodCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [foodCart, setFoodCart] = useState<
    { food: FoodType; quantity: number }[]
  >([]);

  return (
    <FoodCartContext.Provider value={{ foodCart, setFoodCart }}>
      {children}
    </FoodCartContext.Provider>
  );
}
