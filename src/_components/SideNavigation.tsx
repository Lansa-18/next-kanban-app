"use client";

import Image from "next/image";
import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";
import { usePathname } from "next/navigation";
import { useNavstore } from "@/store/useNavStore";
import { motion, AnimatePresence } from "framer-motion";
import BoardIcon from "./icons/BoardIcon";
import AddBoardModal from "./AddBoardModal";

export default function SideNavigation() {
  const navLinks = [
    { href: "/", label: "Platform Launch" },
    { href: "/marketing", label: "Marketing Plan" },
    { href: "/roadmap", label: "Roadmap" },
  ];

  const pathName = usePathname();
  const { isSideNavOpen, toggleSideNav } = useNavstore();

  return (
    <AnimatePresence mode="wait">
      {!isSideNavOpen && (
        <motion.aside
          initial={{ x: -288, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -288, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.3,
          }}
          className="bg-nav-background border-lines flex h-full w-[300px] min-w-[300px] flex-col border-r pr-6 pb-8"
        >
          <article className="mt-[40px] flex flex-col">
            <p className="text-medium-grey text-12px mb-[19px] pl-[34px] leading-normal font-bold tracking-[2.4px]">
              ALL BOARDS ({navLinks.length})
            </p>

            <div className="flex flex-col gap-3.5">
              {navLinks.map((navLink, index) => (
                <Link
                  href={navLink.href}
                  key={index}
                  className={` ${pathName === navLink.href ? "bg-main-purple" : "bg-none"} group flex items-center gap-4 rounded-r-[100px] py-3.5 pr-6 pl-[34px] transition-all duration-300 hover:bg-white`}
                >
                  <Image
                    className="group-hover:fill-main-purple"
                    src="/icon-board.svg"
                    alt="icon-board"
                    width={16}
                    height={16}
                  />
                  <span
                    className={`${pathName === navLink.href ? "text-white" : "text-medium-grey"} group-hover:text-main-purple text-[15px] leading-normal font-bold transition-all duration-300`}
                  >
                    {navLink.label}
                  </span>
                </Link>
              ))}
              <button className="mt-2 flex items-center gap-3.5 pl-[34px]">
                <BoardIcon fill="#635fc7" />
                <AddBoardModal btnName="Create New Board">
                  <span className="text-main-purple hover:text-main-purple-hover cursor-pointer text-[15px] leading-normal font-bold">
                    + Create New Board
                  </span>
                </AddBoardModal>
              </button>
            </div>
          </article>

          <article className="bg-background mx-6 mt-auto mb-5 flex items-center justify-center gap-6 rounded-md px-6 py-4">
            <Image
              src="/icon-light-theme.svg"
              alt="light-icon-theme"
              width={16}
              height={16}
            />
            <ToggleSwitch />
            <Image
              src="/icon-dark-theme.svg"
              alt="dark-icon-theme"
              width={16}
              height={16}
            />
          </article>

          <article
            onClick={toggleSideNav}
            className="group/sidebar -pl-[34px] mx-6 flex cursor-pointer items-center gap-4 rounded-r-[100px] py-3.5 pr-6 transition-all duration-300 hover:bg-white"
          >
            <Image
              src="/icon-hide-sidebar.svg"
              alt="eye-hide-icon"
              width={18}
              height={16}
            />
            <p className="text-15px text-medium-grey group-hover/sidebar:text-main-purple leading-normal font-bold transition-all duration-300">
              Hide Sidebar
            </p>
          </article>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
