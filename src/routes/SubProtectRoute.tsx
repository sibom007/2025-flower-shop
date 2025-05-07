import useDecodedAuth from "@/modules/auth/hooks/useDecodedAuth";
import { useEffect, ReactNode } from "react";
// Custom hook for user authentication (adjust according to your implementation)
import { useNavigate } from "react-router-dom";

interface SubProtectRouteProps {
  children: ReactNode;
}

const SubProtectRoute = ({ children }: SubProtectRouteProps) => {
  const { isAuthenticated } = useDecodedAuth();
  // Adjust according to your auth logic
  const navigator = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // If user is not logged in, redirect to login
      navigator("/login");
    }
  }, [navigator, isAuthenticated]);

  return <>{children}</>; // Render the children if the user is logged in
};

export default SubProtectRoute;
