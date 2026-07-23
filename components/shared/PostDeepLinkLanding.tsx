"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Copy, ExternalLink, Smartphone } from "lucide-react";

const IOS_STORE_URL = "https://apps.apple.com/app/id6758735828";
const ANDROID_STORE_URL = "https://play.google.com/store/apps/details?id=com.renuir.app";

type PostDeepLinkLandingProps = { postId: string };

const getPreferredStoreUrl = () => {
  if (typeof navigator === "undefined") return IOS_STORE_URL;
  return /android/i.test(navigator.userAgent) ? ANDROID_STORE_URL : IOS_STORE_URL;
};

const isMobileBrowser = () =>
  typeof navigator !== "undefined" && /android|iphone|ipad|ipod/i.test(navigator.userAgent);

export default function PostDeepLinkLanding({ postId }: PostDeepLinkLandingProps) {
  const [status, setStatus] = useState<"checking" | "ready" | "not-opened">("checking");
  const [storeUrl, setStoreUrl] = useState(IOS_STORE_URL);
  const [copied, setCopied] = useState(false);
  const manualLaunchCleanup = useRef<(() => void) | null>(null);
  const appUrl = useMemo(() => `com.renuir.app://post/${encodeURIComponent(postId)}`, [postId]);
  const webUrl = useMemo(() => `https://www.renuir.com/post/${encodeURIComponent(postId)}`, [postId]);

  useEffect(() => {
    const browserTimer = window.setTimeout(() => {
      setStoreUrl(getPreferredStoreUrl());
      if (!isMobileBrowser()) setStatus("ready");
    }, 0);
    if (!isMobileBrowser()) {
      return () => window.clearTimeout(browserTimer);
    }

    let appOpened = false;
    const launchTimer = window.setTimeout(() => {
      if (appOpened) return;
      window.location.href = appUrl;
      fallbackTimer = window.setTimeout(() => {
        if (!appOpened && document.visibilityState === "visible") setStatus("not-opened");
      }, 1400);
    }, 450);
    let fallbackTimer: number | undefined;
    const markAppOpened = () => {
      appOpened = true;
      if (launchTimer !== undefined) window.clearTimeout(launchTimer);
      if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") markAppOpened();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", markAppOpened);
    return () => {
      window.clearTimeout(browserTimer);
      if (launchTimer !== undefined) window.clearTimeout(launchTimer);
      if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
      manualLaunchCleanup.current?.();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", markAppOpened);
    };
  }, [appUrl]);

  useEffect(() => () => manualLaunchCleanup.current?.(), []);

  const handleOpenApp = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    manualLaunchCleanup.current?.();
    let appOpened = false;
    const cleanup = () => {
      if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", markAppOpened);
      if (manualLaunchCleanup.current === cleanup) manualLaunchCleanup.current = null;
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") markAppOpened();
    };
    const markAppOpened = () => {
      appOpened = true;
      cleanup();
    };
    manualLaunchCleanup.current = cleanup;
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", markAppOpened);
    window.location.href = appUrl;
    const fallbackTimer = window.setTimeout(() => {
      if (!appOpened && document.visibilityState === "visible") setStatus("not-opened");
      cleanup();
    }, 1200);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(webUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#15171f]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-8 sm:py-8">
        <header className="flex items-center justify-between">
          <Link href="/" aria-label="Renuir home" className="inline-flex items-center gap-2">
            <Image src="/images/icons/renuirlogo.png" alt="Renuir" width={108} height={36} priority className="h-auto w-[92px] sm:w-[108px]" />
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#596174]">Shared post</span>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce2ef] bg-white px-3.5 py-2 text-sm font-semibold text-[#596174] shadow-sm">
              <Smartphone className="size-4 text-[#2541e8]" aria-hidden="true" />
              Renuir lost &amp; found
            </div>
            <h1 className="max-w-xl text-[2.55rem] font-black leading-[1.02] tracking-[-0.045em] text-[#111521] sm:text-6xl">This post is waiting in the Renuir app.</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#626a7c] sm:text-lg">Open the shared post to view the item, contact the poster, and help return it to its owner.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={appUrl} onClick={handleOpenApp} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#2541e8] px-5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(37,65,232,0.25)] transition hover:bg-[#1d35c6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2541e8]">Open in Renuir <ArrowUpRight className="size-4" aria-hidden="true" /></a>
              <a href={storeUrl} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#d5dbe8] bg-white px-5 text-sm font-bold text-[#202638] transition hover:border-[#2541e8] hover:text-[#2541e8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2541e8]">Get the app <ExternalLink className="size-4" aria-hidden="true" /></a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-[#2541e8]">
              <a href={IOS_STORE_URL} className="hover:underline">App Store</a>
              <a href={ANDROID_STORE_URL} className="hover:underline">Google Play</a>
              <button type="button" onClick={handleCopy} className="inline-flex items-center gap-1.5 text-[#596174] hover:text-[#2541e8]" aria-label="Copy share link">
                {copied ? <Check className="size-4 text-emerald-600" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                {copied ? "Copied" : "Copy link"}
              </button>
            </div>
            <p className="mt-6 min-h-5 text-sm text-[#596174]" aria-live="polite">
              {status === "checking" ? "Trying to open Renuir..." : status === "not-opened" ? "Renuir did not open. Get the app, then tap this link again." : "You can also open this link on a desktop browser."}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#17214a] p-6 text-white shadow-[0_24px_70px_rgba(23,33,74,0.18)] sm:p-8">
            <div className="absolute -right-16 -top-16 size-48 rounded-full border-[26px] border-[#6477ef]/25" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b7c0ff]">Shared post</p><p className="mt-3 text-3xl font-black tracking-[-0.03em]">#{postId}</p></div><div className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-[#c9d0ff]"><Smartphone className="size-5" aria-hidden="true" /></div></div>
              <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.08] p-5"><p className="text-sm font-semibold text-white/90">Continue in the app</p><p className="mt-2 text-sm leading-6 text-[#c8cff0]">Your post ID is carried across automatically, so you can continue without searching.</p></div>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#b7c0ff]"><span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />Secure link</div>
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-2 border-t border-[#e2e6ef] pt-5 text-xs text-[#596174] sm:flex-row sm:items-center sm:justify-between"><span>Renuir · Reuniting people with what matters.</span><Link href="/" className="font-semibold text-[#596174] hover:text-[#2541e8]">Visit Renuir.com</Link></footer>
      </div>
    </main>
  );
}
