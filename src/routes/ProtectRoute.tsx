import useAuth from "@/modules/auth/hooks/useAuth";
import { ReactNode, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export enum Role {
  USER = "USER",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
  EMPLOY = "EMPLOY",
  DISTRIBUTOR = "DISTRIBUTOR",
}

interface ProtectRouteProps {
  children: ReactNode;
  role?: Role; // Optional role restriction
  redirect?: string; // Custom redirect on role mismatch
}

export const ProtectRoute = ({
  children,
  role,
  redirect = "/",
}: ProtectRouteProps) => {
  const { isAuthenticated, role: userRole } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const publicRoutes = useMemo(() => ["/login", "/signup"], []);

  useEffect(() => {
    const isPublic = publicRoutes.includes(location.pathname);

    if (!isAuthenticated && !isPublic) {
      // Not logged in and trying to access a protected route
      navigate("/login", { replace: true });
    } else if (isAuthenticated && isPublic && location.pathname !== "/") {
      // Logged in but trying to access public-only route (like /login or /signup)
      navigate("/", { replace: true });
    } else if (isAuthenticated && role && userRole !== role) {
      // Logged in but role mismatch
      navigate(redirect, { replace: true });
    }
  }, [
    isAuthenticated,
    userRole,
    role,
    location.pathname,
    navigate,
    redirect,
    publicRoutes,
  ]);

  // Prevent rendering while redirecting
  const isPublic = publicRoutes.includes(location.pathname);
  if (
    (!isAuthenticated && !isPublic) ||
    (isAuthenticated && isPublic && location.pathname !== "/") ||
    (isAuthenticated && role && userRole !== role)
  ) {
    return null;
  }

  return <>{children}</>;
};
