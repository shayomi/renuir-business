import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import AnimateIn from "@/components/ui/AnimateIn";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";

const DeveloperPlatform = () => {
  const t = useTranslations("home.developer");

  const capabilities = [
    {
      icon: "/images/icons/api.svg",
      title: t("apiTitle"),
      desc: t("apiDesc"),
    },
    {
      icon: "/images/icons/paint.svg",
      title: t("whitelabelTitle"),
      desc: t("whitelabelDesc"),
    },
  ];

  return (
    <section className="bg-background">
      <div className="app-container grid items-center gap-10 py-16 sm:gap-12 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <AnimateIn>
          <div className="max-w-xl">
            <Badge variant="default">{t("badge")}</Badge>

            <Typography variant="h2" className="mt-5 sm:mt-6">
              {t("headline")}
            </Typography>

            <Typography variant="lead" className="mt-4 text-muted-foreground sm:mt-6">
              {t("subtitle")}
            </Typography>

            <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-soft sm:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground">
                    <Image src={cap.icon} alt="" width={18} height={18} />
                  </div>

                  <div>
                    <Typography variant="h6">{cap.title}</Typography>
                    <Typography variant="mutedText" className="mt-1">
                      {cap.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/developer">
              <Button
                size="lg"
                variant="outline"
                className="mt-8 rounded-full sm:mt-10"
              >
                {t("cta")}
              </Button>
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="relative">
            <Image
              src="/images/home/developer.png"
              alt="Renuir developer platform"
              width={720}
              height={520}
              priority
              className="rounded-2xl shadow-elevated"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default DeveloperPlatform;
