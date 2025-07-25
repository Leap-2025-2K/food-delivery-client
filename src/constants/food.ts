export type FoodType = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  createdAt: string;
  updatedAt: string;
};

export type CategoryType = {
  _id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
};

export type FoodsWithCategory = {
  _id: string;
  categoryName: string;
  foods: FoodType[];
};
