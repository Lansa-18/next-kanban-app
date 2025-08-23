/**
 * React Query Provider - Client component wrapper for TanStack Query
 * Separates React Query setup from server components
 */

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

/**
 * ReactQueryProvider wraps the app with TanStack Query context
 * Uses useState to ensure QueryClient is created only once per component instance
 */
export default function ReactQueryProvider({
  children,
}: ReactQueryProviderProps) {
  // Create QueryClient only once per component instance
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Prevent refetch on window focus in development
            refetchOnWindowFocus: false,
            // Retry failed requests 1 time
            retry: 1,
            // Cache time: 5 minutes
            staleTime: 1000 * 60 * 5,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
