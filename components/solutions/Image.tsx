/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Typography } from "../ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";

const Image = () => {
  return (
    <section className="relative z-200">
      <AnimateIn>
        <img
          src="/images/solution/solutionhero.png"
          alt="Renuir Developer Platform"
          className="rounded-2xl app-container w-full h-auto mx-auto"
        />
      </AnimateIn>

      <div className="app-container mt-24">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <AnimateIn>
            <div className="block">
              <Typography
                variant="h1"
                className="font-medium leading-8 md:leading-16 text-black"
              >
                Lost items create invisible operational costs.
              </Typography>
              <Typography
                variant="lead"
                className="font-normal mt-8 text-gray-700"
              >
                For most venues, lost-and-found isn&apos;t a core task,
                it&apos;s an interruption. Staff deal with frantic visitors,
                manual phone calls, and dusty storage rooms.
              </Typography>
              <ul className="mt-6 list-disc px-4 ">
                <li>
                  <Typography
                    variant="smallText"
                    className="text-gray-700 font-normal"
                  >
                    Unverified claims and no audit trail leave you liable.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="smallText"
                    className="text-gray-700 font-normal"
                  >
                    Staff spend hours managing spreadsheets and emails.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="smallText"
                    className="text-gray-700 font-normal"
                  >
                    Storage rooms fill up with unreturned items.
                  </Typography>
                </li>
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <img
              src="/images/solution/manuallogs.png"
              alt="Renuir Developer Platform"
              className="rounded-2xl app-container w-full h-auto mx-auto"
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default Image;
