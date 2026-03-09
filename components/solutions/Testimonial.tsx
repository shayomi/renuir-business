import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimateIn from "@/components/ui/AnimateIn";
import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarSrc?: string;
  initials: string;
  stars?: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We reduced our item processing time by 60% in the first month. It used to be a chaos of spreadsheets; now it's automated.",
    name: "Sarah Jenkins",
    role: "Director of Operations",
    company: "Grand Central Hub",
    avatarSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&q=80",
    initials: "SJ",
    stars: 5,
  },
  {
    quote:
      "The API integration was seamless. We connected Renuir to our existing property management system in less than a week.",
    name: "David Chen",
    role: "CTO",
    company: "Horizon Hospitality",
    avatarSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&q=80",
    initials: "DC",
    stars: 5,
  },
  {
    quote:
      "Compliance was our biggest headache. Renuir's automated chain of custody logs solved that overnight.",
    name: "Elena Rodriguez",
    role: "Head of Security",
    company: "Metro Transit Authority",
    avatarSrc:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=128&q=80",
    initials: "ER",
    stars: 5,
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
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-48">
        <div className="flex flex-col items-center text-center">
          <AnimateIn>
            <Badge
              variant="secondary"
              className="rounded-full bg-primary-100 text-primary-700 px-3 py-1 text-xs font-medium"
            >
              Testimonials
            </Badge>

            <div className="mt-6 max-w-3xl">
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Trusted by operational leaders.
              </h2>
              <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
                See how forward-thinking organizations are turning lost property
                from a liability into{" "}
                <span className="whitespace-nowrap">a loyalty touchpoint.</span>
              </p>
            </div>
          </AnimateIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <AnimateIn key={t.name} delay={index * 0.05}>
              <Card className="rounded-2xl border-muted/60 bg-card shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex h-full flex-col p-6">
                  <Stars count={t.stars} />

                {/* Typography */}
                <div className="prose prose-sm mt-4 max-w-none prose-p:leading-relaxed prose-p:text-foreground">
                  <p className="m-0">
                    <span className="text-muted-foreground">“</span>
                    {t.quote}
                    <span className="text-muted-foreground">”</span>
                  </p>
                </div>

                  <div className="mt-6 flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={t.avatarSrc} alt={t.name} />
                      <AvatarFallback>{t.initials}</AvatarFallback>
                    </Avatar>

                    <div className="min-w-0 text-left">
                      <p className="truncate text-sm font-semibold">{t.name}</p>
                      <p className="truncate text-sm text-muted-foreground">
                        {t.role}, {t.company}
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
