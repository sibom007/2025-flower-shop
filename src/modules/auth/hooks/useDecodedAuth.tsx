import { Role } from "@/routes/ProtectRoute";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  role?: Role;
  exp?: number;
  id?: string;
}

interface DecodedPayload {
  isAuthenticated: boolean;
  role?: Role;
  id?: string;
}

const useDecodedAuth = (): DecodedPayload => {
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
      id: decoded.id,
    };
  } catch (error) {
    console.error("Token decoding failed:", error);
    return { isAuthenticated: false };
  }
};

export default useDecodedAuth;
