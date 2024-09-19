import { PropsWithChildren, Suspense } from 'react'

export default function Layout(props: PropsWithChildren) {
  return <Suspense fallback={<>loading...</>}>{props.children}</Suspense>
}
