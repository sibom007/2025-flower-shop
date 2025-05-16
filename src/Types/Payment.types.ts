export enum PaymentType {
  CASH_ON_DELIVERY = "CASH_ON_DELIVERY",
  BKASH = "BKASH",
  NAGAD = "NAGAD",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export interface IPayment {
  id: string;
  amount: number;
  paymentId: string;
  status: PaymentStatus;
  PaymentType: PaymentType;
  paymentDate: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}
