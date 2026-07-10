"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-primary">
        Error
      </span>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        Something went wrong.
      </h1>
      <p className="mt-3 max-w-md text-[16px] text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>
      <Button size="lg" className="mt-8 rounded-full" onClick={() => reset()}>
        Try again
      </Button>
    </main>
  );
}
