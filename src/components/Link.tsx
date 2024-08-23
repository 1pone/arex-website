import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import NextLink, { type LinkProps } from 'next/link'
import React, { forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  const { className, ...restProps } = props
  return (
    <Headless.DataInteractive>
      <NextLink
        className={clsx(
          'text-base/6 text-zinc-500 hover:text-zinc-700 sm:text-sm/6',
          className,
        )}
        {...restProps}
        ref={ref}
      />
    </Headless.DataInteractive>
  )
})
