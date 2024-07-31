import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'

export function NavLink(props: {
  href: string
  target?: string
  children?: ReactNode
}) {
  return (
    <Link
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      {...props}
    >
      {props.children}
    </Link>
  )
}
