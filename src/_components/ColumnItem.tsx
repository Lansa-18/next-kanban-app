"use client";

import { tasksObj } from "@/_lib/types";
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
  const { toggleTaskVisibility, setSelectedTaskToView } = usePlatformLaunchStore();


  const setTask = () => {
    console.log(task);
    setSelectedTaskToView(task);
    toggleTaskVisibility();
  };

  return (
    <section
      onClick={setTask}
      className="max-w-[300px] cursor-pointer border-red-500 transition-all duration-300 hover:scale-105"
    >
      <article className="flex flex-col gap-5">
        <div className="bg-nav-background shadow-custom gap-2 rounded-[8px] px-4 py-6">
          <h2 className="text-15px text-foreground leading-normal font-bold">
            {mainText}
          </h2>
          <p className="text-medium-grey text-12px font-bold">
            0 of {numOfSubtasks} substacks
          </p>
        </div>
      </article>
    </section>
  );
}
