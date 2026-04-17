"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import { getMenuItems } from "@/components/data/menuItems";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavPillProps {
  variant: "light" | "dark";
}

export function NavPill({ variant }: NavPillProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const menuItems = getMenuItems(t);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isLight = variant === "light";

  const pillBg = isLight ? "bg-white/15 backdrop-blur-sm" : "bg-muted";

  const close = useCallback(() => setOpenIndex(null), []);

  // Close on click outside
  useEffect(() => {
    if (openIndex === null) return;

    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        close();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openIndex, close]);

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Determine which item is active
  const getIsActive = (item: { href: string; children?: { href: string }[] }, index: number) => {
    if (item.children?.length) {
      return pathname === "/solutions" || pathname === "/individual";
    }
    return pathname === item.href || (pathname === "/" && item.href.startsWith("/#"));
  };

  const activeIndex = menuItems.findIndex((item, i) => getIsActive(item, i));

  return (
    <div className={clsx("relative flex items-center gap-0.5 rounded-full p-1", pillBg)}>
      {menuItems.map((item, index) => {
        const isActive = getIsActive(item, index);

        if (item.children?.length) {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="relative" ref={isOpen ? dropdownRef : undefined}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={clsx(
                  "relative z-10 inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.8125rem] font-medium outline-none transition-colors duration-200",
                  isActive
                    ? isLight
                      ? "text-slate-900"
                      : "text-foreground"
                    : isLight
                      ? "text-white/80 hover:text-white"
                      : "text-muted-foreground hover:text-foreground",
                )}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                {isActive && (
                  <motion.span
                    layoutId={`nav-pill-${variant}`}
                    className={clsx(
                      "absolute inset-0 rounded-full",
                      isLight ? "bg-white shadow-sm" : "bg-background shadow-sm",
                    )}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
                <ChevronDown
                  className={clsx(
                    "relative z-10 h-3.5 w-3.5 opacity-60 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 min-w-[180px] rounded-xl border border-border bg-popover p-1.5 shadow-lg z-50"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={close}
                        className={clsx(
                          "block w-full rounded-lg px-3 py-2 text-[0.8125rem] font-medium transition-colors",
                          "text-muted-foreground hover:bg-muted hover:text-foreground",
                          pathname === child.href && "bg-muted text-foreground",
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <Link
            key={index}
            href={item.href}
            className={clsx(
              "relative z-10 rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-colors duration-200",
              isActive
                ? isLight
                  ? "text-slate-900"
                  : "text-foreground"
                : isLight
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive && (
              <motion.span
                layoutId={`nav-pill-${variant}`}
                className={clsx(
                  "absolute inset-0 rounded-full",
                  isLight ? "bg-white shadow-sm" : "bg-background shadow-sm",
                )}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
