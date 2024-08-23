import { Container } from '@/components/Container'
import clsx from 'clsx'

import feature_capture_1 from '@/images/screenshots/feature_capture_1.png'
import feature_capture_2 from '@/images/screenshots/feature_capture_2.png'
import feature_replay_1 from '@/images/screenshots/feature_replay_1.png'
import feature_replay_2 from '@/images/screenshots/feature_replay_2.png'
import feature_analyze_1 from '@/images/screenshots/feature_analyze_1.png'
import feature_analyze_2 from '@/images/screenshots/feature_analyze_2.png'
import Image from 'next/image'

const secondaryFeaturesData = [
  {
    segment: 'Capture',
    color: 'bg-[#3264FF]',
    waterWaveColor: 'bg-blue-100',
    features: [
      {
        title: 'High Coverage Without Writing Tests',
        description:
          'Simply integrate AREX Agent into your application to automatically capture API calls as test cases.',
        img: feature_capture_1,
      },
      {
        title: 'Mock third party dependencies',
        description:
          'Record dependencies like DBs, redis, third-party services as mocks for more reliable, affordable testing.',
        img: feature_capture_2,
      },
    ],
  },
  {
    segment: 'Replay',
    color: 'bg-[#FFB400]',
    waterWaveColor: 'bg-amber-100',
    features: [
      {
        title: 'Data Security Assurance',
        description:
          'Provides granular permission control and automatic traffic desensitization to enhance your data security.',
        img: feature_replay_1,
      },
      {
        title: 'Automate Testing with Mocks',
        description:
          'Intercept and respond to third-party service calls with pre-recorded data, ensuring a rapid and reliable testing experience without the setup of test environment.',
        img: feature_replay_2,
      },
    ],
  },
  {
    segment: 'Analyze',
    color: 'bg-[#65a30d]',
    waterWaveColor: 'bg-lime-100',
    features: [
      {
        title: 'Intelligent Test Reporting',
        description:
          'AREX will compare the API response to the previously captured response and a report will be generated, identifying potential code bugs through response discrepancies.',
        img: feature_analyze_1,
      },
      {
        title: 'Accurate Noise Detection',
        description:
          'AREX identifies noisy fields in the responses accurately like ( timestamps, random values) to ensure high quality tests.',
        img: feature_analyze_2,
      },
    ],
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="sticky top-0 z-20 w-full py-6 backdrop-blur">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-2xl tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Effortless Testing Solutions for Seamless Operations
            </h2>
            <p className="mt-2 text-lg/7 tracking-tight text-slate-700">
              Streamline your testing process with AREX, the innovative solution
              that replicates real online traffic for effortless and accurate
              API testing.
            </p>
          </div>
        </div>

        <div className="relative">
          {secondaryFeaturesData.map((item) => (
            <section
              key={item.segment}
              className="flex flex-col justify-between lg:flex-row"
            >
              <div className="relative m-8 lg:order-1 lg:h-[calc(100vh-320px)]">
                <div className="relative flex h-full items-center justify-center">
                  <div
                    className={clsx(
                      'absolute left-[calc(50%-4rem)] top-[calc(50%-4rem)] z-0 mb-8 h-36 w-36 animate-wave rounded-full lg:top-[calc(50%-64px)]',
                      item.waterWaveColor,
                    )}
                  />
                  <h3
                    className={clsx(
                      'relative z-10 ml-5 mt-4 flex h-28 w-28 items-center justify-center rounded-full p-2 font-display text-xl tracking-tight text-white sm:text-2xl',
                      item.color,
                    )}
                  >
                    {item.segment}
                  </h3>
                </div>
              </div>

              {item.features.map((feature, index) => (
                <div
                  key={index}
                  className={clsx(
                    'flex justify-around',
                    index === 1 && 'mb-8 items-end lg:order-2',
                  )}
                >
                  <div className="flex flex-col items-center">
                    <div className="max-w-96 pb-2 pt-12 font-bold">
                      {feature.title}
                    </div>
                    <div className="max-w-80 pb-4 text-base leading-tight text-slate-500 sm:max-w-96">
                      {feature.description}
                    </div>
                    <Image
                      src={feature.img}
                      width={1200}
                      height={800}
                      className="w-[360px] rounded-lg border border-gray-200 shadow-md sm:w-[450px] xl:w-[480px]"
                      alt="feature_image"
                    />
                  </div>
                </div>
              ))}
            </section>
          ))}

          <div className="absolute left-1/2 top-14 z-[-1] h-full border-l-[1rem] border-dotted border-gray-200 lg:left-[calc(50%+4px)]"></div>
        </div>
      </Container>
    </section>
  )
}
