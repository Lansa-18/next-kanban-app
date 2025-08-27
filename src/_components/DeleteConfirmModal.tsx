"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGlobalStore } from "@/store/useGlobalStore";

interface DeleteConfirmModalProps {
  type?: string;
  children?: React.ReactElement;
  onConfirm?: () => void;
}

export default function DeleteConfirmModal({
  children,
  type,
  onConfirm,
}: DeleteConfirmModalProps) {
  const [open, setOpen] = React.useState(false);
  const { selectedBoard, selectedTaskToView } = useGlobalStore();

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-nav-background border-lines max-w-[30rem] rounded-[6px] border p-0">
        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-primary-red text-left text-[18px] leading-normal font-bold">
              {type === "board" ? "Delete this board?" : "Delete this task?"}
            </DialogTitle>
            <DialogDescription className="text-medium-grey text-left text-[13px] leading-[23px] font-medium">
              Are you sure you want to delete the &apos;
              {type === "board"
                ? selectedBoard?.name
                : selectedTaskToView?.title}
              &apos; board? This action will remove all columns and tasks and
              cannot be reversed.{" "}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex flex-row justify-between gap-4">
            <Button
              onClick={handleConfirm}
              className="bg-primary-red hover:bg-secondary-red basis-1/2 rounded-[20px] py-2 text-[13px] font-bold text-white ring-0 transition-all duration-300 focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              Delete
            </Button>
            <Button
              onClick={handleCancel}
              variant="secondary"
              className="bg-cancel-btn text-main-purple basis-1/2 rounded-[20px] py-2 text-[13px] font-bold"
            >
              Cancel
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
