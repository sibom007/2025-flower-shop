export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  number: string;
  currentAddress: string;
}


export interface User  {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  number: string;
  currentAddress: string;
  homeAddress?: string;
  role: "USER" | "MANAGER" | "ADMIN" | "EMPLOY" | "DISTRIBUTOR";
  status: "ACTIVE" | "BLOCKED";
  createdAt: Date;
  updatedAt: Date;
  buyRecord: string[];
  point: number;
  membership: "SILVER" | "GOLD" | "DIAMOND" | "PLATINUM" | "TITANIUM";
};

