/**
 * ColumnItem Component - Individual task card within a kanban column
 * Displays task title and subtask progress
 * Clicking opens the ViewTaskModal with detailed task information
 */

"use client";

import { tasksObj } from "@/_lib/types";
import { useGlobalStore } from "@/store/useGlobalStore";
import { usePlatformLaunchStore } from "@/store/usePlatformLaunchStore";

interface ColumnItemsProps {
  mainText: string;
  numOfSubtasks: number;
  task: tasksObj;
}

export default function ColumnItem({
  mainText,
  numOfSubtasks,
  task,
}: ColumnItemsProps) {
  const { toggleTaskVisibility } = usePlatformLaunchStore();

  const { setSelectedTaskToView } = useGlobalStore();

  const setTask = () => {
    setSelectedTaskToView(task);
    toggleTaskVisibility();
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
