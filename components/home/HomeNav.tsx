"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import MobileNav from "../shared/navbar/MobileNav";
import { LanguageSwitcher } from "../shared/LanguageSwitcher";
import { ThemeToggle } from "../shared/ThemeToggle";
import { NavPill } from "../shared/navbar/NavPill";

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
            ? "bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent",
        )}
        aria-label="Main navigation"
      >
        <div className="app-container flex items-center justify-between h-16 sm:h-[72px]">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/icons/renuirlogo.png"
              alt="Renuir Logo"
              width={90}
              height={28}
              className="h-auto w-[5.5rem]"
              priority
            />
          </Link>

          <div className="hidden lg:flex">
            <NavPill variant="light" />
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle variant="light" />
            <LanguageSwitcher variant="light" />
            <Link href="/#waitlist">
              <Button
                size="sm"
                variant="secondary"
                className="rounded-full bg-white text-slate-900 hover:bg-white/90"
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
