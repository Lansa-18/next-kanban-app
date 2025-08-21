/**
 * ColumnItem Component - Individual task card within a kanban column
 * Displays task title and subtask progress
 * Clicking opens the ViewTaskModal with detailed task information
 */

"use client";

import { tasksObj } from "@/_lib/types";
import { usePlatformLaunchStore } from "@/store/usePlatformLaunchStore";

/**
 * Props interface for ColumnItem component
 */
interface ColumnItemsProps {
  mainText: string; // Task title to display
  numOfSubtasks: number; // Total number of subtasks
  task: tasksObj; // Complete task object for modal display
}

/**
 * ColumnItem represents a single task card in the kanban board
 *
 * @param mainText - The task title displayed on the card
 * @param numOfSubtasks - Number of subtasks (for progress display)
 * @param task - Complete task data passed to modal when clicked
 */
export default function ColumnItem({
  mainText,
  numOfSubtasks,
  task,
}: ColumnItemsProps) {
  // Zustand store hooks for modal state management
  const { toggleTaskVisibility, setSelectedTaskToView } =
    usePlatformLaunchStore();

  /**
   * Handle task card click - Opens modal with task details
   * Sets the selected task in global state and shows the modal
   */
  const setTask = () => {
    console.log(task); // Debug: Log task data
    setSelectedTaskToView(task); // Store task data for modal
    toggleTaskVisibility(); // Show the ViewTaskModal
  };

  return (
    <section
      onClick={setTask}
      className="max-w-[300px] cursor-pointer border-red-500 transition-all duration-300 hover:scale-105"
    >
      <article className="flex flex-col gap-5">
        {/* Task Card */}
        <div className="bg-nav-background shadow-custom gap-2 rounded-[8px] px-4 py-6">
          {/* Task Title */}
          <h2 className="text-15px text-foreground leading-normal font-bold">
            {mainText}
          </h2>

          {/* Subtask Progress - TODO: Calculate completed subtasks */}
          <p className="text-medium-grey text-12px font-bold">
            0 of {numOfSubtasks} subtasks
          </p>
        </div>
      </article>
    </section>
  );
}
