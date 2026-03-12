import { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  phone: string;
  inn: string;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserDataState] = useState<UserData | null>(() => {
    // Восстанавливаем данные из localStorage при загрузке
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : null;
  });

  const setUserData = (data: UserData) => {
    setUserDataState(data);
    // Сохраняем в localStorage
    localStorage.setItem('userData', JSON.stringify(data));
  };

  const logout = () => {
    setUserDataState(null);
    localStorage.removeItem('userData');
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
