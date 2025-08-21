/**
 * ViewTaskModal Component - Modal for displaying detailed task information
 * Shows task title, description, subtasks checklist, and status controls
 * Triggered when user clicks on a ColumnItem (task card)
 */

import SubTaskList from "./SubTaskList";
import StatusDropdown from "./StatusDropdown";
import { usePlatformLaunchStore } from "@/store/usePlatformLaunchStore";

/**
 * ViewTaskModal displays comprehensive task details in an overlay modal
 * Includes task editing and deletion options, subtasks management, and status updates
 */
export default function ViewTaskModal() {
  // Zustand store for modal state and selected task data
  const { setIsTaskOpen, selectedTaskToView } = usePlatformLaunchStore();

  return (
    // Modal overlay with dark background
    <section className="fixed flex min-h-screen w-full items-center justify-center bg-black/50">
      {/* Modal content container */}
      <article className="bg-nav-background flex w-[30rem] flex-col gap-6 rounded-[6px] p-8">
        {/* Modal Header - Edit and Delete options */}
        <div className="text-15px flex justify-between font-medium">
          <p className="text-medium-grey cursor-pointer transition-all duration-300 hover:scale-105">
            Edit Task
          </p>
          <p className="text-primary-red cursor-pointer transition-all duration-300 hover:scale-105">
            Delete Task
          </p>
        </div>

        {/* Task Information Section */}
        <div className="flex flex-col gap-6">
          {/* Task Title */}
          <p className="text-foreground text-[18px] leading-normal font-bold">
            {selectedTaskToView?.title}
          </p>

          {/* Task Description with fallback */}
          <p className="text-medium-grey text-[13px] leading-[23px] font-medium">
            {selectedTaskToView?.description &&
            selectedTaskToView.description.trim()
              ? selectedTaskToView.description
              : "No description provided"}{" "}
          </p>
        </div>

        {/* Subtasks Section */}
        <div className="space-y-2">
          {/* TODO: Calculate actual completed subtasks count */}
          <p className="text-view-modal text-xs leading-normal font-bold">
            Subtasks (2 of 3)
          </p>

          {/* Interactive subtasks checklist */}
          <SubTaskList subtasks={selectedTaskToView?.subtasks ?? []} />
        </div>

        {/* Status Management Dropdown */}
        <StatusDropdown
          currentStatus={selectedTaskToView?.status}
          onStatusChange={(status) => {
            console.log("Status changed to:", status);
            // TODO: Implement status update logic
            // This should update the task status in the database
          }}
        />

        {/* Close Modal Button */}
        <button
          onClick={() => setIsTaskOpen(false)}
          className="text-primary-red text-15px self-start font-medium"
        >
          Close
        </button>
      </article>
    </section>
  );
}
