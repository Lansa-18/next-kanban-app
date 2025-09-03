/**
 * Root Layout Component - Next.js App Router layout
 * Defines the base structure for all pages in the application
 * Remains a server component by delegating client-side logic to child components
 */

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/_components/ThemeProvider";
import Header from "@/_components/Header";
import SideNavigation from "@/_components/SideNavigation";
import OpenSideNav from "@/_components/OpenSideNav";
import ModalProvider from "@/_components/ModalProvider";
import ReactQueryProvider from "@/_components/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Google Font configuration
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans", // CSS custom property for font
  subsets: ["latin"], // Only load Latin characters
});

// SEO metadata for the application
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
      <ReactQueryProvider>
        <ThemeProvider>
          <body
            className={`${plusJakartaSans.variable} bg-background text-foreground border-primary-red relative flex h-screen min-h-screen antialiased`}
          >
            {/* Main application layout */}
            <section className="flex min-h-screen min-w-screen flex-col">
              {/* Top header bar */}
              <Header />

              {/* Main content area with sidebar and page content */}
              <div className="flex h-full min-h-0 flex-1">
                <SideNavigation />

                {/* Main content container */}
                <main className="min-h-0 flex-1 overflow-auto">{children}</main>
              </div>
            </section>

            <OpenSideNav />
            <ModalProvider />
            <ReactQueryDevtools />
          </body>
        </ThemeProvider>
      </ReactQueryProvider>
    </html>
  );
}
