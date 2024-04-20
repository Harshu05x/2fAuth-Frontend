import create from "zustand";
import { IUser } from "../api/types";

type Store = {
  authUser: IUser | null;
  requestLoading: boolean;
  setAuthUser: (user: IUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
};

const useStore = create<Store>((set) => ({
  authUser: localStorage.getItem("authUser") ? JSON.parse(localStorage.getItem("authUser") as string) : null,
  requestLoading: false,
  setAuthUser: (user) => {
    if (user){
      localStorage.setItem("authUser", JSON.stringify(user));
      set({ authUser: user });
    }
    else{
      localStorage.removeItem("authUser");
      set({ authUser: null });
    }
  },
  setRequestLoading: (isLoading) =>
    set((state) => ({ ...state, requestLoading: isLoading })),
}));

export default useStore;
