import { useTranslations } from "next-intl";
import { LegalPageLayout } from "@/components/shared/legal/LegalPageLayout";

export default function PrivacyPage() {
  const t = useTranslations("legal.privacy");

  return (
    <LegalPageLayout title={t("title")} lastUpdated={t("lastUpdated")}>
      <section>
        <h2>{t("controllerTitle")}</h2>
        <p>{t("controllerBody")}</p>
      </section>

      <section>
        <h2>{t("dataCollectedTitle")}</h2>
        <p>{t("dataCollectedIntro")}</p>
        <ul>
          <li>{t("dataAccount")}</li>
          <li>{t("dataPhotos")}</li>
          <li>{t("dataLocation")}</li>
          <li>{t("dataChat")}</li>
          <li>{t("dataPayments")}</li>
          <li>{t("dataTechnical")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("legalBasisTitle")}</h2>
        <p>{t("legalBasisBody")}</p>
        <ul>
          <li>{t("basisConsent")}</li>
          <li>{t("basisContract")}</li>
          <li>{t("basisLegitimate")}</li>
          <li>{t("basisLegal")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("thirdPartiesTitle")}</h2>
        <p>{t("thirdPartiesIntro")}</p>
        <ul>
          <li>{t("processorHosting")}</li>
          <li>{t("processorPayments")}</li>
          <li>{t("processorAI")}</li>
          <li>{t("processorAnalytics")}</li>
        </ul>
      </section>

      <section>
        <h2>{t("retentionTitle")}</h2>
        <p>{t("retentionBody")}</p>
      </section>

      <section>
        <h2>{t("transfersTitle")}</h2>
        <p>{t("transfersBody")}</p>
      </section>

      <section>
        <h2>{t("rightsTitle")}</h2>
        <p>{t("rightsIntro")}</p>
        <ul>
          <li>{t("rightAccess")}</li>
          <li>{t("rightRectification")}</li>
          <li>{t("rightErasure")}</li>
          <li>{t("rightRestriction")}</li>
          <li>{t("rightPortability")}</li>
          <li>{t("rightObjection")}</li>
          <li>{t("rightWithdraw")}</li>
        </ul>
        <p>{t("rightsContact")}</p>
      </section>

      <section>
        <h2>{t("supervisoryTitle")}</h2>
        <p>{t("supervisoryBody")}</p>
      </section>

      <section>
        <h2>{t("changesTitle")}</h2>
        <p>{t("changesBody")}</p>
      </section>
    </LegalPageLayout>
  );
}
