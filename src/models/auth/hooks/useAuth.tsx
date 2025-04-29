import { Role } from "@/routes/ProtectRoute";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  role?: Role;
  exp?: number;
}

interface User {
  isAuthenticated: boolean;
  role?: Role;
}

const useAuth = (): User => {
  const token: string | null = localStorage.getItem("accessToken");
  if (!token) {
    return { isAuthenticated: false };
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);

    // Check for expiration (optional)
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      return { isAuthenticated: false };
    }

    return {
      isAuthenticated: true,
      role: decoded.role,
    };
  } catch (e) {
    return { isAuthenticated: false };
  }
};

export default useAuth;
