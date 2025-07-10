'use client'

import Image from "next/image";
import logoLight from "../../public/logo-light.svg";
import logoDark from "../../public/logo-dark.svg";
import { useTheme } from "./ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <div className="mb-[54px]">
      <Image
        src={theme === "dark" ? logoDark : logoLight}
        width={152.53}
        height={25.22}
        alt="logo-icon"
      />
    </div>
  );
}
