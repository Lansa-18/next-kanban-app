/**
 * SubTaskList Component - Interactive checklist for task subtasks
 * Displays a list of subtasks with checkboxes for completion tracking
 * Uses local state to manage checkbox interactions (controlled components)
 */

"use client";

import { subTasksObj } from "@/_lib/types";
import { useState } from "react";

/**
 * Props interface for SubTaskList component
 */
interface SubTaskListProp {
  subtasks: subTasksObj[]; // Array of subtask objects from parent task
}

/**
 * SubTaskList renders an interactive checklist of subtasks
 * Each subtask can be toggled between completed/incomplete states
 *
 * @param subtasks - Array of subtask objects to render as checkboxes
 */
const SubTaskList = ({ subtasks }: SubTaskListProp) => {
  // Local state to manage checkbox values (controlled components)
  // Initialized with data from props, but managed independently
  const [tasks, setTasks] = useState(subtasks);

  /**
   * Toggle completion status of a specific subtask
   * Updates local state immutably to trigger re-render
   *
   * @param taskId - ID of the subtask to toggle
   */
  const toggleTask = (taskId: number) => {
    setTasks(
      tasks.map(
        (task) =>
          task.id === taskId
            ? { ...task, isCompleted: !task.isCompleted } // Toggle completion
            : task, // Leave other tasks unchanged
      ),
    );
  };

  return (
    <div className="space-y-2">
      {/* Render each subtask as a checkbox with label */}
      {tasks.map((task) => (
        <label
          key={task.id}
          className={`border-primary-red bg-background flex cursor-pointer items-start gap-3 rounded p-3 transition-colors`}
        >
          {/* Controlled checkbox input */}
          <input
            type="checkbox"
            checked={task.isCompleted} // Controlled by state
            className="text-main-purple accent-main-purple focus:ring-main-purple mt-0.5 h-4 w-4 rounded border-gray-300"
            onChange={() => toggleTask(task.id)} // Handle state changes
          />

          {/* Subtask title with conditional styling */}
          <span
            className={`text-12px text-sm leading-relaxed font-bold ${
              task.isCompleted
                ? "text-foreground/50 line-through" // Completed: faded + strikethrough
                : "text-foreground" // Incomplete: normal styling
            } `}
          >
            {task.title}
          </span>
        </label>
      ))}
    </div>
  );
};

export default SubTaskList;
