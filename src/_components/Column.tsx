/**
 * Column Component - Represents a single kanban column (Todo, Doing, Done)
 * Displays column header with colored indicator and task count
 * Renders all tasks within this column as ColumnItem components
 */

import React from "react";
import ColumnItem from "@/_components/ColumnItem";
import { ColumnObjType } from "@/_lib/types";

/**
 * Props interface for Column component
 */
interface columnProps {
  circleColor: string | undefined;
  columnType: string | undefined;
  numOfItems: number | undefined;
  columnObj: ColumnObjType | undefined;
}

export default function Column({
  circleColor,
  columnType,
  numOfItems,
  columnObj,
}: columnProps) {
  console.log(columnObj);
  return (
    <div className="flex w-[280px] min-w-[280px] flex-col space-y-6">
      {/* Column Header - Shows colored circle and task count */}
      <article className="flex items-center gap-3">
        {/* Colored indicator circle - unique color per column */}
        <div
          className="h-[15px] w-[15px] flex-shrink-0 rounded-full"
          style={{ backgroundColor: circleColor }}
        ></div>

        {/* Column title with task count */}
        <p className="text-12px text-medium-grey font-bold tracking-[2.4px] whitespace-nowrap uppercase">
          {columnType} ({numOfItems})
        </p>
      </article>

      {/* Tasks container */}
      <div className="flex flex-col space-y-5">
        {/* Render all tasks in this column */}
        {columnObj?.colData?.map((el) => (
          <ColumnItem
            task={el} // Full task object for modal display
            key={el.id} // Unique key for React rendering
            numOfSubtasks={el.subtasks.length} // Count of subtasks for display
            mainText={el.title} // Task title for card display
            numSubtasksCompleted={
              el.subtasks.filter((subtask) => subtask.is_completed).length
            }
          />
        ))}
      </div>
    </div>
  );
}
