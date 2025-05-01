import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import SignUpPage from "@/pages/SignUpPage";
import { createBrowserRouter } from "react-router-dom";
import { ProtectRoute } from "./ProtectRoute";

import NotPermitRoute from "@/models/error/components/NotPermitRoute";
import HomePage from "@/pages/HomePage";
<<<<<<< HEAD
import ShopPage from "@/pages/ShopPage";
import RootLayout from "@/layout/RootLayout";
=======
>>>>>>> bc039b79347f96c7273b243094f83f690b956fac

export const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
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
=======
    element: <HomePage />,
>>>>>>> bc039b79347f96c7273b243094f83f690b956fac
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
