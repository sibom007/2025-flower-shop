import { useUser } from "@/modules/auth/hooks/useUser";
import { User } from "@/modules/auth/Types";
import { createContext, useState, useContext, useEffect } from "react";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data } = useUser();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to consume context
export const useAuth = () => {
  return useContext(AuthContext);
};
