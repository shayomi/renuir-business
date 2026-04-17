"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Nav from "../home/HomeNav";
import { BetaBanner } from "../shared/BetaBanner";
import AnimateIn from "@/components/ui/AnimateIn";

export function DeveloperHero() {
  const t = useTranslations("developer.hero");
  const tc = useTranslations("common");
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    email: z.string().email(tc("emailValidation")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <Nav />
      <BetaBanner
        message={t("betaBanner")}
        linkText={t("joinWaitlist")}
        linkHref="/#waitlist"
      />

      <div className="relative app-container pt-12 sm:pt-20 lg:pt-24 pb-14 sm:pb-20 lg:pb-24 flex flex-col items-center text-center">
        <AnimateIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
              {t("eyebrow")}
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <Typography
            variant="extraLargeText"
            className="mt-5 sm:mt-6 text-white font-medium max-w-3xl"
          >
            {t("headline")}
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <Typography
            variant="lead"
            className="mx-auto mt-3 sm:mt-4 max-w-xl text-white/70"
          >
            {t("subtitle")}
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.14} className="mt-6 sm:mt-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30 group-focus-within:text-primary-500 transition-colors" />
                        <Input
                          {...field}
                          disabled={loading}
                          placeholder={t("emailPlaceholder")}
                          className="pl-11 h-12 text-sm rounded-full border border-white/10 bg-white/5 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary/20 shadow-sm transition-all placeholder:text-white/30"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="rounded-full"
              >
                {loading ? tc("loading") : t("cta")}
              </Button>
            </form>
          </Form>
        </AnimateIn>

        <AnimateIn delay={0.18}>
          <Typography
            variant="smallText"
            className="mx-auto mt-5 sm:mt-6 text-white/55"
          >
            {t("socialProof")}
          </Typography>
        </AnimateIn>
      </div>
    </section>
  );
}
