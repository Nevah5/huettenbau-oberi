import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import localization from './localization'
import { Locale as PayloadLocale } from 'payload'

export const routing = defineRouting({
  locales: localization.locales.map((locale: PayloadLocale | string) =>
    typeof locale == 'object' ? locale.code : locale,
  ),
  defaultLocale: localization.defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false,
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)

export type Locale = (typeof routing.locales)[number]
