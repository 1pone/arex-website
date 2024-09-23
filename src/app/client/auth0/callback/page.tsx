'use client'

import { Button } from '@/components/Button'
import { useCallback, useEffect } from 'react'
import { Text } from '@/components/text'
import Image from 'next/image'
import arexLogo from '@/images/logos/logo.png'
import { Link } from '@/components/Link'
import { copyToClipboard } from '@/lib/copyToClipboard'
import { useSearchParams } from 'next/navigation'

export default function Auth0Callback() {
  const searchParams = useSearchParams()
  const openAREX = useCallback(() => {
    window.open(`arex://auth0/callback?code=${searchParams.get('code')}`)
  }, [searchParams])

  const handleCopyToken = useCallback(() => {
    const code = searchParams.get('code')
    code && copyToClipboard(code)
  }, [searchParams])

  useEffect(() => {
    if (!searchParams.get('error'))
      window.open(`arex://auth0/callback?code=${searchParams.get('code')}`)
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

      {searchParams.get('error') ? (
        <>
          <Text className="text-lg font-semibold">
            {decodeURIComponent(searchParams.get('error_description') || '')}
          </Text>
        </>
      ) : (
        <>
          <Text className="p-4 font-semibold">Redirecting to AREX...</Text>

          <Button onClick={openAREX}> Open AREX Client </Button>

          <Link href="#" onClick={handleCopyToken} className="mt-4">
            Copy authorization token
          </Link>
        </>
      )}
    </div>
  )
}
