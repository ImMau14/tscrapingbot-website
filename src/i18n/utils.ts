export const locales = ['en', 'es']
export const defaultLocale = 'en'

type TranslationDictionary = {
  [key: string]: {
    [subKey: string]: string
  }
}

const translationsCache = new Map<string, TranslationDictionary>()

export async function getTranslations(lang: string = defaultLocale): Promise<TranslationDictionary> {
  if (translationsCache.has(lang)) return translationsCache.get(lang)!

  try {
    const translations = (await import(`./langs/${lang}.json`)) as TranslationDictionary
    translationsCache.set(lang, translations)
    return translations
  } catch (error) {
    console.error(`Could not load translations for ${lang}:`, error)
    try {
      const fallback = (await import(`./langs/en.json`)) as TranslationDictionary
      translationsCache.set(lang, fallback)
      return fallback
    } catch (err) { throw new Error('Could not load any language file') }
  }
}
