import { PaymentStatus, PaymentType } from "./Payment.types";

export enum DeliveryStatus {
  PENDING = "PENDING",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  RETURNED = "RETURNED",
}

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
}

export interface IOrder {
  id: string;
  FlowerId: string;
  TotalPrice: string;
  Quantity: string;
  PaymentType: PaymentType;
  PaymentStatus: PaymentStatus;
  OrderDate: string;
  DeliveryDate?: string;
  DeliveryAddress: string;
  DeliveryStatus: DeliveryStatus;
  DeliveryCharge: number;
  OrderStatus: OrderStatus;
  creaatedAt: string;
  updatedAt: string;
  userId: string;
}
