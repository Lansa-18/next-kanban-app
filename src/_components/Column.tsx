import React from "react";
import ColumnItem from "@/_components/ColumnItem";
import { ColumnObjType } from "@/_lib/types";

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
  return (
    <div className="space-y-[24px]">
      <article className="flex gap-3">
        <div
          className="h-[15px] w-[15px] rounded-full"
          style={{ backgroundColor: circleColor }}
        ></div>
        <p className="text-12px text-medium-grey font-bold tracking-[2.4px] uppercase">
          {columnType} ({numOfItems})
        </p>
      </article>

      {columnObj?.colData?.map((el) => (
        <ColumnItem
          key={el.id}
          numOfSubtasks={el.subtasks.length}
          mainText={el.title}
        />
      ))}
    </div>
  );
}
