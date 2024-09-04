'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BlurGradientBg } from '@/lib/BlurGradientBg'
import { Container } from '@/components/Container'
import screenshotMainInterface from '@/images/screenshots/main-interface.png'
import screenshotMainInterfaceNoSidebar from '@/images/screenshots/main-interface-no-sidebar.png'

const features = [
  {
    title: 'Quality Assurance',
    description:
      'Automatically capture and convert user scenarios into test cases with AREX. Continuous updates and maintenance of these cases ensure top-notch application quality at release.',
    image: screenshotMainInterface,
  },
  {
    title: 'Cost Saving',
    description:
      'AREX streamlines API quality automation for faster releases, reducing manual test creation and maintenance. Our SaaS solution further cuts costs by eliminating the need for specialized hardware and IT support.',
    image: screenshotMainInterface,
  },
  {
    title: 'Speedy Releases',
    description:
      'With AREX, bypass complex manual testing. Accelerate code deployment by running multiple tests in parallel across cloud infrastructures.',
    image: screenshotMainInterface,
  },
  {
    title: 'Codeless',
    description:
      'AREX enables users to automate API tests without writing code, making it easy for non-technical business users and test engineers alike.',
    image: screenshotMainInterface,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    new BlurGradientBg({
      dom: 'features',
      colors: ['#0d31a2', '#2256c7', '#ffb400', '#0c31a2'],
      loop: true,
    })

    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-[#164be9] pb-12 pt-20 sm:pb-8"
    >
      <Container className="relative z-10">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Real-time Traffic Replication for Effortless Automated Testing.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Empower Your Testing with Automated API Testing and Seamless Traffic
            Replication.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative mr-4 rounded-full px-4 py-1 lg:my-2 lg:rounded-xl lg:p-4',
                        selectedIndex === featureIndex
                          ? 'bg-white backdrop-blur-md lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative left-[-7.1%] top-[-48px] mt-10 w-[114.2%] overflow-hidden rounded-xl bg-transparent lg:top-4 lg:mt-0 lg:w-[60em]">
                      <Image
                        className="w-full"
                        src={screenshotMainInterfaceNoSidebar}
                        alt=""
                        priority
                        sizes="(min-width: 640px) 100vw, 35rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
