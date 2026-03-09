import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";

import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">
      <div className="app-container py-24">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/home/glossybg.svg"
              alt="Glossy background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />

            <div className="relative grid divide-y divide-white/20 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              <div className="flex flex-col gap-3 items-center px-8 py-16 text-center">
                <Typography variant="h2" className="text-white">
                  For Business
                </Typography>

                <Typography variant="lead" className=" text-white/80">
                  Modernize your lost-and-found desk.
                </Typography>

                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-4 rounded-full px-8"
                >
                  Request a demo
                </Button>
              </div>

              <div className="flex flex-col gap-3 items-center px-8 py-16 text-center">
                <Typography variant="h2" className="text-white">
                  For individuals
                </Typography>

                <Typography variant="lead" className=" text-white/80">
                  Download the app to get started.
                </Typography>

                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-4 rounded-full px-8"
                >
                  Download the app
                </Button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>

      <div className="relative app-container py-20">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="select-none text-[300px] font-semibold text-white/2">
            Renuir
          </span>
        </div>
        <AnimateIn>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
            <div className="max-w-sm">
              <Image
                src="/images/icons/renuirlogo.png"
                alt="Renuir logo"
                width={140}
                height={40}
                className="mb-6"
              />

              <Typography variant="p" className="text-white/70">
                The operating system for lost items. Used by venues and cities to
                return items responsibly.
              </Typography>
            </div>

            <div className="grid gap-12 sm:grid-cols-2">
              <div>
                <Typography
                  variant="smallText"
                  className="mb-4 uppercase tracking-wider text-white/60"
                >
                  Company
                </Typography>

                <ul className="space-y-3 text-white/80 mt-4">
                  <li>
                    <Link href="#">For Businesses</Link>
                  </li>
                  <li>
                    <Link href="#">For consumers</Link>
                  </li>
                  <li>
                    <Link href="#">Developers</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>

              <div>
                <Typography
                  variant="smallText"
                  className="mb-4 uppercase tracking-wider text-white/60"
                >
                  Legal
                </Typography>

                <ul className="space-y-3 text-white/80 mt-4">
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="#">Cookies</Link>
                  </li>
                  <li>
                    <Link href="#">Imprint</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center md:justify-between gap-4 mt-12 ">
            <Typography variant="mutedText" className="mt-10 text-white/50">
              © 2026 Renuir UG. All rights reserved.
            </Typography>

            <div className="flex ">
              <div className="flex items-center gap-6">
                <Link
                  href="https://x.com/yourhandle"
                  target="_blank"
                  aria-label="X"
                  className="text-white/80 hover:text-white transition"
                >
                  <Twitter className="h-5 w-5" />
                </Link>

                <Link
                  href="https://linkedin.com/company/yourcompany"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-white/80 hover:text-white transition"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>

                <Link
                  href="https://youtube.com/@yourchannel"
                  target="_blank"
                  aria-label="YouTube"
                  className="text-white/80 hover:text-white transition"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </footer>
  );
};

export default Footer;
