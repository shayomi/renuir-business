import { useTranslations } from "next-intl";
import { LegalPageLayout } from "@/components/shared/legal/LegalPageLayout";

export default function CookiesPage() {
  const t = useTranslations("legal.cookies");

  return (
    <LegalPageLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <section>
        <h2>{t("whatTitle")}</h2>
        <p>{t("whatBody")}</p>
      </section>

      <section>
        <h2>{t("necessaryTitle")}</h2>
        <p>{t("necessaryBody")}</p>
        <ul>
          <li>{t("necessarySession")}</li>
          <li>{t("necessaryLocale")}</li>
          <li>{t("necessaryConsent")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("analyticsTitle")}</h2>
        <p>{t("analyticsBody")}</p>
      </section>

      <section>
        <h2>{t("functionalTitle")}</h2>
        <p>{t("functionalBody")}</p>
      </section>

      <section>
        <h2>{t("thirdPartyTitle")}</h2>
        <p>{t("thirdPartyBody")}</p>
      </section>

      <section>
        <h2>{t("consentTitle")}</h2>
        <p>{t("consentBody")}</p>
      </section>

      <section>
        <h2>{t("withdrawTitle")}</h2>
        <p>{t("withdrawBody")}</p>
      </section>

      <section>
        <h2>{t("contactTitle")}</h2>
        <p>{t("contactBody")}</p>
      </section>
    </LegalPageLayout>
  );
}
