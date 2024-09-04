'use client'

import Plan from '@/components/Plan'

export default function EnterprisePlan() {
  return (
    <Plan
      name="Enterprise"
      price="Custom"
      description="For even the biggest enterprise companies."
      href="/register"
      onClick={() => {
        const email = 'arex.test.com@gmail.com'
        const subject = encodeURIComponent(
          'Inquiry about AREX price for enterprise',
        )
        const body = encodeURIComponent(
          'Hello, I would like to know more about AREX...',
        )
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
      }}
      features={[
        'Unlimited traffic',
        'Unlimited member user',
        '24/7 Technical Support',
      ]}
    />
  )
}
