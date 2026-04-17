"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimateIn from "@/components/ui/AnimateIn";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&q=80",
    initials: "SJ",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&q=80",
    initials: "DC",
  },
  {
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=128&q=80",
    initials: "ER",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={[
            "h-4 w-4",
            i < count
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/30",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const t = useTranslations("solutions.testimonials");

  const testimonials = [
    { quote: t("quote1"), name: t("quote1Name"), role: t("quote1Role"), avatar: avatars[0] },
    { quote: t("quote2"), name: t("quote2Name"), role: t("quote2Role"), avatar: avatars[1] },
    { quote: t("quote3"), name: t("quote3Name"), role: t("quote3Role"), avatar: avatars[2] },
  ];

  return (
    <section className="w-full bg-background">
      <div className="app-container py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <AnimateIn>
            <Badge
              variant="secondary"
              className="rounded-full bg-primary-100 dark:bg-primary/15 text-primary-700 dark:text-primary-400 px-3 py-1 text-xs font-medium"
            >
              {t("badge")}
            </Badge>

            <div className="mt-6 max-w-3xl">
              <Typography variant="h2" className="text-balance text-foreground">
                {t("headline")}
              </Typography>
              <Typography variant="lead" className="mt-4 text-balance">
                {t("subtitle")}
              </Typography>
            </div>
          </AnimateIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimateIn key={item.name} delay={index * 0.05}>
              <Card className="rounded-2xl border-muted/60 bg-card shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex h-full flex-col p-6">
                  <Stars count={5} />

                  <div className="prose prose-sm mt-4 max-w-none prose-p:leading-relaxed prose-p:text-foreground">
                    <p className="m-0">
                      <span className="text-muted-foreground">&ldquo;</span>
                      {item.quote}
                      <span className="text-muted-foreground">&rdquo;</span>
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={item.avatar.src} alt={item.name} />
                      <AvatarFallback>{item.avatar.initials}</AvatarFallback>
                    </Avatar>

                    <div className="min-w-0 text-left">
                      <p className="truncate text-sm font-semibold">{item.name}</p>
                      <p className="truncate text-sm text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
