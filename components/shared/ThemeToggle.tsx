"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  variant?: "light" | "dark";
}

export function ThemeToggle({ variant = "dark" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className={clsx(
          "h-9 w-9 rounded-full p-0",
          variant === "light"
            ? "text-white/70 hover:text-white hover:bg-white/10"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
        )}
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const isLight = variant === "light";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={clsx(
        "h-9 w-9 rounded-full p-0 transition-colors",
        isLight
          ? "text-white/70 hover:text-white hover:bg-white/10"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
      )}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
