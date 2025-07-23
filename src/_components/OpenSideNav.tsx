"use client";

import { useNavstore } from "@/store/useNavStore";
import Image from "next/image";

export default function OpenSideNav() {
  const { isSideNavOpen, toggleSideNav } = useNavstore();
  return (
    <>
      {isSideNavOpen && (
        <button
          onClick={toggleSideNav}
          className="bg-main-purple hover:bg-main-purple-hover focus:ring-main-purple fixed bottom-8 left-0 z-50 rounded-r-full p-4 transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none"
          aria-label="Show sidebar"
        >
          <Image
            src="/icon-show-sidebar.svg"
            alt="Show sidebar"
            width={16}
            height={16}
            className="text-white"
          />
        </button>
      )}
    </>
  );
}
