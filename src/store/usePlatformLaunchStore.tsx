import { tasksObj } from "@/_lib/types";
import { create } from "zustand";

interface PlatformmState {
  isTaskOpen: boolean;
  selectedTaskToView: tasksObj | null;
  setIsTaskOpen: (curState: boolean) => void;
  setSelectedTaskToView: (task: tasksObj) => void;
  toggleTaskVisibility: () => void;
}

export const usePlatformLaunchStore = create<PlatformmState>((set) => ({
  isTaskOpen: false,
  selectedTaskToView: null,

  setIsTaskOpen: (curState: boolean) =>
    set({
      isTaskOpen: curState,
    }),

  setSelectedTaskToView: (task: tasksObj) =>
    set({
      selectedTaskToView: task,
    }),

  toggleTaskVisibility: () =>
    set((state) => ({
      isTaskOpen: !state.isTaskOpen,
    })),
}));
