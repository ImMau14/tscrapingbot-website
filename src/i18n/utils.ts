import enJSON from "./langs/en.json"

export type TranslationDictionary = typeof enJSON

export const locales = ["en", "es"]
export const defaultLocale = "en"

export async function getTranslations(lang: string = defaultLocale): Promise<TranslationDictionary> {
  try {
    const translations = (await import(`./langs/${lang}.json`)) as TranslationDictionary

    return translations
  } catch (error) {
    console.error(`Could not load translations for ${lang}:`, error)

    const fallback = (await import(`./langs/en.json`)) as TranslationDictionary

    return fallback
  }
}
