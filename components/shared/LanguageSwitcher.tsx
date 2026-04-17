"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { clsx } from "clsx";
import { useTransition } from "react";

const localeLabels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  ar: "العربية",
  es: "Español",
  fr: "Français",
  pl: "Polski",
  pt: "Português",
  tr: "Türkçe",
};

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
}

export function LanguageSwitcher({ variant = "dark" }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  const isLight = variant === "light";

  return (
    <DropdownMenu aria-label="Language selector">
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={clsx(
            "gap-1.5 rounded-full px-3 text-[0.8125rem] font-medium transition-colors",
            isPending && "opacity-60",
            isLight
              ? "text-white/70 hover:text-white hover:bg-white/10"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          )}
        >
          <Globe className="h-4 w-4" />
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[160px] rounded-xl border border-border bg-popover p-1.5 shadow-lg"
      >
        {locales.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => switchLocale(l)}
            className={clsx(
              "rounded-lg px-3 py-2 text-[0.8125rem] font-medium cursor-pointer",
              l === locale
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {localeLabels[l]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
