import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'
import clsx from 'clsx'

export function NavLink(props: {
  href: string
  target?: string
  className?: string
  children?: ReactNode
}) {
  return (
    <Link
      {...props}
      className={clsx(
        'inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900',
        props.className,
      )}
    >
      {props.children}
    </Link>
  )
}
