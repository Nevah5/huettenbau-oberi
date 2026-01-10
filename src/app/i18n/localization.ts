import { LocalizationConfig } from 'payload'

const localization: LocalizationConfig = {
  defaultLocale: 'de',
  locales: [
    {
      code: 'de',
      label: 'Deutsch',
    },
    {
      code: 'en',
      label: 'English',
    },
  ],
  fallback: true,
  defaultLocalePublishOption: 'active',
}

export default localization
