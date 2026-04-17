"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import MobileNav from "./MobileNav";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";
import { NavPill } from "./NavPill";

const Nav = () => {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50 dark:bg-background/90"
            : "bg-transparent",
        )}
        aria-label="Main navigation"
      >
        <div className="app-container flex items-center justify-between h-16 sm:h-[72px]">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/icons/renuirdark.svg"
              alt="Renuir Logo"
              width={90}
              height={28}
              className="h-auto w-[5.5rem] dark:hidden"
              priority
            />
            <Image
              src="/images/icons/renuirlogo.png"
              alt="Renuir Logo"
              width={90}
              height={28}
              className="h-auto w-[5.5rem] hidden dark:block"
              priority
            />
          </Link>

          <div className="hidden lg:flex">
            <NavPill variant="dark" />
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle variant="dark" />
            <LanguageSwitcher variant="dark" />
            <Link href="/#waitlist">
              <Button
                size="sm"
                className="rounded-full bg-primary px-5 text-[0.8125rem] font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {t('getApp')}
              </Button>
            </Link>
          </div>

          <MobileNav />
        </div>
      </nav>
      <div className="h-16 sm:h-[72px]" />
    </>
  );
};

export default Nav;
