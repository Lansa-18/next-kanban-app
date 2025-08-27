/**
 * Platform Launch Store - Zustand state management for Kanban app
 * Manages global state for modal visibility and selected task data
 * Used across components for consistent state management
 */

import { create } from "zustand";

interface PlatformmState {
  isTaskOpen: boolean;
  isAddTaskOpen: boolean;
  isEditTaskOpen: boolean;

  // Actions
  setIsTaskOpen: (curState: boolean) => void;
  setIsAddTaskOpen: (curState: boolean) => void;
  setIsEditTaskOpen: (curState: boolean) => void;
  toggleTaskVisibility: () => void;
}

export const usePlatformLaunchStore = create<PlatformmState>((set) => ({
  // Initial state
  isTaskOpen: false,
  isAddTaskOpen: false,
  isEditTaskOpen: false,

  setIsTaskOpen: (curState: boolean) =>
    set({
      isTaskOpen: curState,
    }),

  setIsAddTaskOpen: (curState: boolean) => set({ isAddTaskOpen: curState }),

  setIsEditTaskOpen: (curState: boolean) => set({ isEditTaskOpen: curState }),

  toggleTaskVisibility: () =>
    set((state) => ({
      isTaskOpen: !state.isTaskOpen,
    })),
}));
