import AddBoardModal from "./AddBoardModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

interface OptionsProps {
  isOptionsOpen: boolean;
}

export default function Options({ isOptionsOpen }: OptionsProps) {
  return (
    <article
      className={`${isOptionsOpen ? "flex" : "hidden"} bg-add-task absolute top-[3.5rem] w-full flex-col gap-4 rounded-[8px] p-4 font-medium shadow-[0_10px_20px_0_rgba(54,78,126,0.25)]`}
    >
      <AddBoardModal type="edit" btnName="Save Changes">
        <p className="text-medium-grey cursor-pointer">Edit Board</p>
      </AddBoardModal>
      <DeleteConfirmModal type="board">
        <p className="text-primary-red cursor-pointer">Delete Board</p>
      </DeleteConfirmModal>
    </article>
  );
}
