"use client";

import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, ReactElement } from "react";
import client from "../lib/graphql/client";

const queryClient = new QueryClient();

export function Provider({ children }: PropsWithChildren): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </QueryClientProvider>
  );
}