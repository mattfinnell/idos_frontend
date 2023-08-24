import { User, onAuthStateChanged } from "firebase/auth";
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../config/firebase";

type ContextState = { user: User | null };

const AuthContext = createContext<ContextState | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};
const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const value = { user };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthentication = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthentication must be used within an AuthProvider");
  }

  return context.user;
};

export { AuthProvider, useAuthentication };
