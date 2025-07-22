"use client";

import { FoodType } from "@/constants/food";
import { createContext, useContext, useState } from "react";

export type FoodWithQuantity = {
  food: FoodType;
  quantity: number;
  totalPrice: number;
};

type FoodCartContextType = {
  foodCart: FoodWithQuantity[];
  addToCart: (_food: FoodWithQuantity) => void;
  removeFromCart: (_foodId: string) => void;
  incrementFoodQuantity: (_foodId: string) => void;
  decrimentFoodQuantity: (_foodId: string) => void;
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

  const addToCart = (newFood: FoodWithQuantity) => {
    const existingFood = foodCart.find(
      ({ food }) => food._id === newFood.food._id
    );

    if (existingFood) {
      const updatedFoodCart = updateFoodCart(foodCart, newFood);

      setFoodCart(updatedFoodCart);
      return;
    }

    setFoodCart([...foodCart, newFood]);
  };

  const incrementFoodQuantity = (foodId: string) => {
    const updatedFoodCart = foodCart.map(({ food, quantity, totalPrice }) => {
      if (food._id === foodId) {
        return {
          food: food,
          quantity: quantity + 1,
          totalPrice: quantity * Number(food.price),
        };
      } else {
        return {
          food,
          quantity,
          totalPrice,
        };
      }
    });

    setFoodCart(updatedFoodCart);
  };

  const decrimentFoodQuantity = (foodId: string) => {
    const updatedFoodCart = foodCart.map(({ food, quantity, totalPrice }) => {
      if (food._id === foodId) {
        return {
          food: food,
          quantity: quantity - 1,
          totalPrice: (quantity - 1) * food.price,
        };
      } else {
        return {
          food,
          quantity,
          totalPrice,
        };
      }
    });

    setFoodCart(updatedFoodCart);
  };

  const removeFromCart = (foodId: string) => {
    // setFoodCart();
  };

  return (
    <FoodCartContext.Provider
      value={{
        foodCart,
        addToCart,
        removeFromCart: () => {},
        incrementFoodQuantity,
        decrimentFoodQuantity,
      }}
    >
      {children}
    </FoodCartContext.Provider>
  );
}

export const useFoodCart = () => useContext(FoodCartContext);

const updateFoodCart = (
  foodCart: FoodWithQuantity[],
  newFood: FoodWithQuantity
) => {
  const updatedFoodCart = foodCart.map(({ food, quantity, totalPrice }) => {
    if (food._id === food._id) {
      return {
        food: food,
        quantity: quantity + newFood.quantity,
        totalPrice: quantity * Number(food.price),
      };
    } else {
      return {
        food,
        quantity,
        totalPrice,
      };
    }
  });

  return updatedFoodCart;
};
