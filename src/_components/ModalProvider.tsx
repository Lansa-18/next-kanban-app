/**
 * ModalProvider Component - Client-side wrapper for modal management
 * Handles conditional rendering of modals based on Zustand store state
 * Separates client-side logic from server components (layout.tsx)
 */

"use client";

import ViewTaskModal from "./ViewTaskModal";
import { usePlatformLaunchStore } from "@/store/usePlatformLaunchStore";

/**
 * ModalProvider manages the display of application modals
 * Uses Zustand store to determine which modals should be visible
 * This pattern keeps the root layout as a server component
 */
export default function ModalProvider() {
  // Subscribe to modal state from Zustand store
  const { isTaskOpen } = usePlatformLaunchStore();

  return (
    <>
      {/* Conditionally render ViewTaskModal based on store state */}
      {isTaskOpen && <ViewTaskModal />}

      {/* Future modals can be added here:
          {isAddTaskOpen && <AddTaskModal />}
          {isEditTaskOpen && <EditTaskModal />}
          {isDeleteConfirmOpen && <DeleteConfirmModal />}
      */}
    </>
  );
}
