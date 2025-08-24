/**
 * Platform Launch Store - Zustand state management for Kanban app
 * Manages global state for modal visibility and selected task data
 * Used across components for consistent state management
 */

import { tasksObj } from "@/_lib/types";
import { create } from "zustand";

interface PlatformmState {
  isTaskOpen: boolean;
  isDeleteConfirmOpen: boolean;
  selectedTaskToView: tasksObj | null;

  // Actions
  setIsTaskOpen: (curState: boolean) => void;
  setIsDeleteConfirmOpen: (curState: boolean) => void;
  setSelectedTaskToView: (task: tasksObj) => void;
  toggleTaskVisibility: () => void;
}

export const usePlatformLaunchStore = create<PlatformmState>((set) => ({
  // Initial state
  isTaskOpen: false,
  isDeleteConfirmOpen: false,
  selectedTaskToView: null,

  setIsTaskOpen: (curState: boolean) =>
    set({
      isTaskOpen: curState,
    }),

  setIsDeleteConfirmOpen: (curState: boolean) => set({isDeleteConfirmOpen: curState}),

  setSelectedTaskToView: (task: tasksObj) =>
    set({
      selectedTaskToView: task,
    }),

  toggleTaskVisibility: () =>
    set((state) => ({
      isTaskOpen: !state.isTaskOpen,
    })),
}));
