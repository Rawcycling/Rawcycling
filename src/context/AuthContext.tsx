/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { typeAuthContext } from "../utils/types";

const AuthContext = createContext<typeAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
