"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import { getMenuItems } from "@/components/data/menuItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface NavPillProps {
  variant: "light" | "dark";
}

export function NavPill({ variant }: NavPillProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const menuItems = getMenuItems(t);

  const isLight = variant === "light";

  const pillBg = isLight ? "bg-white/15 backdrop-blur-sm" : "bg-muted";
  const activeClass = isLight
    ? "bg-white text-slate-900 shadow-sm"
    : "bg-background text-foreground shadow-sm";
  const inactiveClass = isLight
    ? "text-white/80 hover:text-white"
    : "text-muted-foreground hover:text-foreground";

  return (
    <div className={clsx("flex items-center gap-0.5 rounded-full p-1", pillBg)}>
      {menuItems.map((item, index) => {
        if (item.children?.length) {
          const isActive =
            pathname === "/solutions" || pathname === "/individual";

          return (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger
                className={clsx(
                  "inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-all outline-none",
                  isActive ? activeClass : inactiveClass,
                )}
              >
                {item.name}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="center"
                className="min-w-[180px] rounded-xl border border-border bg-popover p-1.5 shadow-lg"
              >
                {item.children.map((child) => (
                  <DropdownMenuItem key={child.href} asChild>
                    <Link
                      href={child.href}
                      className={clsx(
                        "w-full rounded-lg px-3 py-2 text-[0.8125rem] font-medium text-muted-foreground",
                        "hover:bg-muted hover:text-foreground",
                        pathname === child.href &&
                          "bg-muted text-foreground",
                      )}
                    >
                      {child.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }

        const isActive =
          pathname === item.href ||
          (pathname === "/" && item.href.startsWith("/#"));

        return (
          <Link
            key={index}
            href={item.href}
            className={clsx(
              "rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-all",
              isActive ? activeClass : inactiveClass,
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
