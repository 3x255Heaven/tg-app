import { createContext, useContext, useState, ReactNode } from "react";

type ForgotPasswordContextType = {
  currentView: "submit" | "submitted";
  setCurrentView: (view: "submit" | "submitted") => void;
  email: string;
  setEmail: (email: string) => void;
};

const ForgotPasswordContext = createContext<
  ForgotPasswordContextType | undefined
>(undefined);

export const ForgotPasswordProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentView, setCurrentView] = useState<"submit" | "submitted">(
    "submit"
  );
  const [email, setEmail] = useState<string>("");

  return (
    <ForgotPasswordContext.Provider
      value={{ currentView, setCurrentView, email, setEmail }}
    >
      {children}
    </ForgotPasswordContext.Provider>
  );
};

export const useForgotPassword = () => {
  const context = useContext(ForgotPasswordContext);
  if (!context) {
    throw new Error(
      "useForgotPassword must be used within a ForgotPasswordProvider"
    );
  }
  return context;
};
