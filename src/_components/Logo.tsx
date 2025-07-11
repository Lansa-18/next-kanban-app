'use client'

import Image from "next/image";
import logoLight from "../../public/logo-light.svg";
import logoDark from "../../public/logo-dark.svg";
import { useTheme } from "./ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <div className="">
      <Image
        src={theme === "dark" ? logoLight : logoDark}
        width={152.53}
        height={25.22}
        alt="logo-icon"
      />
    </div>
  );
}
