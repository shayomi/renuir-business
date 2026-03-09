/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowRight, Clock3, Mail } from "lucide-react";
import Link from "next/link";
import Nav from "../shared/navbar/Nav";
import AnimateIn from "@/components/ui/AnimateIn";

export function IndividualHero() {
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
          <div className="flex flex-row gap-2 items-center justify-center  mx-auto">
            <Clock3 />
            <Typography variant="smallText" className="text-white">
              Renuir business is in Private Beta. The features below are
              currently in preview mode.
            </Typography>
            <Link href="" className="underline">
              Join waitlist
            </Link>
          </div>
        </div>
      </div>
      <div className="relative app-container pt-24 pb-56 flex flex-col md:flex-row  justify-between items-center ">
        <AnimateIn>
          <div className=" flex-col items-start gap-4 ">
            <Typography
              variant="lead"
              className="mx-auto mt-6 max-w-xl text-black/80"
            >
              FOR BUSINESS & GOVERNMENT
            </Typography>
            <Typography
              variant="h1"
              className="mt-8  text-black leading-8 md:leading-16  font-medium max-w-120"
            >
              Lost something? We help its find its way back.
            </Typography>

            <Typography
              variant="lead"
              className=" mt-6 max-w-md text-black/80 p-0"
            >
              Renuir connects lost items with their owners through trusted
              venues, smart matching, and secure returns.
            </Typography>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                variant="dark"
                size="lg"
                className="flex items-center gap-3 rounded-full px-6"
              >
                <Image
                  src="/images/icons/googleplayicon.svg"
                  alt="Google Play"
                  width={20}
                  height={20}
                />
                Google Play
              </Button>

              <Button
                variant="dark"
                size="lg"
                className="flex items-center gap-3 rounded-full px-6"
              >
                <Image
                  src="/images/icons/appleicon.svg"
                  alt="Apple Store"
                  width={20}
                  height={20}
                />
                Apple Store
              </Button>
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <div>
            <img
              src="/images/solution/indivialheroimg.png"
              alt="Renuir Developer Platform"
              className="rounded-2xl  w-full h-auto mt-12 md:mt-0 "
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
