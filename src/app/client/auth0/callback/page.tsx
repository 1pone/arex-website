'use client'

import { Button } from '@/components/Button'
import { useParams, useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { Text } from '@/components/text'
import Image from 'next/image'
import arexLogo from '@/images/logos/logo.png'
import { Link } from '@/components/Link'
import { copyToClipboard } from '@/lib/copyToClipboard'

export default function ClientPage() {
  const params = useSearchParams()
  const { action } = useParams()

  const openAREX = useCallback(() => {
    window.open(`arex://auth0/callback?code=${params.get('code')}`)
  }, [params])

  function handleCopyToken() {
    const code = params.get('code')
    code && copyToClipboard(code)
  }

  useEffect(() => {
    openAREX()
  }, [])

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
