import { IFlower } from "./Flower.type";
import { IOrder } from "./Orders.types";
import { IPayment } from "./Payment.types";

export enum UserRole {
  USER = "USER",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
  EMPLOY = "EMPLOY",
  DISTRIBUTOR = "DISTRIBUTOR",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  BLOCKED = "BLOCKED",
}

export enum Membership {
  SILVER = "SILVER",
  GOLD = "GOLD",
  DIAMOND = "DIAMOND",
  PLATINUM = "PLATINUM",
  TITANIUM = "TITANIUM",
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  number: string;
  currentAddress: string;
  homeAddress?: string;
  FatherName?: string;
  FatherNumber?: string;
  NIDNumber?: string;
  NIDFront?: string;
  NIDBack?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
  point: number;
  membership: Membership;
  buyRecord: string[];
  Flower: IFlower[];
  orders: IOrder[];
  payments: IPayment[];
}
