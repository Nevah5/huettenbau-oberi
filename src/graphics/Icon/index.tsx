import React from 'react'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

export const Icons = async () => {
  const payload = await getPayload({ config: config })
  const settings = await payload.findGlobal({ slug: 'settings' })

  const lightModeIcon = settings.lightModeIcon as Media
  const darkModeIcon = settings.darkModeIcon as Media

  if (!lightModeIcon?.url || !darkModeIcon?.url) {
    return null
  }

  return (
    <>
      <Image
        src={lightModeIcon.url}
        alt={lightModeIcon.alt || 'Icon'}
        width={lightModeIcon.width || 640}
        height={lightModeIcon.height || 360}
        className={'light-mode-image'}
      />
      <Image
        src={darkModeIcon.url}
        alt={darkModeIcon.alt || 'Icon'}
        width={darkModeIcon.width || 640}
        height={darkModeIcon.height || 360}
        className={'dark-mode-image'}
      />
    </>
  )
}

export default Icons
