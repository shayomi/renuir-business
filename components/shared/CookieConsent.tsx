"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Cookie, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CONSENT_KEY = "renuir-cookie-consent";

interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  timestamp: string;
}

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function storeConsent(consent: ConsentState) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

export function CookieConsent() {
  const t = useTranslations("cookies.banner");
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = useCallback(() => {
    setClosing(true);
    setTimeout(() => setVisible(false), 300);
  }, []);

  const handleAcceptAll = useCallback(() => {
    storeConsent({
      necessary: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
    });
    dismiss();
  }, [dismiss]);

  const handleDecline = useCallback(() => {
    storeConsent({
      necessary: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
    });
    dismiss();
  }, [dismiss]);

  const handleSavePreferences = useCallback(() => {
    storeConsent({
      necessary: true,
      analytics,
      functional,
      timestamp: new Date().toISOString(),
    });
    dismiss();
  }, [analytics, functional, dismiss]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 transition-all duration-300",
        closing
          ? "translate-y-full opacity-0"
          : "translate-y-0 opacity-100 animate-in slide-in-from-bottom-5"
      )}
      role="dialog"
      aria-label={t("title")}
    >
      <div className="mx-auto max-w-lg rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/30">
        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/15">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t("title")}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                  {t("description")}{" "}
                  <Link
                    href="/cookies"
                    className="text-primary hover:underline underline-offset-2"
                  >
                    {t("learnMore")}
                  </Link>
                </p>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="shrink-0 rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Expandable details */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 flex w-full items-center justify-between rounded-lg bg-muted/60 dark:bg-muted/40 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("customize")}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                showDetails && "rotate-180"
              )}
            />
          </button>

          {showDetails && (
            <div className="mt-3 space-y-2.5 animate-in fade-in slide-in-from-top-1 duration-200">
              {/* Necessary - always on */}
              <div className="flex items-center justify-between rounded-lg border border-border/40 bg-muted/30 px-3 py-2.5">
                <div>
                  <p className="text-xs font-medium text-foreground">
                    {t("necessary")}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {t("necessaryDesc")}
                  </p>
                </div>
                <div className="shrink-0 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">
                  {t("alwaysOn")}
                </div>
              </div>

              {/* Analytics */}
              <label className="flex items-center justify-between rounded-lg border border-border/40 px-3 py-2.5 cursor-pointer hover:bg-muted/20 transition-colors">
                <div>
                  <p className="text-xs font-medium text-foreground">
                    {t("analytics")}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {t("analyticsDesc")}
                  </p>
                </div>
                <div className="relative shrink-0">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="h-5 w-9 rounded-full bg-muted peer-checked:bg-primary transition-colors" />
                  <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4" />
                </div>
              </label>

              {/* Functional */}
              <label className="flex items-center justify-between rounded-lg border border-border/40 px-3 py-2.5 cursor-pointer hover:bg-muted/20 transition-colors">
                <div>
                  <p className="text-xs font-medium text-foreground">
                    {t("functional")}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {t("functionalDesc")}
                  </p>
                </div>
                <div className="relative shrink-0">
                  <input
                    type="checkbox"
                    checked={functional}
                    onChange={(e) => setFunctional(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="h-5 w-9 rounded-full bg-muted peer-checked:bg-primary transition-colors" />
                  <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4" />
                </div>
              </label>
            </div>
          )}

          {/* Actions */}
          <div className="mt-4 flex gap-2">
            {showDetails ? (
              <>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-xl text-xs h-9"
                >
                  {t("declineAll")}
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  size="sm"
                  className="flex-1 rounded-xl text-xs h-9 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t("savePreferences")}
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-xl text-xs h-9"
                >
                  {t("decline")}
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  size="sm"
                  className="flex-1 rounded-xl text-xs h-9 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t("acceptAll")}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
