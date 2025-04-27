export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type Flower = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  color: string;
  category: string;
  FlowerType: string;
  stock: number;
  discount?: number;
};
