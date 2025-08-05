"use client";

import { subTasksObj } from "@/_lib/types";
import { useState } from "react";

interface SubTaskListProp {
  subtasks: subTasksObj[];
}

const SubTaskList = ({ subtasks }: SubTaskListProp) => {
  const [tasks, setTasks] = useState(subtasks);

  const toggleTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <label
          key={task.id}
          className={`border-primary-red bg-background flex cursor-pointer items-start gap-3 rounded p-3 transition-colors`}
        >
          <input
            type="checkbox"
            checked={task.isCompleted}
            className="text-main-purple accent-main-purple focus:ring-main-purple mt-0.5 h-4 w-4 rounded border-gray-300"
            onChange={() => toggleTask(task.id)}
          />
          <span
            className={`text-12px text-sm leading-relaxed font-bold ${
              task.isCompleted
                ? "text-foreground/50 line-through"
                : "text-foreground"
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
