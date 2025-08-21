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

/**
 * RootLayout defines the base HTML structure and layout for all pages
 * Includes theme support, navigation, and modal management
 *
 * @param children - Page content to be rendered in the main area
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Theme wrapper for dark/light mode support */}
      <ThemeProvider>
        <body
          className={`${plusJakartaSans.variable} bg-background text-foreground border-primary-red relative flex min-h-screen antialiased`}
        >
          {/* Main application layout */}
          <section className="flex flex-1 flex-col">
            {/* Top header bar */}
            <Header />

            {/* Main content area with sidebar and page content */}
            <div className="border-primary-red flex flex-1">
              {/* Collapsible sidebar navigation */}
              <SideNavigation />

              {/* Page content (children from Next.js routing) */}
              {children}
            </div>
          </section>

          {/* Floating "Show Sidebar" button (when sidebar is collapsed) */}
          <OpenSideNav />

          {/* Modal management - handles all application modals */}
          {/* Uses client component to avoid "use client" in layout */}
          <ModalProvider />
        </body>
      </ThemeProvider>
    </html>
  );
}
