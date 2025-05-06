import { IFlower } from "@/Types/Flower.type";
import {
  IDistributorPayment,
  IUserPayment,
  PaymentType,
} from "@/Types/Payment.types";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  number: string;
  currentAddress: string;
  homeAddress?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;

  adminProfile?: IAdminProfile;
  managerProfile?: IManagerProfile;
  employProfile?: IEmployProfile;
  distributorProfile?: IDistributorProfile;

  buyRecord: string[];
  point: number;
  membership: MembershipTier;
  Flower: IFlower[];

  DistributorPayment: IDistributorPayment[];
  userPayment: IUserPayment[];
}

export interface IAdminProfile {
  id: string;
  userId: string;
  nidCardImage: string;
  fatherName: string;
  fatherNumber: string;
}

export interface IManagerProfile {
  id: string;
  userId: string;
  nidCardImage: string;
  cvImage?: string;
}

export interface IEmployProfile {
  id: string;
  userId: string;
  cvImage: string;
  employType: EmployType;
  rank: string;
  paymentType: PaymentType;
  paymentInfo: string[];
}

export interface IDistributorProfile {
  id: string;
  userId: string;
  payRecord: string[];
  pendingPayment: string[];
  successfulPayment: string[];
}

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

export enum EmployType {
  INTERN = "INTERN",
  PERMANENT = "PERMANENT",
  SENIOR = "SENIOR",
}

export enum MembershipTier {
  SILVER = "SILVER",
  GOLD = "GOLD",
  DIAMOND = "DIAMOND",
  PLATINUM = "PLATINUM",
  TITANIUM = "TITANIUM",
}
