import { usePlatformLaunchStore } from "@/store/usePlatformLaunchStore";
import React, { useEffect, useRef } from "react";

export default function DeleteConfirmModal() {
  const { setIsTaskOpen, isDeleteConfirmOpen, setIsDeleteConfirmOpen } =
    usePlatformLaunchStore();
  const delModalRef = useRef<HTMLElement>(null);

  const onClose = () => {
    setIsDeleteConfirmOpen(false);
    setIsTaskOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (delModalRef && !delModalRef.current?.contains(e.target as Node)) {
        setIsDeleteConfirmOpen(false);
        setIsTaskOpen(true);
      }
    };

    if (isDeleteConfirmOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsDeleteConfirmOpen, setIsTaskOpen, isDeleteConfirmOpen]);

  return (
    <section className="fixed flex min-h-screen w-full items-center justify-center bg-black/50">
      <article
        ref={delModalRef}
        className="bg-nav-background rounded-6px flex w-[30rem] flex-col gap-6 p-8"
      >
        <p className="text-18px text-primary-red leading-normal font-bold">
          Delete this board?
        </p>

        <p className="text-medium-grey text-13px leading-[23px] font-medium">
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>

        <div className="flex justify-between gap-4">
          <button className="text-13px bg-primary-red hover:bg-secondary-red basis-1/2 rounded-[20px] py-2 font-bold text-white transition-all duration-300">
            Delete
          </button>
          <button
            onClick={onClose}
            className="text-13px bg-cancel-btn text-main-purple basis-1/2 rounded-[20px] font-bold"
          >
            Cancel
          </button>
        </div>
      </article>
    </section>
  );
}
