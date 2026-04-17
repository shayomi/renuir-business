"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Typography } from "@/components/ui/typography";
import {
  Copy,
  Plus,
  Lock,
  Terminal,
  Database,
  MessageCircle,
  Code2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import AnimateIn from "@/components/ui/AnimateIn";

/* ─── Code preview ─── */

function CodeWindow() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/10" />
          <span className="h-3 w-3 rounded-full bg-white/10" />
        </div>
        <span className="text-xs text-white/40 font-mono">
          POST api.renuir.com/v1/items
        </span>
        <div className="w-14" />
      </div>

      <pre className="overflow-x-auto px-6 py-5 text-[13px] leading-6 text-white/80">
        <code className="font-mono">
          <span className="text-primary-500">const</span> client{" "}
          <span className="text-white/50">=</span>{" "}
          <span className="text-primary-500">new</span> RenuirClient({"{"}
          {"\n"}
          {"  "}apiKey: process.env.RENUIR_KEY
          {"\n"}
          {"}"});
          {"\n\n"}
          <span className="text-white/40">{"// Report a found item"}</span>
          {"\n"}
          <span className="text-primary-500">const</span> item{" "}
          <span className="text-white/50">=</span>{" "}
          <span className="text-primary-500">await</span>
          {"\n"}
          client.items.create({"{"}
          {"\n"}
          {"  "}organization:{" "}
          <span className="text-emerald-400">&quot;org_8x92...&quot;</span>,
          {"\n"}
          {"  "}type:{" "}
          <span className="text-emerald-400">&quot;ELECTRONICS&quot;</span>,
          {"\n"}
          {"  "}brand:{" "}
          <span className="text-emerald-400">&quot;Apple&quot;</span>,{"\n"}
          {"  "}model:{" "}
          <span className="text-emerald-400">&quot;AirPods Pro&quot;</span>,
          {"\n"}
          {"  "}location: {"{"}
          {"\n"}
          {"    "}lat: 52.5200,
          {"\n"}
          {"    "}lng: 13.4050,
          {"\n"}
          {"    "}context:{" "}
          <span className="text-emerald-400">&quot;Terminal 2, Gate 14&quot;</span>
          {"\n"}
          {"  }{"}
          {"\n"}
          {"}"});
          {"\n\n"}
          console.log(item.status);{" "}
          <span className="text-white/40">
            {"// \"PROCESSING_MATCH\""}
          </span>
        </code>
      </pre>
    </div>
  );
}

/* ─── Feature cards ─── */

function FeatureCard({
  icon,
  title,
  desc,
  active,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-xl p-4 sm:p-5 border",
        active
          ? "border-primary/20 bg-primary/5"
          : "border-white/8 bg-white/[0.02]",
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
          active
            ? "bg-primary/15 text-primary-500"
            : "bg-white/8 text-white/50",
        )}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <Typography variant="h6" className="text-white/90">
          {title}
        </Typography>
        <Typography variant="mutedText" className="mt-1 text-white/60">
          {desc}
        </Typography>
      </div>
    </div>
  );
}

/* ─── Docs section ─── */

function DocsSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="relative bg-slate-950 pt-12 sm:pt-20 lg:pt-24 pb-14 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/5 rounded-full blur-[140px]" />
      </div>

      <div className="app-container relative">
        <div className="grid items-start gap-10 lg:gap-14 lg:grid-cols-2">
          <div>
            <AnimateIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                <Terminal className="h-3.5 w-3.5 text-white/50" />
                <span className="text-xs font-medium text-white/60">
                  {t('badge')}
                </span>
              </div>

              <Typography
                variant="h1"
                className="mt-5 text-balance font-semibold leading-[1.08] text-white"
              >
                {t('headline')}
              </Typography>

              <Typography
                variant="div"
                className="mt-4 max-w-md text-[15px] leading-7 text-white/65"
              >
                {t('subtitle')}
              </Typography>
            </AnimateIn>

            <AnimateIn delay={0.08}>
              <div className="mt-6 sm:mt-8 space-y-3">
                <FeatureCard
                  active
                  icon={<Database className="h-5 w-5" />}
                  title={t('apiTitle')}
                  desc={t('apiDesc')}
                />
                <FeatureCard
                  icon={<MessageCircle className="h-5 w-5" />}
                  title={t('whitelabelTitle')}
                  desc={t('whitelabelDesc')}
                />
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.12} className="lg:pt-6">
            <CodeWindow />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/* ─── API Key row ─── */

function KeyRow({ title, value, statusLabel }: { title: string; value: string; statusLabel: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary-500">
          <Lock className="h-4.5 w-4.5" />
        </div>
        <div>
          <Typography variant="h6" className="text-white/90">
            {title}
          </Typography>
          <div className="mt-0.5 font-mono text-sm text-white/40">{value}</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Badge className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-medium text-emerald-400">
          {statusLabel}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg text-white/40 hover:bg-white/5 hover:text-white"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

/* ─── API Keys section ─── */

function ApiKeysSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="bg-slate-950 py-12 sm:py-16 lg:py-20">
      <div className="app-container">
        <AnimateIn>
          <Card className="mx-auto w-full max-w-3xl rounded-2xl border border-white/8 bg-white/[0.02] shadow-2xl">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <Typography variant="h3" className="text-white">
                    {t('apiKeysTitle')}
                  </Typography>
                  <Typography variant="div" className="mt-2 text-white/60">
                    {t('apiKeysDesc')}
                  </Typography>
                </div>

                <Button className="rounded-full bg-primary px-5 text-sm font-medium text-white hover:bg-primary/90 w-full sm:w-auto">
                  {t('createNewKey')}
                  <Plus className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="mt-6 space-y-3">
                <KeyRow title={t('productionKey')} value="rk_live_8392...9921" statusLabel={t('active')} />
                <KeyRow title={t('testEnvironment')} value="rk_test_1102...3341" statusLabel={t('active')} />
              </div>

              <div className="my-6 h-px w-full bg-white/8" />

              <div>
                <Typography variant="h6" className="text-white/60">
                  {t('rateLimits')}
                </Typography>

                <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4">
                  <div className="flex items-center justify-between">
                    <Typography variant="div" className="text-white/60 text-sm">
                      {t('requestsPerMinute')}
                    </Typography>
                    <Typography variant="div" className="text-white/70 text-sm font-medium tabular-nums">
                      45 / 1,000
                    </Typography>
                  </div>

                  <div className="mt-3">
                    <Progress
                      value={(45 / 1000) * 100}
                      className="h-1.5 bg-white/8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── SDK card ─── */

function SdkCard({
  title,
  version,
  command,
}: {
  title: string;
  version: string;
  command: string;
}) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.02]">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-white/60">
            <Code2 className="h-4.5 w-4.5" />
          </div>
          <div>
            <Typography variant="h6" className="text-white/90">
              {title}
            </Typography>
            <span className="text-xs text-white/40">{version}</span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg text-white/40 hover:bg-white/5 hover:text-white"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="px-5 pb-5">
        <div className="flex items-center justify-between rounded-lg border border-white/8 bg-black/30 px-4 py-2.5">
          <span className="truncate font-mono text-[13px] text-white/50">
            {command}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 ml-2 rounded-md text-white/40 hover:bg-white/5 hover:text-white"
          >
            <Copy className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── SDKs section ─── */

function SdksSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="bg-slate-950 py-12 sm:py-16 lg:py-20">
      <div className="app-container">
        <AnimateIn>
          <div className="text-center mb-10 sm:mb-12">
            <Typography variant="h2" className="text-white">
              {t('sdksTitle')}
            </Typography>
            <Typography variant="div" className="mt-3 text-white/60 max-w-md mx-auto">
              {t('sdksDesc')}
            </Typography>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.08}>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            <SdkCard title="Node.js" version="v1.0.0" command="npm install @renuir/sdk" />
            <SdkCard title="Python" version="v1.1.0" command="pip install renuir" />
            <SdkCard title="Go" version="v1.0.0" command="go get github.com/renuir/go" />
            <SdkCard title="Swift" version="v1.0.0" command="pod 'RenuirSDK'" />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── Main export ─── */

export default function DeveloperPlatformSection() {
  const t = useTranslations("developer.docs");

  return (
    <>
      <DocsSection t={t} />
      <ApiKeysSection t={t} />
      <SdksSection t={t} />
    </>
  );
}
