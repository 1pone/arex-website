'use client'

import { Text } from '@/components/text'
import { Button } from '@/components/Button'
import { useEffect } from 'react'
import { PageProps } from '@/types'
import { useSearchParams } from 'next/navigation'
import { sendGAEvent } from '@next/third-parties/google'

export default function Login({ params }: PageProps) {
  const searchParams = useSearchParams()
  const openAREX = () => {
    const url = new URL(`arex://invite/${params.to}`)
    searchParams.entries().forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })

    window.open(url.toString())
    sendGAEvent({ event: 'clientInvite', value: params.to })
  }

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
