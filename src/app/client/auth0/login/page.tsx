'use client'

import { Text } from '@/components/text'
import { Button } from '@/components/Button'
import { useEffect } from 'react'

export default function Login() {
  const openAREX = () => window.open(`arex://auth0/login`)

  useEffect(() => {
    openAREX()
  }, [])

  return (
    <>
      <Text className="p-4 font-semibold">Redirecting to AREX...</Text>

      <Button onClick={openAREX}> Open AREX Client </Button>
    </>
  )
}
