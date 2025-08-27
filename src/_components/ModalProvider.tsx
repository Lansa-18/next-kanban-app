/**
 * ModalProvider Component - Client-side wrapper for modal management
 * Handles conditional rendering of modals based on Zustand store state
 * Separates client-side logic from server components (layout.tsx)
 */

"use client";

import EditTaskModal from "./EditTaskModal";
import ViewTaskModal from "./ViewTaskModal";
import { usePlatformLaunchStore } from "@/store/usePlatformLaunchStore";

export default function ModalProvider() {
  const { isTaskOpen, isAddTaskOpen, isEditTaskOpen } =
    usePlatformLaunchStore();

  return (
    <>
      {/* Conditionally render ViewTaskModal based on store state */}
      {isTaskOpen && <ViewTaskModal />}
      {isEditTaskOpen && (
        <EditTaskModal type="edit" btnName="Save Changes" />
      )}
      {isAddTaskOpen && (
        <EditTaskModal btnName="Create Task" />
      )}
    </>
  );
}
