"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import MobileNav from "./MobileNav";
import { menuItems } from "@/components/data/menuItems";

// shadcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();

  const linkClass = (active: boolean) =>
    clsx(
      active ? "text-slate-900" : "text-slate-700 hover:text-slate-700",
      "px-4 py-2 text-sm font-semibold transition-colors",
    );

  return (
    <nav className="w-full relative z-999 bg-transparent">
      <div className="app-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/icons/renuirdark.svg"
            alt="Renuir Logo"
            width={90}
            height={90}
            className="h-auto w-20 sm:w-24"
            priority
          />
        </Link>

        <div className="hidden items-center space-x-2 md:flex">
          {menuItems.map((item, index) => {
            // Dropdown case: Solutions
            if (item.children?.length) {
              const isActive =
                pathname === "/solutions" || pathname === "/individual";

              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger
                    className={clsx(
                      linkClass(isActive),
                      "inline-flex items-center gap-1 rounded-none bg-transparent outline-none",
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    className="min-w-[180px] rounded-xl border bg-white p-2 shadow-md"
                  >
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link
                          href={child.href}
                          className={clsx(
                            "w-full rounded-lg px-3 py-2 text-sm font-medium text-slate-700",
                            "hover:bg-slate-50 hover:text-slate-900",
                            pathname === child.href &&
                              "bg-slate-50 text-slate-900",
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

            // Normal link case
            const isActive =
              pathname === item.href ||
              (pathname === "/" && item.href.startsWith("/#"));

            return (
              <Link
                key={index}
                href={item.href}
                className={linkClass(isActive)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex pl-4">
          <Link href="/#waitlist">
            <Button
              size="sm"
              className="rounded-full bg-black px-5 font-medium text-white transition-all"
            >
              Get the app
            </Button>
          </Link>
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
