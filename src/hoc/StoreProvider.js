import { createContext } from "react";
import { useUsers } from "../hooks/useUsers";

export const Store = createContext();
export const StoreProvider = ({ children }) => {
  const useCreateStore = () => {
    const storeObj = {
      users: useUsers(),
    };
    return storeObj;
  };

  const storeObj = useCreateStore();
  return <Store.Provider value={storeObj}>{children}</Store.Provider>;
};
