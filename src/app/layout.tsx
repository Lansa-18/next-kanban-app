import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/_components/ThemeProvider";
import Header from "@/_components/Header";
import SideNavigation from "@/_components/SideNavigation";
import OpenSideNav from "@/_components/OpenSideNav";
import ModalProvider from "@/_components/ModalProvider";

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
      <ThemeProvider>
        <body
          className={`${plusJakartaSans.variable} bg-background text-foreground border-primary-red relative flex min-h-screen antialiased`}
        >
          <section className="flex flex-1 flex-col">
            <Header />
            <div className="border-primary-red flex flex-1">
              <SideNavigation />
              {children}
            </div>
          </section>

          <OpenSideNav />
          <ModalProvider />
        </body>
      </ThemeProvider>
    </html>
  );
}
