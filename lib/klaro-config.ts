import type { Locale } from "@/i18n/config";

const translations: Record<Locale, Record<string, unknown>> = {
  de: {
    consentModal: {
      title: "Cookie-Einstellungen",
      description:
        "Wir verwenden Cookies, um Ihnen ein optimales Erlebnis zu bieten. Wählen Sie aus, welche Cookies Sie zulassen möchten.",
    },
    consentNotice: {
      title: "Cookie-Einstellungen",
      description:
        "Wir verwenden Cookies für grundlegende Funktionen und zur Verbesserung Ihres Erlebnisses. Für jede Kategorie können Sie wählen, ob Sie zustimmen oder nicht. Für weitere Details zu Cookies und anderen sensiblen Daten lesen Sie bitte die {privacyPolicy}.",
      learnMore: "Anpassen",
      changeDescription:
        "Seit Ihrem letzten Besuch gab es Änderungen. Bitte aktualisieren Sie Ihre Einwilligung.",
    },
    accept: "Alle akzeptieren",
    acceptAll: "Alle akzeptieren",
    decline: "Ablehnen",
    ok: "Einstellungen speichern",
    save: "Speichern",
    privacyPolicy: { name: "Datenschutzerklärung", url: "/privacy" },
    purposes: {
      necessary: { title: "Notwendig", description: "Diese Cookies sind für die Grundfunktionen der Website erforderlich." },
      analytics: { title: "Analyse", description: "Helfen uns zu verstehen, wie Besucher die Website nutzen." },
      functional: { title: "Funktional", description: "Ermöglichen erweiterte Funktionen und Personalisierung." },
    },
  },
  en: {
    consentModal: {
      title: "Cookie settings",
      description:
        "We use cookies to provide you with the best experience. Choose which cookies you want to allow.",
    },
    consentNotice: {
      title: "Cookie settings",
      description:
        "We use cookies for basic functions and to improve your experience. For each category, you can choose to opt in or out. For more details on cookies, please read our {privacyPolicy}.",
      learnMore: "Customize",
      changeDescription:
        "There have been changes since your last visit. Please update your consent.",
    },
    accept: "Accept all",
    acceptAll: "Accept all",
    decline: "Decline",
    ok: "Save settings",
    save: "Save",
    privacyPolicy: { name: "privacy policy", url: "/privacy" },
    purposes: {
      necessary: { title: "Necessary", description: "These cookies are required for basic website functionality." },
      analytics: { title: "Analytics", description: "Help us understand how visitors use the website." },
      functional: { title: "Functional", description: "Enable enhanced features and personalization." },
    },
  },
  ar: {
    consentModal: {
      title: "إعدادات ملفات تعريف الارتباط",
      description: "نستخدم ملفات تعريف الارتباط لتوفير أفضل تجربة لك. اختر ملفات تعريف الارتباط التي تريد السماح بها.",
    },
    consentNotice: {
      title: "إعدادات ملفات تعريف الارتباط",
      description: "نستخدم ملفات تعريف الارتباط للوظائف الأساسية ولتحسين تجربتك. لكل فئة، يمكنك اختيار الموافقة أو الرفض. لمزيد من التفاصيل، اقرأ {privacyPolicy}.",
      learnMore: "تخصيص",
      changeDescription: "حدثت تغييرات منذ زيارتك الأخيرة. يرجى تحديث موافقتك.",
    },
    accept: "قبول الكل",
    acceptAll: "قبول الكل",
    decline: "رفض",
    ok: "حفظ الإعدادات",
    save: "حفظ",
    privacyPolicy: { name: "سياسة الخصوصية", url: "/privacy" },
    purposes: {
      necessary: { title: "ضرورية", description: "هذه الملفات مطلوبة لوظائف الموقع الأساسية." },
      analytics: { title: "تحليلية", description: "تساعدنا في فهم كيفية استخدام الزوار للموقع." },
      functional: { title: "وظيفية", description: "تتيح ميزات محسنة وتخصيصاً." },
    },
  },
  es: {
    consentModal: {
      title: "Configuración de cookies",
      description: "Usamos cookies para ofrecerle la mejor experiencia. Elija qué cookies desea permitir.",
    },
    consentNotice: {
      title: "Configuración de cookies",
      description: "Usamos cookies para funciones básicas y para mejorar su experiencia. Para cada categoría, puede optar por aceptar o rechazar. Para más detalles, lea nuestra {privacyPolicy}.",
      learnMore: "Personalizar",
      changeDescription: "Ha habido cambios desde su última visita. Actualice su consentimiento.",
    },
    accept: "Aceptar todo",
    acceptAll: "Aceptar todo",
    decline: "Rechazar",
    ok: "Guardar configuración",
    save: "Guardar",
    privacyPolicy: { name: "política de privacidad", url: "/privacy" },
    purposes: {
      necessary: { title: "Necesarias", description: "Estas cookies son necesarias para el funcionamiento básico del sitio." },
      analytics: { title: "Analíticas", description: "Nos ayudan a entender cómo los visitantes usan el sitio." },
      functional: { title: "Funcionales", description: "Permiten funciones mejoradas y personalización." },
    },
  },
  fr: {
    consentModal: {
      title: "Paramètres des cookies",
      description: "Nous utilisons des cookies pour vous offrir la meilleure expérience. Choisissez les cookies que vous souhaitez autoriser.",
    },
    consentNotice: {
      title: "Paramètres des cookies",
      description: "Nous utilisons des cookies pour les fonctions de base et pour améliorer votre expérience. Pour chaque catégorie, vous pouvez choisir d'accepter ou de refuser. Pour plus de détails, consultez notre {privacyPolicy}.",
      learnMore: "Personnaliser",
      changeDescription: "Des modifications ont eu lieu depuis votre dernière visite. Veuillez mettre à jour votre consentement.",
    },
    accept: "Tout accepter",
    acceptAll: "Tout accepter",
    decline: "Refuser",
    ok: "Enregistrer les paramètres",
    save: "Enregistrer",
    privacyPolicy: { name: "politique de confidentialité", url: "/privacy" },
    purposes: {
      necessary: { title: "Nécessaires", description: "Ces cookies sont essentiels au fonctionnement du site." },
      analytics: { title: "Analytiques", description: "Nous aident à comprendre comment les visiteurs utilisent le site." },
      functional: { title: "Fonctionnels", description: "Permettent des fonctionnalités améliorées et la personnalisation." },
    },
  },
  pl: {
    consentModal: {
      title: "Ustawienia plików cookie",
      description: "Używamy plików cookie, aby zapewnić najlepsze doświadczenie. Wybierz, które pliki cookie chcesz dozwolić.",
    },
    consentNotice: {
      title: "Ustawienia plików cookie",
      description: "Używamy plików cookie do podstawowych funkcji i poprawy Twojego doświadczenia. Dla każdej kategorii możesz wyrazić zgodę lub odmówić. Więcej szczegółów znajdziesz w naszej {privacyPolicy}.",
      learnMore: "Dostosuj",
      changeDescription: "Od ostatniej wizyty nastąpiły zmiany. Prosimy o aktualizację zgody.",
    },
    accept: "Zaakceptuj wszystkie",
    acceptAll: "Zaakceptuj wszystkie",
    decline: "Odrzuć",
    ok: "Zapisz ustawienia",
    save: "Zapisz",
    privacyPolicy: { name: "politykę prywatności", url: "/privacy" },
    purposes: {
      necessary: { title: "Niezbędne", description: "Te pliki cookie są wymagane do podstawowego działania strony." },
      analytics: { title: "Analityczne", description: "Pomagają nam zrozumieć, jak odwiedzający korzystają ze strony." },
      functional: { title: "Funkcjonalne", description: "Umożliwiają ulepszone funkcje i personalizację." },
    },
  },
  pt: {
    consentModal: {
      title: "Definições de cookies",
      description: "Utilizamos cookies para lhe proporcionar a melhor experiência. Escolha quais cookies deseja permitir.",
    },
    consentNotice: {
      title: "Definições de cookies",
      description: "Utilizamos cookies para funções básicas e para melhorar a sua experiência. Para cada categoria, pode optar por aceitar ou recusar. Para mais detalhes, leia a nossa {privacyPolicy}.",
      learnMore: "Personalizar",
      changeDescription: "Houve alterações desde a sua última visita. Atualize o seu consentimento.",
    },
    accept: "Aceitar tudo",
    acceptAll: "Aceitar tudo",
    decline: "Recusar",
    ok: "Guardar definições",
    save: "Guardar",
    privacyPolicy: { name: "política de privacidade", url: "/privacy" },
    purposes: {
      necessary: { title: "Necessários", description: "Estes cookies são essenciais para o funcionamento básico do site." },
      analytics: { title: "Analíticos", description: "Ajudam-nos a compreender como os visitantes utilizam o site." },
      functional: { title: "Funcionais", description: "Permitem funcionalidades melhoradas e personalização." },
    },
  },
  tr: {
    consentModal: {
      title: "Çerez ayarları",
      description: "Size en iyi deneyimi sunmak için çerezler kullanıyoruz. Hangi çerezlere izin vermek istediğinizi seçin.",
    },
    consentNotice: {
      title: "Çerez ayarları",
      description: "Temel işlevler ve deneyiminizi iyileştirmek için çerezler kullanıyoruz. Her kategori için kabul veya reddetmeyi seçebilirsiniz. Daha fazla bilgi için {privacyPolicy} sayfamızı okuyun.",
      learnMore: "Özelleştir",
      changeDescription: "Son ziyaretinizden bu yana değişiklikler oldu. Lütfen onayınızı güncelleyin.",
    },
    accept: "Tümünü kabul et",
    acceptAll: "Tümünü kabul et",
    decline: "Reddet",
    ok: "Ayarları kaydet",
    save: "Kaydet",
    privacyPolicy: { name: "gizlilik politikası", url: "/privacy" },
    purposes: {
      necessary: { title: "Gerekli", description: "Bu çerezler web sitesinin temel işlevleri için gereklidir." },
      analytics: { title: "Analitik", description: "Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur." },
      functional: { title: "İşlevsel", description: "Gelişmiş özellikleri ve kişiselleştirmeyi sağlar." },
    },
  },
};

export function getKlaroConfig(locale: Locale) {
  return {
    version: 1,
    elementID: "klaro",
    storageMethod: "cookie" as const,
    storageName: "klaro-consent",
    mustConsent: true,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    lang: locale,
    translations: { [locale]: translations[locale] },
    services: [
      {
        name: "session",
        purposes: ["necessary"],
        required: true,
      },
      {
        name: "locale",
        purposes: ["necessary"],
        required: true,
      },
      {
        name: "analytics",
        purposes: ["analytics"],
        cookies: [/^_ga/, /^_gid/, /^_pk_/],
        default: false,
      },
      {
        name: "functional",
        purposes: ["functional"],
        default: false,
      },
    ],
  };
}
