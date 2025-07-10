"use client";

import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";
import { usePathname } from "next/navigation";

export default function SideNavigation() {
  const navLinks = [
    { href: "/", label: "Platform Launch" },
    { href: "/marketing", label: "Marketing Plan" },
    { href: "/roadmap", label: "Roadmap" },
  ];

  const pathName = usePathname();

  return (
    <aside className="bg-nav-background flex w-[300px] flex-col pr-6">
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
              className={` ${pathName === navLink.href ? "bg-main-purple" : "bg-none"} hover:bg-main-purple/80 flex items-center gap-4 rounded-r-[100px] py-3.5 pr-6 pl-[34px] transition-colors`}
            >
              <Image
                src="/icon-board.svg"
                alt="icon-board"
                width={16}
                height={16}
              />
              <span className={`${pathName === navLink.href ? 'text-white' : 'text-medium-grey'} text-[15px] leading-normal font-bold`}>
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
        <ToggleSwitch />
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
