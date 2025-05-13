import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import SignUpPage from "@/pages/SignUpPage";
import { createBrowserRouter } from "react-router-dom";
import { ProtectRoute, Role } from "./ProtectRoute";

import NotPermitRoute from "@/modules/error/components/NotPermitRoute";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import RootLayout from "@/layout/RootLayout";
import Dashboard from "@/pages/Dashboard";
import DashboardLayout from "@/layout/DashboardLayout";
import UserStatus from "@/modules/dashbord/Admin/components/UserStatus";

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
        path: "/dashboard/status",
        element: (
          <ProtectRoute role={Role.ADMIN || Role.MANAGER}>
            <UserStatus />,
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
