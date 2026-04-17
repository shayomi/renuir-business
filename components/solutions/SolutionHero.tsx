"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
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
import Nav from "../shared/navbar/Nav";
import { BetaBanner } from "../shared/BetaBanner";
import AnimateIn from "@/components/ui/AnimateIn";
import { useTranslations } from 'next-intl';

export function SolutionHero() {
  const t = useTranslations('solutions.hero');
  const tc = useTranslations('common');
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
  };

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/about/abouthero.svg"
        alt=""
        fill
        priority
        className="object-cover dark:opacity-20"
      />
      <Nav />
      <BetaBanner
        message={t('betaBanner')}
        linkText={t('joinWaitlist')}
        linkHref="/#waitlist"
      />
      <div className="relative app-container pt-10 sm:pt-16 lg:pt-24 pb-32 sm:pb-40 lg:pb-56 flex flex-col items-center text-center">
        <AnimateIn>
          <Typography
            variant="smallText"
            className="mx-auto max-w-xl text-muted-foreground uppercase tracking-wider"
          >
            {t('eyebrow')}
          </Typography>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <Typography
            variant="extraLargeText"
            className="mt-4 sm:mt-6 text-foreground font-medium max-w-3xl"
          >
            {t('headline')}
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <Typography
            variant="lead"
            className="mx-auto mt-4 sm:mt-6 max-w-xl text-foreground/80"
          >
            {t('subtitle')}
          </Typography>
        </AnimateIn>
        <AnimateIn delay={0.16} className="mt-8 sm:mt-12 lg:mt-16">
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
                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          {...field}
                          disabled={loading}
                          placeholder={t('emailPlaceholder')}
                          className="pl-11 h-12 text-sm rounded-full border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 bg-background shadow-sm transition-all placeholder:text-muted-foreground"
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
                className="h-12 px-6 text-sm font-medium rounded-full"
              >
                {loading ? tc("joining") : t('cta')}
              </Button>
            </form>
          </Form>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <Typography
            variant="smallText"
            className="mx-auto mt-4 sm:mt-6 max-w-xl text-muted-foreground"
          >
            {t('socialProof')}
          </Typography>
        </AnimateIn>
      </div>
    </section>
  );
}
