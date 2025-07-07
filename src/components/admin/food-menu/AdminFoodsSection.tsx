"use client";

import { useEffect, useState } from "react";
import { AddFoodModal } from "./AddFoodModal";
import { AdminFoodCard } from "./AdminFoodCard";
import { AdminFoodSkeleton } from "./AdminFoodSkeleton";
import { database } from "@/lib/utils/database";

export type FoodCategory = {
  _id: string;
  categoryName: string;
  count: number;
  foods: {
    _id: string;
    foodName: string;
    price: number;
    image: string;
    ingredients: string;
    createdAt?: string;
    updatedAt?: string;
  }[];
};

export const AdminFoodsSection = () => {
  const [foods, setFoods] = useState<FoodCategory[]>([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await database(
        "food/getFoodWithCategories",
        "GET",
        null
      );

      const foodWithCategories = await response.json();

      setFoods(foodWithCategories.data);
    };

    fetchFoods();
  }, []);

  if (!foods) return null;

  if (!foods.length) return <AdminFoodSkeleton />;

  return (
    <div className="flex flex-col gap-6">
      {foods.map((category, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 p-6 bg-background rounded-xl"
        >
          <div className="flex items-center gap-2 text-xl font-semibold">
            <p>{category.categoryName}</p>
            <p className="flex items-center">{category.count}</p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <AddFoodModal
              categoryName={category.categoryName}
              categoryId={category._id}
            />
            {category.foods.map((food) => (
              <div key={`${food._id}`} className="flex gap-2">
                <AdminFoodCard
                  image={food.image}
                  price={food.price}
                  ingredients={food.ingredients}
                  foodName={food.foodName}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
