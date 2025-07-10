"use client";

import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";

export default function SideNavigation() {
  const navLinks = [
    { href: "/platform", label: "Platform Launch" },
    { href: "/marketing", label: "Marketing Plan" },
    { href: "/roadmap", label: "Roadmap" },
  ];

  return (
    <aside className="bg-dark-grey flex w-[300px] flex-col pr-6">
      <div className="pt-[33px] pl-[34px]">
        <Logo />
      </div>

      <article className="mt-[40px] flex flex-col">
        <p className="text-medium-grey mb-[19px] pl-[34px] text-[12px] leading-normal font-bold tracking-[2.4px]">
          ALL BOARDS (8)
        </p>

        <div className="flex flex-col gap-3.5">
          {navLinks.map((navLink, index) => (
            <Link
              href={navLink.href}
              key={index}
              className="bg-main-purple border-dark-grey hover:bg-main-purple/80 flex items-center gap-4 rounded-r-[100px] border-b py-3.5 pr-6 pl-[34px] transition-colors last:border-b-0"
            >
              <Image
                src="/icon-board.svg"
                alt="icon-board"
                width={16}
                height={16}
              />
              <span className="text-[15px] leading-normal font-bold text-white">
                {navLink.label}
              </span>
            </Link>
          ))}
          <button className="mt-2 flex items-center gap-3.5 pl-[34px]">
            <Image
              src="/icon-board.svg"
              alt="icon-board"
              width={16}
              height={16}
            />
            <span className="text-main-purple text-15px leading-normal font-bold">
              + Create New Board
            </span>
          </button>
        </div>
      </article>

      <article className="bg-very-dark-grey mx-6 mt-auto mb-8 flex items-center justify-center gap-6 rounded-md px-6 py-4">
        <Image
          src="/icon-light-theme.svg"
          alt="light-icon-theme"
          width={16}
          height={16}
        />
        <ToggleSwitch
          initialState={false}
          onToggle={(isOn) => {
            console.log("Theme switched to:", isOn ? "dark" : "light");
            // Here you can implement your theme switching logic
          }}
        />
        <Image
          src="/icon-dark-theme.svg"
          alt="dark-icon-theme"
          width={16}
          height={16}
        />
      </article>
    </aside>
  );
}
