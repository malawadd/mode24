"use client"

import {Landing} from "@/components/landing";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient()

export default function Home() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Landing/>
      </QueryClientProvider>
    </>
  )
}
