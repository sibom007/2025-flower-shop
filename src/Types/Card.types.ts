export interface CardItem {
  id: string;
  UserId: string; // MongoDB ObjectId as string
  FlowerIds: string[]; // Array of MongoDB ObjectIds as strings
  Quantity: number;
  TotalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
