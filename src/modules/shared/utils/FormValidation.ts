import { FlowerCategory, FlowerType } from "@/Types/Flower.type";
import { z } from "zod";

export const FlowerformSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  price: z
    .number({ invalid_type_error: "Price is required" })
    .positive("Price must be a positive number"),
  image: z.string(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  color: z.string().min(1, "Color is required"),
  category: z.nativeEnum(FlowerCategory, {
    errorMap: () => ({ message: "Category is required" }),
  }),
  FlowerType: z.nativeEnum(FlowerType, {
    errorMap: () => ({ message: "Flower type is required" }),
  }),
  stock: z
    .number({ invalid_type_error: "Stock is required" })
    .int()
    .nonnegative("Stock must be zero or more"),
  discount: z
    .number()
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100")
    .optional()
    .or(z.literal("")),
});
