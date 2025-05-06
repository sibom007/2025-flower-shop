export type ResponseSuccessType = {
  data: never;
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
