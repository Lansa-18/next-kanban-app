import { getBoardData } from "@/_lib/api";
import Button from "@/ui/Button";

export default async function Page() {
  const boardData = await getBoardData();
  console.log("This is the json data:", boardData);

  return (
    <article className="flex flex-1 items-center justify-center">
      <div className="flex w-full max-w-lg flex-col gap-8 px-4">
        <p className="text-medium-grey text-center text-[18px] leading-normal font-bold">
          This board is empty. Create a new column to get started.
        </p>
        <Button className="w-[50%] self-center">+ Add New Column</Button>
      </div>
    </article>
  );
}
