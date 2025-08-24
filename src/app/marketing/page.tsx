import { getBoardData } from "@/_lib/api";
import Button from "@/ui/Button";

export default async function Page() {
  const boardData = await getBoardData();
  console.log("This is the json data:", boardData);

  return (
    <article className="flex flex-1 items-center justify-center border p-6">
      <div className="flex w-full max-w-lg flex-col gap-8 px-4">
        <p className="text-medium-grey text-18px text-center leading-normal font-bold">
          This board is empty. Create a new column to get started.
        </p>
        <Button className="w-[50%] self-center">+ Add New Column</Button>
      </div>
    </article>
  );
}
