"use client";

import { Menu, ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";

import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getMenuItems } from "@/components/data/menuItems";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";

const MobileNav = () => {
  const t = useTranslations('nav');
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();
  const menuItems = getMenuItems(t);

  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  const toggleExpand = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName],
    );
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            aria-label="Open navigation menu"
            aria-expanded={isSheetOpen}
            className={clsx(
              "rounded-xl",
              isSheetOpen && "invisible"
            )}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[350px] p-0 border-l border-border/50"
        >
          <div className="flex flex-col h-full bg-background">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
              <Link href="/" onClick={() => setSheetOpen(false)}>
                <Image
                  src="/images/icons/renuirdark.svg"
                  alt="Renuir Logo"
                  width={80}
                  height={28}
                  className="w-[4.5rem] h-auto dark:hidden"
                />
                <Image
                  src="/images/icons/renuirlogo.png"
                  alt="Renuir Logo"
                  width={80}
                  height={28}
                  className="w-[4.5rem] h-auto hidden dark:block"
                />
              </Link>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-6">
              <nav className="flex flex-col gap-1">
                {menuItems.map((item, index) => {
                  if (item.children?.length) {
                    const isExpanded = expandedItems.includes(item.name);
                    const isChildActive = item.children.some(
                      (child) => pathname === child.href,
                    );

                    return (
                      <div key={index} className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => toggleExpand(item.name)}
                          className={clsx(
                            "flex items-center justify-between rounded-lg px-3 py-2.5 text-[0.9375rem] font-medium transition-colors text-left",
                            isChildActive
                              ? "text-foreground bg-muted"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                          )}
                        >
                          {item.name}
                          <ChevronDown
                            className={clsx(
                              "h-4 w-4 transition-transform duration-200",
                              isExpanded && "rotate-180",
                            )}
                          />
                        </button>

                        {isExpanded && (
                          <div className="mt-1 ml-3 flex flex-col gap-0.5 border-l-2 border-border/50 pl-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setSheetOpen(false)}
                                className={clsx(
                                  "rounded-lg px-3 py-2 text-[0.875rem] font-medium transition-colors",
                                  pathname === child.href
                                    ? "text-foreground bg-muted/60"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setSheetOpen(false)}
                      className={clsx(
                        "rounded-lg px-3 py-2.5 text-[0.9375rem] font-medium transition-colors",
                        pathname === item.href
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="p-6 border-t border-border/50 mt-auto space-y-3">
              <div className="flex items-center justify-center gap-2">
                <ThemeToggle variant="dark" />
                <LanguageSwitcher variant="dark" />
              </div>
              <Link href="/#waitlist" onClick={() => setSheetOpen(false)}>
                <Button size="lg" className="w-full rounded-xl">
                  {t('getApp')}
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
