'use client'

import Plan from '@/components/Plan'

export default function SmallBusinessPlan() {
  return (
    <Plan
      featured
      name="Small business"
      price="Custom"
      description="Perfect for small / medium sized businesses."
      href="/register"
      onClick={() => {
        const email = 'arex.test.com@gmail.com'
        const subject = encodeURIComponent(
          'Inquiry about AREX price for small business',
        )
        const body = encodeURIComponent(
          'Hello, I would like to know more about AREX...',
        )
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
      }}
      features={['500G Traffic per month', '200 Member user limit']}
    />
  )
}
