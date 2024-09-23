import { PropsWithChildren, Suspense } from 'react'
import Image from 'next/image'
import arexLogo from '@/images/logos/logo.png'

export default function Layout(props: PropsWithChildren) {
  return (
    <Suspense fallback={<>loading...</>}>
      <div className="flex flex-col items-center justify-center p-8">
        <Image
          src={arexLogo}
          alt="arex-logo"
          width={128}
          height={128}
          className="m-4 drop-shadow-xl"
        />
        {props.children}
      </div>
    </Suspense>
  )
}
