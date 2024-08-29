import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.png'

const faqs = [
  [
    {
      question: 'Can AREX support all types of APIs?',
      answer:
        'AREX primarily supports RESTful APIs, which are the most common type. It also has support for other types, like SOAP and GraphQL, but the level of support may vary depending on the specific API framework. ',
    },
    {
      question: 'How does AREX handle sensitive data?',
      answer: 'AREX provides data masking and redaction capabilities. This allows you to specify sensitive data fields that need to be obfuscated during capture and execution, protecting sensitive information. ',
    },
    {
      question: ' Does AREX require code modification to be used?',
      answer:
        'No, AREX is designed to be agent-based, so it doesn\'t require any code changes. The Java agent simply needs to be attached to your application.',
    },
  ],
  [
    {
      question: 'Does AREX support testing write operations?',
      answer:
        'Yes, AREX supports testing write operations to databases, message queues, Redis, and other systems. It ensures that the data is validated and cleaned up correctly to avoid contaminating the test environment.',
    },
    {
      question:
        'Can AREX generate test cases in different formats?',
      answer:
        'Yes, AREX allows you to export test cases in multiple formats, including Postman collections, cURL commands, but it will be provided such as  JUnit tests for easier integration with different testing frameworks.',
    },
    {
      question:
        'How does AREX integrate with existing testing frameworks?',
      answer:
        'AREX will be integrated with popular frameworks like JUnit, TestNG, and Selenium through its API. It allows you to trigger tests, access results, and manage data within your existing workflows. ',
    },
  ],
  [
    {
      question: 'How is the performance of AREX?',
      answer:
        'AREX has been designed for performance, leveraging technologies like Redis for fast data retrieval and efficient processing. However, the actual performance depends on factors like application size, data volume, and the complexity of your API.',
    },
    {
      question: 'Does AREX offer learning resources?',
      answer: 'Yes, AREX provides comprehensive documentation, tutorials, and community support to help users get started and utilize the platform effectively. ',
    },
    {
      question: 'What is the pricing of AREX?',
      answer:
        'AREX offers different pricing plans based on the features and usage requirements. You can find detailed information on the price panel or contact our sales team.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-0 top-0 max-w-none"
        src={backgroundImage}
        alt=""
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
