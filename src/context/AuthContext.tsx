import { User } from "@/modules/auth/Types";
import { createContext, useState, useContext } from "react";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

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
