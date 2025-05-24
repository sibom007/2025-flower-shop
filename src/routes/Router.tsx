import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import SignUpPage from "@/pages/SignUpPage";
import { createBrowserRouter } from "react-router-dom";
import { ProtectRoute } from "./ProtectRoute";

import NotPermitRoute from "@/modules/error/components/NotPermitRoute";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import RootLayout from "@/layout/RootLayout";
import Dashboard from "@/pages/Dashboard";
import DashboardLayout from "@/layout/DashboardLayout";

import UserStatusPage from "@/pages/adminPage/UserStatusPage";
import CreateFlowerPage from "@/pages/CreateFlowerPage";
import FlowerActionsPage from "@/pages/FlowerActionsPage";
import { UserRole } from "@/Types/User.types";
import ProfilePage from "@/pages/ProfilePage";
import PaymentPage from "@/pages/PaymentPage";
import OrdersPage from "@/pages/OrdersPage";
import CardPage from "@/pages/CardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <HomePage />
      </RootLayout>
    ),
  },
  {
    path: "/shop",
    element: (
      <RootLayout>
        <ShopPage />
      </RootLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectRoute>
        <DashboardLayout />
      </ProtectRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/cards",
        element: <CardPage />,
      },
      {
        path: "/dashboard/profile",
        element: <ProfilePage />,
      },
      {
        path: "/dashboard/orders",
        element: <OrdersPage />,
      },
      {
        path: "/dashboard/payments",
        element: <PaymentPage />,
      },

      {
        path: "/dashboard/status",
        element: (
          <ProtectRoute roles={[UserRole.ADMIN, UserRole.MANAGER]}>
            <UserStatusPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/dashboard/create-flower",
        element: (
          <ProtectRoute roles={[UserRole.ADMIN, UserRole.MANAGER]}>
            <CreateFlowerPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/dashboard/flower-actions",
        element: (
          <ProtectRoute roles={[UserRole.ADMIN, UserRole.MANAGER]}>
            <FlowerActionsPage />
          </ProtectRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectRoute>
        <LoginPage />
      </ProtectRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectRoute>
        <SignUpPage />,
      </ProtectRoute>
    ),
  },
  {
    path: "/not-parmit",
    element: <NotPermitRoute />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
