import { useTranslations } from "next-intl";
import { LegalPageLayout } from "@/components/shared/legal/LegalPageLayout";

export default function ImprintPage() {
  const t = useTranslations("legal.imprint");

  return (
    <LegalPageLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <section>
        <h2>{t("companyTitle")}</h2>
        <p>{t("companyName")}</p>
        <p>{t("companyAddress")}</p>
        <p>{t("companyRegistration")}</p>
        <p>{t("companyVatId")}</p>
      </section>

      <section>
        <h2>{t("representativeTitle")}</h2>
        <p>{t("representativeBody")}</p>
      </section>

      <section>
        <h2>{t("contactTitle")}</h2>
        <p>{t("contactEmail")}</p>
        <p>{t("contactPhone")}</p>
      </section>

      <section>
        <h2>{t("odrTitle")}</h2>
        <p>{t("odrBody")}</p>
      </section>

      <section>
        <h2>{t("disclaimerTitle")}</h2>
        <p>{t("disclaimerContent")}</p>
      </section>

      <section>
        <h2>{t("disclaimerLinksTitle")}</h2>
        <p>{t("disclaimerLinksBody")}</p>
      </section>
    </LegalPageLayout>
  );
}
