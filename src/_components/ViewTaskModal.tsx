import SubTaskList from "./SubTaskList";
import StatusDropdown from "./StatusDropdown";
import { usePlatformLaunchStore } from "@/store/usePlatformLaunchStore";

export default function ViewTaskModal() {
  const { setIsTaskOpen, selectedTaskToView } = usePlatformLaunchStore();

  return (
    <section className="fixed flex min-h-screen w-full items-center justify-center bg-black/50">
      <article className="bg-nav-background flex w-[30rem] flex-col gap-6 rounded-[6px] p-8">
        <div className="text-15px flex justify-between font-medium">
          <p className="text-medium-grey cursor-pointer transition-all duration-300 hover:scale-105">
            Edit Task
          </p>
          <p className="text-primary-red cursor-pointer transition-all duration-300 hover:scale-105">
            Delete Task
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-foreground text-[18px] leading-normal font-bold">
            {selectedTaskToView?.title}
          </p>
          <p className="text-medium-grey text-[13px] leading-[23px] font-medium">
            {selectedTaskToView?.description &&
            selectedTaskToView.description.trim()
              ? selectedTaskToView.description
              : "No description provided"}{" "}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-view-modal text-xs leading-normal font-bold">
            Subtasks (2 of 3)
          </p>
          <SubTaskList subtasks={selectedTaskToView?.subtasks ?? []} />
        </div>

        <StatusDropdown
          currentStatus={selectedTaskToView?.status}
          onStatusChange={(status) => {
            console.log("Status changed to:", status);
            // Handle status change here
          }}
        />

        <button
          onClick={() => setIsTaskOpen(false)}
          className="text-primary-red text-15px self-start font-medium"
        >
          Close
        </button>
      </article>
    </section>
  );
}
