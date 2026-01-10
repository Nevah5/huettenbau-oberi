import { Locale, LocalizationConfig } from 'payload'

const localeSlugs = {
  en: 'home',
  de: 'startseite',
}

const locales: Locale[] = [
  {
    code: 'de',
    label: 'Deutsch',
  },
  {
    code: 'en',
    label: 'English',
  },
]

const localization: LocalizationConfig = {
  defaultLocale: 'de',
  locales,
  fallback: true,
  defaultLocalePublishOption: 'active',
}

export { locales, localeSlugs }

export default localization
