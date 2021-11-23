import React, {
  createContext,
  useContext,
  useState,
  ReactNode

} from 'react';

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;


}

type AuthContextData = {
  user: User;
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, serUser] = useState<User>({
    id: '1',
    username: 'marcusdavanco',
    firstName: 'marcus',
    avatar: 'marcus.png',
    email: 'marcus@email.com',
    token: 'string'
  });

  return (
    <AuthContext.Provider value={{
      user
    }}>
      {children}
    </AuthContext.Provider>
  )

}

export function useAuth() {
  const context = useContext(AuthContext)

  return context;
}