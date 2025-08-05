import Column from "@/_components/Column";
import { getBoardData } from "@/_lib/api";
import { boardDataObj, ColumnObjType } from "@/_lib/types";
import Button from "@/ui/Button";

export default async function Home() {
  const boardData: boardDataObj[] = await getBoardData();
  const platformLaunchData = boardData.at(0);
  const platformTodoColumns = platformLaunchData?.columns[0];
  const platformDoingColumns = platformLaunchData?.columns[1];
  const platformDoneColumns = platformLaunchData?.columns[2];

  const columnObj: ColumnObjType[] = [
    {
      colType: "Todo",
      color: "#49C4E5",
      colData: platformTodoColumns?.tasks,
    },
    {
      colType: "Doing",
      color: "#8471F2",
      colData: platformDoingColumns?.tasks,
    },
    {
      colType: "Done",
      color: "#67E2AE",
      colData: platformDoneColumns?.tasks,
    },
  ];

  // const columnObj: ColumnObjType = [];

  // console.log(columnObj.at(0)?.colData);

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

  return (
    <article className="flex gap-6 p-6">
      <Column
        columnObj={columnObj.at(0)}
        numOfItems={columnObj.at(0)?.colData?.length}
        columnType={columnObj.at(0)?.colType}
        circleColor={columnObj.at(0)?.color}
      />
      <Column
        columnObj={columnObj.at(1)}
        numOfItems={columnObj.at(1)?.colData?.length}
        columnType={columnObj.at(1)?.colType}
        circleColor={columnObj.at(1)?.color}
      />
      <Column
        columnObj={columnObj.at(2)}
        numOfItems={columnObj.at(2)?.colData?.length}
        columnType={columnObj.at(2)?.colType}
        circleColor={columnObj.at(2)?.color}
      />

      <div className="text-medium-grey hover:text-main-purple bg-gradient-overlay flex w-[300px] cursor-pointer items-center justify-center rounded-lg font-bold transition-all duration-300">
        + New Column
      </div>
    </article>
  );
}
