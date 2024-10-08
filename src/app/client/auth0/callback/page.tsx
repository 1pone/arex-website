'use client'

import { Button } from '@/components/Button'
import { useCallback, useEffect } from 'react'
import { Text } from '@/components/text'
import { Link } from '@/components/Link'
import { copyToClipboard } from '@/lib/copyToClipboard'
import { useSearchParams } from 'next/navigation'

export default function Auth0Callback() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const error = searchParams.get('error')

  const openAREX = () => {
    {
      const url = new URL('arex://auth0/callback')
      code && url.searchParams.append('code', code)
      state && url.searchParams.append('state', state)

      window.open(url.toString())
    }
  }

  const handleCopyToken = useCallback(() => {
    if (code) {
      if (!state) {
        // 兼容旧版 electron auth0 登录逻辑
        copyToClipboard(code)
      } else {
        // 新版 auth0-spa-js 登录逻辑
        const sp = new URLSearchParams()
        sp.append('code', code)
        sp.append('state', state)
        copyToClipboard(sp.toString())
      }
    }
  }, [searchParams])

  useEffect(() => {
    if (!error) openAREX()
  }, [])

  return (
    <>
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
    </>
  )
}
