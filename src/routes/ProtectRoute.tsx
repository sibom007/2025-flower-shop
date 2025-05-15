
import useDecodedAuth from "@/modules/auth/hooks/useDecodedAuth";
import { UserRole } from "@/Types/User.types";
import { ReactNode, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ProtectRouteProps {
  children: ReactNode;
  roles?: UserRole[]; // Optional role restriction
  redirect?: string; // Custom redirect on role mismatch
}

export const ProtectRoute = ({
  children,
  roles,
  redirect = "/",
}: ProtectRouteProps) => {
  const { isAuthenticated, role } = useDecodedAuth();
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
    } else if (isAuthenticated && roles && !roles.includes(role as UserRole)) {
      navigate(redirect, { replace: true });
    }
  }, [
    isAuthenticated,
    role,
    roles,
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
    (isAuthenticated && roles && !roles.includes(role as UserRole))
  ) {
    return null;
  }

  return <>{children}</>;
};
