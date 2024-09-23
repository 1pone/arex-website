'use client'

import Image from 'next/image'
import arexLogo from '@/images/logos/logo.png'
import { Text } from '@/components/text'
import { Button } from '@/components/Button'
import { useEffect } from 'react'

export default function Login() {
  const openAREX = () => window.open(`arex://auth0/login`)

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

      <>
        <Text className="p-4 font-semibold">Redirecting to AREX...</Text>

        <Button onClick={openAREX}> Open AREX Client </Button>
      </>
    </div>
  )
}
