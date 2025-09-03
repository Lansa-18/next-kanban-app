"use client";

import Button from "@/ui/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Options from "./Options";
import { useState } from "react";
import { usePlatformLaunchStore } from "@/store/usePlatformLaunchStore";

export default function Header() {
  const { setIsAddTaskOpen } = usePlatformLaunchStore();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const pathName = usePathname();
  let headerText;

  const toggleOptions = () => {
    setIsOptionsOpen((prev) => !prev);
  };

  const handleOpenAddTaskModal = () => {
    console.log("The add task button was clicked.");
    setIsAddTaskOpen(true);
  };

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
      <div className="w-[275px] min-w-[275px]">
        <Logo />
      </div>

      <div className="border-lines w-full flex items-center justify-between border-l py-3.5 pl-6">
        <h2 className="text-2xl font-bold">{headerText}</h2>{" "}
        <div className="relative flex items-center gap-6">
          <Button onClick={handleOpenAddTaskModal}>+ Add New Task</Button>
          <Image
            onClick={toggleOptions}
            className="cursor-pointer"
            src="/icon-vertical-ellipsis.svg"
            width={5}
            height={5}
            alt="more-options-icon"
          />

          <Options isOptionsOpen={isOptionsOpen} />
        </div>
      </div>
    </nav>
  );
}
