import { useTranslations } from "next-intl";
import { LegalPageLayout } from "@/components/shared/legal/LegalPageLayout";

export default function AccessibilityPage() {
  const t = useTranslations("legal.accessibility");

  return (
    <LegalPageLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <section>
        <h2>{t("commitmentTitle")}</h2>
        <p>{t("commitmentBody")}</p>
      </section>

      <section>
        <h2>{t("standardTitle")}</h2>
        <p>{t("standardBody")}</p>
      </section>

      <section>
        <h2>{t("statusTitle")}</h2>
        <p>{t("statusBody")}</p>
      </section>

      <section>
        <h2>{t("measuresTitle")}</h2>
        <p>{t("measuresIntro")}</p>
        <ul>
          <li>{t("measure1")}</li>
          <li>{t("measure2")}</li>
          <li>{t("measure3")}</li>
          <li>{t("measure4")}</li>
          <li>{t("measure5")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("limitationsTitle")}</h2>
        <p>{t("limitationsBody")}</p>
      </section>

      <section>
        <h2>{t("feedbackTitle")}</h2>
        <p>{t("feedbackBody")}</p>
      </section>

      <section>
        <h2>{t("enforcementTitle")}</h2>
        <p>{t("enforcementBody")}</p>
      </section>
    </LegalPageLayout>
  );
}
