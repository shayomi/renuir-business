"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowRight, Clock3, Mail } from "lucide-react";
import Link from "next/link";
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
import { toast } from "sonner";
import Nav from "../shared/navbar/Nav";
import AnimateIn from "@/components/ui/AnimateIn";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export function SolutionHero() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    // try {
    //   const res = await fetch("/api/waitlist", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email: values.email }),
    //   });

    //   if (!res.ok) {
    //     throw new Error("Submission failed");
    //   }

    //   toast.success("You're on the waitlist 🎉", {
    //     description: "We’ll notify you when early access is ready.",
    //   });

    //   form.reset();
    // } catch (error) {
    //   toast.error("Something went wrong", {
    //     description: "Please try again later.",
    //   });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/about/abouthero.svg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <Nav />
      <div className=" relative  w-full bg-warning text-white font-medium">
        <div className="app-container py-6">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center  mx-auto">
            <div className="flex flex-row gap-2 items-start">
              <Clock3 />
              <Typography
                variant="smallText"
                className="text-white text-center leading-5"
              >
                Developer Platform is in Private Beta. The features below are
                currently in preview mode.
              </Typography>
            </div>
            <Link href="" className="underline">
              Join waitlist
            </Link>
          </div>
        </div>
      </div>
      <div className="relative app-container pt-12 md:pt-24 pb-56 flex flex-col items-center text-center">
        <AnimateIn>
          <Typography
            variant="lead"
            className="mx-auto mt-6 max-w-xl text-black/80"
          >
            FOR BUSINESS & GOVERNMENT
          </Typography>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <Typography
            variant="extraLargeText"
            className="mt-8  text-black leading-14 md:leading-24  font-medium max-w-150"
          >
            The operating system for lost items.
          </Typography>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <Typography
            variant="lead"
            className="mx-auto mt-6 max-w-xl text-black/80"
          >
            We are replacing the &quot;Lost & Found box&quot; with an
            intelligent, auditable recovery platform. Join the select group of
            partners shaping the future of recovery.
          </Typography>
        </AnimateIn>
        <AnimateIn delay={0.16} className="mt-16">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                        <Input
                          {...field}
                          disabled={loading}
                          placeholder="Enter your work email"
                          className="pl-12 h-14 text-base rounded-full border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 bg-white shadow-sm transition-all placeholder:text-gray-400"
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
                className="h-14 px-8 text-base font-medium rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "Joining..." : "Request a demo"}
              </Button>
            </form>
          </Form>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <Typography
            variant="h6"
            className="mx-auto mt-6 max-w-xl text-black/80"
          >
            Join 50+ entreprise partners in the queue
          </Typography>
        </AnimateIn>
      </div>
    </section>
  );
}
