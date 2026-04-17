"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const t = useTranslations('about.contact.form');
  const tc = useTranslations('common');
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, t('name')),
    email: z.string().email(tc('emailValidation')),
    subject: z.string().min(1, t('subject')),
    message: z.string().min(1, t('message')),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    // TODO: integrate with backend API
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 sm:p-8 lg:p-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-foreground">{t('name')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('namePlaceholder')}
                    className="h-12 rounded-xl border-border/60 bg-muted/40 dark:bg-muted/60 placeholder:text-muted-foreground/60 focus:bg-background transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-foreground">{t('email')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('emailPlaceholder')}
                    className="h-12 rounded-xl border-border/60 bg-muted/40 dark:bg-muted/60 placeholder:text-muted-foreground/60 focus:bg-background transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-foreground">{t('subject')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('subjectPlaceholder')}
                  className="h-12 rounded-xl border-border/60 bg-muted/40 dark:bg-muted/60 placeholder:text-muted-foreground/60 focus:bg-background transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-foreground">{t('message')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('messagePlaceholder')}
                  className="min-h-36 rounded-xl border-border/60 bg-muted/40 dark:bg-muted/60 placeholder:text-muted-foreground/60 focus:bg-background resize-none transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="w-full h-12 rounded-xl bg-primary font-medium text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            t('submit')
          )}
        </Button>
      </form>
    </Form>
  );
}
