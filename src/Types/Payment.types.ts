export interface IDistributorPayment {
  id: string;
  FlowerName: string;
  stock: number;
  price: number;
  totalPrice: number;
  number: string;
  paymentType: PaymentType;
  paymentStatus: PaymentStatus;
  userId: string;
}

export interface IUserPayment {
  id: string;
  FlowerName: string;
  quantity: number;
  price: number;
  totalPrice: number;
  number: string;
  paymentImage: string;
  discountCoupon: string;
  paymentType: PaymentType;
  paymentStatus: PaymentStatus;
  userId: string;
}

export enum PaymentStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export enum PaymentType {
  BANK = "BANK",
  NAGOD = "NAGOD",
  BKASH = "BKASH",
}
