/** @format */

"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import { getQueryClient } from "./client";

export default function ReactQueryProviders(props: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
