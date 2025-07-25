"use client";

import Button from "@/ui/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import AddTaskModal from "./AddTaskModal";
import { useState } from "react";

export default function Header() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const pathName = usePathname();
  let headerText;

  const toggleAddTask = () => {
    setIsAddTaskOpen(prev => !prev);
  }

  switch (pathName) {
    case "/":
      headerText = "Platform Launch";
      break;
    case "/marketing":
      headerText = "Marketing Plan";
      break;
    case "/roadmap":
      headerText = "Roadmap";
      break;
    default:
      headerText = "";
  }
  return (
    <nav className="bg-nav-background border-lines flex items-center border-t border-b px-6">
      <div className="border-primary-red w-[277.5px]">
        <Logo />
      </div>

      <div className="border-lines flex flex-1 items-center justify-between border-l py-4 pl-6">
        <h2 className="text-2xl font-bold">{headerText}</h2>{" "}
        <div onClick={toggleAddTask} className="flex items-center gap-6 relative">
          <Button>+ Add New Task</Button>
          <Image
            className="cursor-pointer"
            src="/icon-vertical-ellipsis.svg"
            width={5}
            height={5}
            alt="more-options-icon"
          />

          <AddTaskModal isAddTaskOpen={isAddTaskOpen} />
        </div>
      </div>
    </nav>
  );
}
