export type Category = "shoes" | "electronics" | "clothing";

export type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  stock: number;
};