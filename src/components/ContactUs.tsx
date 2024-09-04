'use client'

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Button } from "./Button";
import { ReactNode } from "react";

export default function ContactUs() {
  return (
    <div className="fixed bottom-8 right-4 m-4 z-50">
      <Popover className="relative ">
        <PopoverButton as={Button} className='opacity-50 hover:opacity-100 data-[open]:opacity-100 transition-opacity duration-300'  >Contact Us</PopoverButton>
        <PopoverPanel anchor="bottom" className="flex gap-4">
          <Card 
            title="Chat with Sales" 
            description="Talk to us for more information about features, sizing, support plans, and consulting." 
            action={{
              title: "Chat now",
              onClick: () => {
                const email = 'arex.test.com@gmail.com';
                const subject = encodeURIComponent('Inquiry about AREX');
                const body = encodeURIComponent('Hello, I would like to know more about AREX...');
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
              }
            }} 
          />

          <Card title="Product Support" description="Having trouble with AREX? Looking to report a bug? We are here to help." action={{
            title: "Chat with Support",
            onClick: () => {
              window.open("https://arexcommunity.slack.com", "_blank");
            }
          }} />
        </PopoverPanel>
      </Popover>
    </div>
  )
}

function Card({ title, description, action }: { title?: string, description?: string, action?: { title: string, onClick: () => void } }) {
  return (
    <div className="p-4 w-64 rounded-lg shadow-lg backdrop-blur-md bg-white/50 border border-gray-200 z-50 mr-2 mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-700 leading-5">{description}</p>
      {action && <Button onClick={action.onClick} className="float-right mt-2">{action.title}</Button>}
    </div>
  )
}