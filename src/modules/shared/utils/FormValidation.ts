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


export const UpdateFlowerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be greater than 0"),
  description: z.string().min(1, "Description is required"),
  color: z.string(),
  category: z.nativeEnum(FlowerCategory),
  FlowerType: z.nativeEnum(FlowerType),
  stock: z.number().int().nonnegative("Stock must be 0 or more"),
  discount: z.number().min(0).max(100).optional(),
  isAvailable: z.boolean(),
});