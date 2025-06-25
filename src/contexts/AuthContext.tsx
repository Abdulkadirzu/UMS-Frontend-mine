import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { User, Role } from "../types";
import { users } from "../utils/mockData";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, role: Role) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  register: (email: string, role: Role) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("schoolUser");
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        if (
          parsedUser &&
          typeof parsedUser.id === "string" &&
          typeof parsedUser.name === "string" &&
          typeof parsedUser.role === "string" &&
          typeof parsedUser.email === "string"
        ) {
          setUser(parsedUser);
          setIsAuthenticated(true);
        } else {
          console.error("Invalid user data in localStorage");
          localStorage.removeItem("schoolUser");
        }
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("schoolUser"); // Clear invalid data
      }
    }
    setLoading(false);
  }, []); // Empty dependency array means this effect runs once on mount

  const login = async (email: string, role: Role): Promise<boolean> => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo: Accept any email and create a user with the selected role
      let matchedUser = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.role === role
      );

      // If a matching user is found, use that user. Otherwise, create a new user.
      if (matchedUser) {
        setUser(matchedUser);
        setIsAuthenticated(true);
        localStorage.setItem("schoolUser", JSON.stringify(matchedUser));
        toast.success("Login successful!");
        return true;
      } else {
        // If no matching user, create a new user with the provided email and role
        const newUser = {
          id: `demo-${Math.random().toString(36).substr(2, 9)}`,
          name: email.split("@")[0],
          email: email,
          role: role,
          twoFactorEnabled: false,
        } as User;

        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem("schoolUser", JSON.stringify(newUser));
        toast.success("Login successful!");
        return true;
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, role: Role): Promise<boolean> => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo: In a real app, you'd create a new user in your backend.
      // Here, we'll just simulate successful registration and log the user in.
      const newUser = {
        id: `demo-${Math.random().toString(36).substr(2, 9)}`,
        name: email.split("@")[0], // Use part of email as name
        email: email,
        role: role,
        twoFactorEnabled: false,
      } as User;

      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem("schoolUser", JSON.stringify(newUser));
      toast.success("Registration successful!");
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to create an account. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("schoolUser");
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, isAuthenticated, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
