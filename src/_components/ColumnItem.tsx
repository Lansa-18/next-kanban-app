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
  numSubtasksCompleted: number;
}

export default function ColumnItem({
  mainText,
  numOfSubtasks,
  task,
  numSubtasksCompleted,
}: ColumnItemsProps) {
  const { toggleTaskVisibility } = usePlatformLaunchStore();

  const { setSelectedTaskToView } = useGlobalStore();

  // console.log(numSubtasksCompleted);

  const setTask = () => {
    setSelectedTaskToView(task);
    toggleTaskVisibility();
  };

  return (
    <section
      onClick={setTask}
      className="w-full cursor-pointer transition-all duration-300 hover:scale-[1.02]"
    >
      <article className="w-full">
        {/* Task Card */}
        <div className="bg-nav-background shadow-custom flex w-full flex-col gap-2 rounded-[8px] px-4 py-6">
          {/* Task Title */}
          <h2 className="text-15px text-foreground leading-[19px] font-bold break-words">
            {mainText}
          </h2>

          {/* Subtask Progress */}
          <p className="text-medium-grey text-12px font-bold">
            {numSubtasksCompleted} of {numOfSubtasks} subtasks
          </p>
        </div>
      </article>
    </section>
  );
}
