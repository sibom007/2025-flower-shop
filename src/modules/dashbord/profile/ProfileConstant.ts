import { Membership, UserRole, UserStatus } from "@/Types/User.types";

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getMembershipColor = (tier: Membership) => {
  switch (tier) {
    case Membership.SILVER:
      return "bg-gray-300 text-gray-800";
    case Membership.GOLD:
      return "bg-amber-300 text-amber-800";
    case Membership.DIAMOND:
      return "bg-sky-300 text-sky-800";
    case Membership.PLATINUM:
      return "bg-slate-300 text-slate-800";
    case Membership.TITANIUM:
      return "bg-purple-300 text-purple-800";
    default:
      return "bg-gray-300 text-gray-800";
  }
};
export const getRoleColor = (role: UserRole) => {
  switch (role) {
    case UserRole.ADMIN:
      return "bg-red-100 text-red-800";
    case UserRole.MANAGER:
      return "bg-blue-100 text-blue-800";
    case UserRole.EMPLOY:
      return "bg-green-100 text-green-800";
    case UserRole.DISTRIBUTOR:
      return "bg-purple-100 text-purple-800";
    case UserRole.USER:
    default:
      return "bg-gray-100 text-gray-800";
  }
};

//  TODO : should be remove after payment and orders
export const mockUser = {
  id: "user-123",
  name: "Sophia Anderson",
  email: "sophia@flowerbloom.com",
  password: "********",
  image: "/placeholder.svg?height=100&width=100",
  number: "+1 (555) 123-4567",
  currentAddress: "123 Blossom Street, Floral Park, NY 10001",
  homeAddress: "456 Garden Avenue, Meadowville, NY 10002",
  role: UserRole.MANAGER,
  status: UserStatus.ACTIVE,
  createdAt: "2023-05-15T10:30:00Z",
  updatedAt: "2024-04-20T14:45:00Z",
  managerProfile: {
    id: "manager-123",
    userId: "user-123",
    nidCardImage: "/placeholder.svg?height=200&width=300",
    cvImage: "/placeholder.svg?height=200&width=300",
  },
  buyRecord: ["order-001", "order-002", "order-003"],
  point: 1250,
  membership: Membership.GOLD,
  Flower: [],
  DistributorPayment: [],
  userPayment: [
    {
      id: "payment-001",
      amount: 125.99,
      date: "2024-04-15T09:30:00Z",
      status: "completed",
    },
    {
      id: "payment-002",
      amount: 89.5,
      date: "2024-03-22T14:15:00Z",
      status: "completed",
    },
  ],
};
