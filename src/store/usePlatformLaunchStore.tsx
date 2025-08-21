/**
 * Platform Launch Store - Zustand state management for Kanban app
 * Manages global state for modal visibility and selected task data
 * Used across components for consistent state management
 */

import { tasksObj } from "@/_lib/types";
import { create } from "zustand";

/**
 * State interface for Platform Launch store
 * Defines the shape of global state and available actions
 */
interface PlatformmState {
  // Modal state
  isTaskOpen: boolean; // Controls ViewTaskModal visibility

  // Task data
  selectedTaskToView: tasksObj | null; // Currently selected task for modal display

  // Actions
  setIsTaskOpen: (curState: boolean) => void; // Direct modal state setter
  setSelectedTaskToView: (task: tasksObj) => void; // Set task data for modal
  toggleTaskVisibility: () => void; // Toggle modal visibility
}

/**
 * Zustand store for Platform Launch application state
 * Provides global state management for modal operations and task selection
 *
 * Usage:
 * - const { isTaskOpen, setSelectedTaskToView } = usePlatformLaunchStore()
 * - Call setSelectedTaskToView() when user clicks a task
 * - Call toggleTaskVisibility() to show/hide modal
 */
export const usePlatformLaunchStore = create<PlatformmState>((set) => ({
  // Initial state
  isTaskOpen: false, // Modal starts closed
  selectedTaskToView: null, // No task selected initially

  /**
   * Set modal visibility state directly
   * @param curState - true to show modal, false to hide
   */
  setIsTaskOpen: (curState: boolean) =>
    set({
      isTaskOpen: curState,
    }),

  /**
   * Set the task data to display in the modal
   * @param task - Complete task object with subtasks
   */
  setSelectedTaskToView: (task: tasksObj) =>
    set({
      selectedTaskToView: task,
    }),

  /**
   * Toggle modal visibility (show if hidden, hide if shown)
   * Useful for click handlers that need to toggle state
   */
  toggleTaskVisibility: () =>
    set((state) => ({
      isTaskOpen: !state.isTaskOpen,
    })),
}));
