import { useUser } from "@/modules/auth/hooks/useUser";
import { User } from "@/modules/auth/Types";
import {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  refetchUser: () => void;
}

const AuthContext = createContext<UserContextType>({
  user: null,
  isLoading: true,
  refetchUser: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data, isLoading, refetch } = useUser();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(data || null);
  }, [data]);
  const refetchUser = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        refetchUser: refetchUser, // Expose refetch method
      }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to consume context
export const useAuth = () => {
  return useContext(AuthContext);
};
