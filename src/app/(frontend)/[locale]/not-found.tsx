import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  const t = useTranslations()

  return (
    <div className="container py-28">
      <div className="prose max-w-none">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p className="mb-4">{t('page-not-found')}</p>
      </div>
      <Button asChild variant="default">
        <Link href="/">{t('go-back-home')}</Link>
      </Button>
    </div>
  )
}
