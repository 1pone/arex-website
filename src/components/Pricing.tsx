import { Container } from '@/components/Container'
import { URL_AREX_CONSOLE } from '@/constant'
import SwirlyDoodle from '@/components/SwirlyDoodle'
import Plan from './Plan'
import SmallBusinessPlan from '@/components/SmallBusinessPlan'
import EnterprisePlan from '@/components/EnterprisePlan'

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-[#091e5d] py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-[#FFB400]" />
              <span className="relative">Simple pricing,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Starter"
            price="$0"
            description="Good for anyone who is self-employed and just getting started."
            href={URL_AREX_CONSOLE}
            features={['100G Traffic', '10 Member user limit', '1 Year trial']}
          />
          <SmallBusinessPlan />
          <EnterprisePlan />
        </div>
      </Container>
    </section>
  )
}
