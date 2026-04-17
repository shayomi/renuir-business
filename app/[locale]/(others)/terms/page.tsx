import { useTranslations } from "next-intl";
import { LegalPageLayout } from "@/components/shared/legal/LegalPageLayout";

export default function TermsPage() {
  const t = useTranslations("legal.terms");

  return (
    <LegalPageLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <section>
        <h2>{t("scopeTitle")}</h2>
        <p>{t("scopeBody")}</p>
      </section>

      <section>
        <h2>{t("serviceTitle")}</h2>
        <p>{t("serviceBody")}</p>
      </section>

      <section>
        <h2>{t("accountTitle")}</h2>
        <p>{t("accountBody")}</p>
      </section>

      <section>
        <h2>{t("obligationsTitle")}</h2>
        <p>{t("obligationsIntro")}</p>
        <ul>
          <li>{t("obligation1")}</li>
          <li>{t("obligation2")}</li>
          <li>{t("obligation3")}</li>
          <li>{t("obligation4")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("verificationTitle")}</h2>
        <p>{t("verificationBody")}</p>
      </section>

      <section>
        <h2>{t("paymentsTitle")}</h2>
        <p>{t("paymentsBody")}</p>
      </section>

      <section>
        <h2>{t("ipTitle")}</h2>
        <p>{t("ipBody")}</p>
      </section>

      <section>
        <h2>{t("liabilityTitle")}</h2>
        <p>{t("liabilityBody")}</p>
      </section>

      <section>
        <h2>{t("terminationTitle")}</h2>
        <p>{t("terminationBody")}</p>
      </section>

      <section>
        <h2>{t("governingTitle")}</h2>
        <p>{t("governingBody")}</p>
      </section>

      <section>
        <h2>{t("changesTitle")}</h2>
        <p>{t("changesBody")}</p>
      </section>
    </LegalPageLayout>
  );
}
