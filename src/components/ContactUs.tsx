'use client'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Button } from './Button'
import { ReactNode } from 'react'

export default function ContactUs() {
  return (
    <div className="fixed bottom-20 right-2 z-[100] m-4 sm:right-2">
      <Popover className="relative">
        <PopoverButton
          as={Button}
          className="opacity-50 transition-opacity duration-300 hover:opacity-100 data-[open]:opacity-100 hover:[&>#button-wave]:opacity-100"
        >
          <div
            id="button-wave"
            className="left-50% top-50% absolute h-5 w-14 animate-ping rounded-full border border-cyan-500 opacity-0"
          />
          Contact Us
        </PopoverButton>
        <PopoverPanel anchor="bottom">
          <div className="flex flex-col gap-4 py-4 pl-4 sm:flex-row">
            <Card
              title="Chat with Sales"
              description="Talk to us for more information about features, sizing, support plans, and consulting."
              action={{
                title: 'Chat now',
                onClick: () => {
                  const email = 'arex.test.com@gmail.com'
                  const subject = encodeURIComponent('Inquiry about AREX')
                  const body = encodeURIComponent(
                    'Hello, I would like to know more about AREX...',
                  )
                  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
                },
              }}
            />

            <Card
              title="Product Support"
              description="Having trouble with AREX? Looking to report a bug? We are here to help."
              action={{
                title: 'Chat with Support',
                onClick: () => {
                  window.open('https://arexcommunity.slack.com', '_blank')
                },
              }}
            />
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  )
}

function Card({
  title,
  description,
  action,
}: {
  title?: string
  description?: string
  action?: { title: string; onClick: () => void }
}) {
  return (
    <div className="z-[100] mr-2 w-64 rounded-lg border border-gray-200 bg-white/50 p-4 shadow-lg backdrop-blur-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-5 text-gray-700">{description}</p>
      {action && (
        <Button onClick={action.onClick} className="float-right mt-2">
          {action.title}
        </Button>
      )}
    </div>
  )
}
