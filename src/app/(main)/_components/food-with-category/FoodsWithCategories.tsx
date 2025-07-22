"use client";

import { FoodCard } from "@/components/food";
import { FoodsWithCategory } from "@/constants/food";

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

export const FoodsWithCategories = () => {
  if (!foodWithCategories?.length) return null;

  const nonEmptyCategories = foodWithCategories.filter(
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
