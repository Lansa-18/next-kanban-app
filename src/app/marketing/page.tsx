"use client";

import Column from "@/_components/Column";
import { ColumnObjType } from "@/_lib/types";
import { useGetBoardData } from "@/hooks/useGetBoardData";
import { useGlobalStore } from "@/store/useGlobalStore";
import Button from "@/ui/Button";
import { useEffect } from "react";

export default function Page() {
  const { data: boardData, isLoading, isError } = useGetBoardData();
  const { setSelectedBoard } = useGlobalStore();

  useEffect(() => {
    if (!boardData) return;
    const marketingBoard = boardData.at(1);
    if (marketingBoard) {
      setSelectedBoard(marketingBoard);
    }
  }, [boardData, setSelectedBoard]);

  if (isLoading) {
    return (
      <article className="flex flex-1 items-center justify-center p-6">
        <div className="text-medium-grey text-18px text-center leading-normal font-bold">
          Loading...
        </div>
        {/* <FadeLoader color="white" /> */}
      </article>
    );
  }

  if (isError || !boardData) {
    return (
      <article className="flex flex-1 items-center justify-center p-6">
        <div className="text-primary-red text-18px text-center leading-normal font-bold">
          Error loading board data
        </div>
      </article>
    );
  }

  const marketingPlanData = boardData.at(1);
  console.log(marketingPlanData)
  const marketingTodoColumns = marketingPlanData?.columns[0];
  const marketingDoingColumns = marketingPlanData?.columns[1];
  const marketingDoneColumns = marketingPlanData?.columns[2];

  const columnObj: ColumnObjType[] = [
    {
      colType: "Todo",
      color: "#49C4E5",
      colData: marketingTodoColumns?.tasks,
    },
    {
      colType: "Doing",
      color: "#8471F2",
      colData: marketingDoingColumns?.tasks,
    },
    {
      colType: "Done",
      color: "#67E2AE",
      colData: marketingDoneColumns?.tasks,
    },
  ];

  if (columnObj.length === 0) {
    return (
      <article className="flex flex-1 items-center justify-center p-6">
        <div className="flex w-full max-w-lg flex-col gap-8 px-4">
          <p className="text-medium-grey text-18px text-center leading-normal font-bold">
            This board is empty. Create a new column to get started.
          </p>
          <Button className="w-[50%] self-center">+ Add New Column</Button>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-background flex gap-7 p-6">
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
