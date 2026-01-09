import React from 'react'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

export const Logos = async () => {
  const payload = await getPayload({ config: config })
  const settings = await payload.findGlobal({ slug: 'settings' })

  const lightModeLogo = settings.lightModeLogo as Media
  const darkModeLogo = settings.darkModeLogo as Media

  if (!lightModeLogo?.url || !darkModeLogo?.url) {
    return (
      <div>
        <p>Logo not found. Please upload logos in the settings.</p>
      </div>
    )
  }

  return (
    <>
      <Image
        src={lightModeLogo.url}
        alt={lightModeLogo.alt || 'Logo'}
        width={lightModeLogo.width || 640}
        height={lightModeLogo.height || 360}
        className={'light-mode-image'}
      />
      <Image
        src={darkModeLogo.url}
        alt={darkModeLogo.alt || 'Logo'}
        width={darkModeLogo.width || 640}
        height={darkModeLogo.height || 360}
        className={'dark-mode-image'}
      />
    </>
  )
}

export default Logos
