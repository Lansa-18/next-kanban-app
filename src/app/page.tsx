/**
 * Home Page - Main Kanban Board View
 * Displays the platform launch board with Todo, Doing, and Done columns
 * Server component that fetches data at build/request time
 */

"use client";

import Column from "@/_components/Column";
import {  ColumnObjType } from "@/_lib/types";
import { useGetBoardData } from "@/hooks/useGetBoardData";
import Button from "@/ui/Button";

export default function Home() {
  const { data: boardData, isLoading, isError } = useGetBoardData();

  if (isLoading) {
    return (
      <article className="flex flex-1 items-center justify-center p-6">
        <div className="text-medium-grey text-center text-[18px] leading-normal font-bold">
          Loading...
        </div>
      </article>
    );
  }

  if (isError || !boardData) {
    return (
      <article className="flex flex-1 items-center justify-center p-6">
        <div className="text-primary-red text-center text-[18px] leading-normal font-bold">
          Error loading board data
        </div>
      </article>
    );
  }

  const platformLaunchData = boardData.at(0);

  // Extract individual columns by their expected positions
  // Index 0 = Todo, Index 1 = Doing, Index 2 = Done
  const platformTodoColumns = platformLaunchData?.columns[0];
  const platformDoingColumns = platformLaunchData?.columns[1];
  const platformDoneColumns = platformLaunchData?.columns[2];

  // Transform database structure into UI-friendly format
  // Each column gets a display name, color, and task data
  const columnObj: ColumnObjType[] = [
    {
      colType: "Todo",
      color: "#49C4E5", // Light blue for todo items
      colData: platformTodoColumns?.tasks,
    },
    {
      colType: "Doing",
      color: "#8471F2", // Purple for in-progress items
      colData: platformDoingColumns?.tasks,
    },
    {
      colType: "Done",
      color: "#67E2AE", // Green for completed items
      colData: platformDoneColumns?.tasks,
    },
  ];

  // Empty state: Show message when no columns exist
  // This condition may never be true given our data structure, but provides fallback
  if (columnObj.length === 0) {
    return (
      <article className="flex flex-1 items-center justify-center p-6">
        <div className="flex w-full max-w-lg flex-col gap-8 px-4">
          <p className="text-medium-grey text-center text-[18px] leading-normal font-bold">
            This board is empty. Create a new column to get started.
          </p>
          <Button className="w-[50%] self-center">+ Add New Column</Button>
        </div>
      </article>
    );
  }

  // Main board layout with three columns and "Add New Column" option
  return (
    <article className="flex gap-6 p-6">
      {/* Todo Column */}
      <Column
        columnObj={columnObj.at(0)}
        numOfItems={columnObj.at(0)?.colData?.length}
        columnType={columnObj.at(0)?.colType}
        circleColor={columnObj.at(0)?.color}
      />

      {/* Doing Column */}
      <Column
        columnObj={columnObj.at(1)}
        numOfItems={columnObj.at(1)?.colData?.length}
        columnType={columnObj.at(1)?.colType}
        circleColor={columnObj.at(1)?.color}
      />

      {/* Done Column */}
      <Column
        columnObj={columnObj.at(2)}
        numOfItems={columnObj.at(2)?.colData?.length}
        columnType={columnObj.at(2)?.colType}
        circleColor={columnObj.at(2)?.color}
      />

      {/* Add New Column Button */}
      <div className="text-medium-grey hover:text-main-purple bg-gradient-overlay flex w-[300px] cursor-pointer items-center justify-center rounded-lg font-bold transition-all duration-300">
        + New Column
      </div>
    </article>
  );
}
