export const locales = ['de', 'en', 'ar', 'es', 'fr', 'pl', 'pt', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';
