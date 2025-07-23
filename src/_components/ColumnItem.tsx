interface ColumnItemsProps {
  mainText: string;
  numOfSubtasks: number;
}

export default function ColumnItem({ mainText, numOfSubtasks }: ColumnItemsProps) {
  return (
    <section className="max-w-[300px] border-red-500">
      <article className="flex flex-col gap-5">
        <div className="bg-dark-grey shadow-custom gap-2 rounded-[8px] px-4 py-6">
          <h2 className="text-15px leading-normal font-bold text-white">
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
