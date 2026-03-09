/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Typography } from "@/components/ui/typography";
import {
  Download,
  Copy,
  Plus,
  Lock,
  Terminal,
  Database,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

function TopNav() {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-6 pt-10">
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-10">
        <div className="flex items-center justify-center border-b border-white/10">
          <TabsList className="h-auto bg-transparent p-0">
            <TabsTrigger
              value="documentation"
              className={cn(
                // HARD RESET (kills shadcn defaults that cause the flash)
                "rounded-none border-0 bg-transparent shadow-none ring-0 ring-offset-0",
                "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                "data-[state=active]:bg-transparent",

                // YOUR STYLES
                "relative -mb-px px-6 py-3 text-sm font-medium text-gray-200 hover:text-primary-100",
                "border-b-2 border-transparent",
                "data-[state=active]:border-primary-600 data-[state=active]:text-gray-200",
              )}
            >
              Documentation
            </TabsTrigger>

            <TabsTrigger
              value="keys"
              className={cn(
                "rounded-none border-0 bg-transparent shadow-none ring-0 ring-offset-0",
                "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                "data-[state=active]:bg-transparent",

                "relative -mb-px px-6 py-3 text-sm font-medium text-gray-200 hover:text-primary-100",
                "border-b-2 border-transparent",
                "data-[state=active]:border-primary-600 data-[state=active]:text-gray-200",
              )}
            >
              API Keys
            </TabsTrigger>

            <TabsTrigger
              value="sdks"
              className={cn(
                "rounded-none border-0 bg-transparent shadow-none ring-0 ring-offset-0",
                "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                "data-[state=active]:bg-transparent",

                "relative -mb-px px-6 py-3 text-sm font-medium text-gray-200 hover:text-primary-100",
                "border-b-2 border-transparent",
                "data-[state=active]:border-primary-600 data-[state=active]:text-gray-200",
              )}
            >
              SDKs
            </TabsTrigger>
          </TabsList>
        </div>
      </div>

      {/* top divider */}
    </div>
  );
}

function GlowBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate w-full overflow-hidden bg-[#050818] text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-130 w-225 -translate-x-1/2 rounded-full bg-[#2E62FF]/10 blur-[90px]" />
        <div className="absolute -bottom-48 left-1/2 h-130 w-225 -translate-x-1/2 rounded-full bg-[#2E62FF]/10 blur-[110px]" />
      </div>

      {children}
    </div>
  );
}

function FeatureRow({
  active,
  icon,
  title,
  desc,
}: {
  active?: boolean;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-2xl border border-transparent px-5 py-5",
        active
          ? "border-[#2E62FF]/30 bg-white/6 shadow-[0_0_0_1px_rgba(46,98,255,0.08)]"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl",
          active
            ? "bg-[#2E62FF]/20 text-[#9CB5FF]"
            : "bg-white/10 text-white/70",
        )}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <Typography variant="h6" className="text-white/95">
          {title}
        </Typography>
        <Typography variant="mutedText" className="mt-1 text-white/60">
          {desc}
        </Typography>
      </div>
    </div>
  );
}

function CodeWindow() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="text-xs text-white/45">
            POST api.renuir.com/v1/items
          </div>
          <div className="w-[56px]" />
        </div>

        {/* code */}
        <pre className="overflow-hidden px-6 py-6 text-[13px] leading-6 text-white/80">
          <code className="font-mono">
            <span className="text-white/70">const</span> client{" "}
            <span className="text-white/70">=</span>{" "}
            <span className="text-white/70">new</span> RenuirClient({"{"}
            {"\n"}
            {"  "}apiKey: process.env.RENUIR_KEY
            {"\n"}
            {"}"});
            {"\n\n"}
            <span className="text-white/70">// Report a found item</span>
            {"\n"}
            <span className="text-white/70">const</span> item{" "}
            <span className="text-white/70">=</span>{" "}
            <span className="text-white/70">await</span>
            {"\n"}
            client.items.create({"{"}
            {"\n"}
            {"  "}organization:{" "}
            <span className="text-emerald-400">&ldquo;org_8x92...&ldquo;</span>,
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
            <span className="text-emerald-400">
              &quot;Terminal 2, Gate 14&quot;
            </span>
            {"\n"}
            {"  "}
            {","}
            {"\n"}
            {"  "}metadata: {"{"}
            {"\n"}
            {"    "}source:{" "}
            <span className="text-emerald-400">
              &quot;cleaning_staff_app&quot;
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"});"}
            {"\n\n"}
            console.log(item.status);{" "}
            <span className="text-white/55">
              // &quot;PROCESSING_MATCH&quot;
            </span>
          </code>
        </pre>
      </div>
    </div>
  );
}

function DocsView() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-14">
      <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1.35fr]">
        <div className="pt-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="text-white/60">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="text-xs font-medium text-white/70">
              Developer Platform
            </span>
          </div>

          <Typography
            variant="h1"
            className="mt-6 text-balance font-semibold leading-[1.05] text-white"
          >
            Build on our trust infrastructure.
          </Typography>

          <Typography
            variant="div"
            className="mt-6 max-w-md text-[15px] leading-7 text-white/55"
          >
            We provide powerful API solutions
            <br />
            and full whitelabel capabilities for enterprise businesses
            <br />
            that need total control.
          </Typography>

          <div className="mt-10 space-y-6">
            <FeatureRow
              active
              icon={<Database className="h-5 w-5" />}
              title="Renuir API"
              desc="Headless integration for item reporting, matching logic, and claim verification."
            />
            <FeatureRow
              icon={<MessageCircle className="h-5 w-5" />}
              title="Whitelabel Solution"
              desc="Deploy a fully branded instance on your custom domain in minutes."
            />
          </div>
        </div>

        <div className="lg:pt-4">
          <CodeWindow />
        </div>
      </div>
    </div>
  );
}

function KeyRow({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[#2E62FF]/25 bg-black/30 px-5 py-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E62FF]/10 text-[#9CB5FF]">
          <Lock className="h-5 w-5" />
        </div>
        <div>
          <Typography variant="h6" className="text-white/90">
            {title}
          </Typography>
          <div className="mt-0.5 font-mono text-sm text-white/50">{value}</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Badge className="rounded-full border border-[#59FF6A]/30 bg-[#59FF6A]/10 px-4 py-1 text-xs font-medium text-[#59FF6A]">
          Active
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl bg-white/[0.02] text-white/60 hover:bg-white/[0.06] hover:text-white"
        >
          <Copy className="h-4.5 w-4.5" />
        </Button>
      </div>
    </div>
  );
}

function ApiKeysView() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <Card className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
        <div className="px-10 py-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <Typography variant="h3" className="text-white">
                API Keys
              </Typography>
              <Typography variant="div" className="mt-2 text-white/55">
                Manage access tokens for your projectct.
              </Typography>
            </div>

            <Button className="h-12 rounded-full bg-[#2E62FF] px-6 text-sm font-medium text-white hover:bg-[#2E62FF]/90">
              Create new key
              <Plus className="ml-3 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-10 space-y-5">
            <KeyRow title="Production key" value="rk_live_8392 ... 9921" />
            <KeyRow title="Test Environment" value="rk_test_1102 ... 3341" />
          </div>

          <div className="my-10 h-px w-full bg-white/10" />

          <div>
            <Typography variant="h6" className="text-white/60">
              Rate Limits
            </Typography>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 px-6 py-5">
              <div className="flex items-center justify-between">
                <Typography variant="div" className="text-white/55">
                  Request per minute
                </Typography>
                <Typography variant="div" className="text-white/80">
                  45 / 1000
                </Typography>
              </div>

              <div className="mt-4">
                <Progress
                  value={(45 / 1000) * 100}
                  className="h-2 bg-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

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
    <div className="rounded-2xl border border-[#2E62FF]/25 bg-white/4 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
      <div className="flex items-start justify-between px-6 py-5">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white/70">
            <Terminal className="h-5 w-5" />
          </div>

          <div>
            <Typography variant="h6" className="text-white">
              {title}
            </Typography>
            <Typography variant="mutedText" className="mt-1 text-white/50">
              {version}
            </Typography>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl bg-transparent text-white/55 hover:bg-white/[0.06] hover:text-white"
        >
          <Download className="h-5 w-5" />
        </Button>
      </div>

      <div className="px-6 pb-6">
        <div className="flex items-center justify-between rounded-xl border border-[#2E62FF]/25 bg-black/35 px-4 py-3">
          <div className="truncate font-mono text-sm text-white/60">
            {command}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-lg bg-white/[0.02] text-white/60 hover:bg-white/[0.06] hover:text-white"
          >
            <Copy className="h-4.5 w-4.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function SdksView() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <SdkCard
          title="Node.js"
          version="v1.0"
          command="npm install @renuir/sdk"
        />
        <SdkCard title="Python" version="v1.1.0" command="pip install renuir" />
        <SdkCard
          title="Go"
          version="V1.00"
          command="go get github.com/renuir/go"
        />
        <SdkCard title="Swift" version="V1.00" command="pod ‘RenuirSDK’" />
      </div>
    </div>
  );
}

export default function DeveloperPlatformSection() {
  return (
    <GlowBackground>
      <Tabs defaultValue="documentation" className="w-full py-16">
        <TopNav />

        <TabsContent value="documentation" className="mt-0">
          <DocsView />
        </TabsContent>

        <TabsContent value="keys" className="mt-0">
          <ApiKeysView />
        </TabsContent>

        <TabsContent value="sdks" className="mt-0">
          <SdksView />
        </TabsContent>
      </Tabs>
    </GlowBackground>
  );
}
