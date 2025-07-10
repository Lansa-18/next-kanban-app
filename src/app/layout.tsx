import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SideNavigation from "@/_components/SideNavigation";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanban Task Management App",
  description: "Allows you to efficiently manage your tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} bg-very-dark-grey flex min-h-screen border antialiased`}
      >
        <SideNavigation />
        {children}
      </body>
    </html>
  );
}
