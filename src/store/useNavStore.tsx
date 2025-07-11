import { create } from "zustand";

interface NavState {
  isSideNavOpen: boolean;
  setIsSideNavOpen: (curState: boolean) => void;
  toggleSideNav: () => void;
}

export const useNavstore = create<NavState>((set) => ({
  isSideNavOpen: false,

  setIsSideNavOpen: (curState: boolean) =>
    set({
      isSideNavOpen: curState,
    }),

  toggleSideNav: () =>
    set((state) => ({
      isSideNavOpen: !state.isSideNavOpen,
    })),
}));
