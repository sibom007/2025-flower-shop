import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import SignUpPage from "@/pages/SignUpPage";
import { createBrowserRouter } from "react-router-dom";
import { ProtectRoute } from "./ProtectRoute";

import NotPermitRoute from "@/modules/error/components/NotPermitRoute";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import RootLayout from "@/layout/RootLayout";

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
        <ProtectRoute>
          <ShopPage />
        </ProtectRoute>
      </RootLayout>
    ),
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
