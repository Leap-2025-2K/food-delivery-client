"use client";

import { FoodCard } from "@/components/food";
import { FoodsWithCategory, FoodType } from "@/constants/food";
import { database } from "@/lib/utils/database";
import { useEffect, useState } from "react";

export const foodWithCategories: FoodsWithCategory[] = [
  {
    _id: "1",
    categoryName: "Mongol",
    foods: [
      {
        _id: "1",
        foodName: "Tsuivan",
        price: 1200,
        image:
          "https://storage.googleapis.com/bk-delivery/images/zyMTPi7P9YSIgSUDpQnuyxHopoygEmL95EA6v5Mc.png",
        ingredients: "ingredients ingredients ingredients",
        createdAt: "string",
        updatedAt: "",
      },
    ],
  },
  {
    _id: "2",
    foods: [
      {
        _id: "2",
        foodName: "Lavsha",
        price: 12001,
        image:
          "https://storage.googleapis.com/bk-delivery/images/zyMTPi7P9YSIgSUDpQnuyxHopoygEmL95EA6v5Mc.png",
        ingredients: "ingredients ingredients ingredients",
        createdAt: "string",
        updatedAt: "",
      },
    ],
    categoryName: "",
  },
];

type FoodsWithCategoriesType = {
  categoryName: string;
  count: number;
  foods: FoodType[];
};

export const FoodsWithCategories = () => {
  const [foods, setFoods] = useState<FoodsWithCategoriesType[]>();

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await database(
        "food/getFoodWithCategories",
        "GET",
        null
      );

      const foodWithCategories = await response.json();
      console.log(foodWithCategories.data);
      setFoods(foodWithCategories.data);
    };

    fetchFoods();
  }, []);

  if (!foods?.length) return null;

  const nonEmptyCategories = foods.filter(
    (category) => category?.foods?.length > 0
  );

  return (
    <div className="flex flex-col gap-6">
      {nonEmptyCategories?.map((category, index) => (
        <div key={index} className="flex flex-col gap-[54px] rounded-xl">
          <p className="text-3xl font-semibold text-white">
            {category?.categoryName}
          </p>
          <div className="grid grid-cols-1 mb-5 gap-9 sm:grid-cols-2 lg:grid-cols-3">
            {category?.foods.map((food) => {
              return (
                <div key={food?._id}>
                  <FoodCard {...food} />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
