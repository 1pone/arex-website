'use client'

import { Button } from '@/components/Button'
import { useCallback, useEffect } from 'react'
import { Text } from '@/components/text'
import Image from 'next/image'
import arexLogo from '@/images/logos/logo.png'
import { Link } from '@/components/Link'
import { copyToClipboard } from '@/lib/copyToClipboard'
import { PageProps } from '@/types'

export default function Auth0Callback({ searchParams }: PageProps) {
  const openAREX = useCallback(() => {
    window.open(`arex://auth0/callback?code=${searchParams.code}`)
  }, [searchParams])

  function handleCopyToken() {
    const code = searchParams.code
    code && copyToClipboard(code)
  }

  useEffect(() => {
    window.open(`arex://auth0/callback?code=${searchParams.code}`)
  }, [searchParams])

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Image
        src={arexLogo}
        alt="arex-logo"
        width={128}
        height={128}
        className="m-4 drop-shadow-xl"
      />

      <Text className="p-4 font-semibold">Redirecting to AREX...</Text>

      <Button onClick={openAREX}> Open AREX Client </Button>

      <Link href="#" onClick={handleCopyToken} className="mt-4">
        Copy authorization token
      </Link>
    </div>
  )
}
