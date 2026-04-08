import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

const faqs = [
  {
    question: 'What is RADAR?',
    answer:
      'RADAR (Real-time Adherence Detection & Adaptive Response) is a digital health platform designed for orthopaedic care. It uses validated wearable sensors to monitor patient adherence to treatment regimens — including post-operative rehabilitation, physiotherapy exercise programmes, and medication schedules — in real time, enabling clinicians to intervene early when adherence drops.',
  },
  {
    question: 'Which orthopaedic pathways does RADAR support?',
    answer:
      'RADAR is currently validated for use across total knee and hip replacement rehabilitation, ACL reconstruction post-operative monitoring, spinal surgery recovery, and upper limb orthopaedic pathways. The platform is configurable for other pathways — please contact our clinical team to discuss your specific requirements.',
  },
  {
    question: 'How does the NHS Trust free trial work?',
    answer:
      'Eligible NHS Trusts receive a full 6-month pilot deployment of the RADAR platform at no cost, including onboarding, staff training, and dedicated implementation support. The trial covers up to 50 patients on your chosen orthopaedic pathway. At the end of the pilot, we provide a clinical outcomes report to support your procurement business case.',
  },
  {
    question: 'What wearable devices does RADAR integrate with?',
    answer:
      'RADAR supports a range of CE-marked orthopaedic wearables, including inertial measurement units (IMUs) for movement and gait analysis, smart bracing with embedded sensors, pressure insoles, and connected medication dispensers. We work with leading device partners and can advise on the most appropriate hardware for your pathway.',
  },
  {
    question: 'How is patient data protected?',
    answer:
      'RADAR is built to NHS Data Security and Protection Toolkit standards and is fully GDPR compliant. All data is encrypted end-to-end, both in transit and at rest. The platform is hosted on UK-based, NHS-approved cloud infrastructure. Role-based access controls and comprehensive audit logs ensure only authorised clinicians can access patient data.',
  },
  {
    question: 'Can RADAR integrate with our existing EPR or EHR system?',
    answer:
      'Yes. RADAR supports HL7 FHIR R4 for interoperability with major EPR and EHR systems used across the NHS, including EPIC, System C (Medway), and TPP SystmOne. Our integration team will work with your informatics colleagues to establish secure data flows during onboarding.',
  },
  {
    question: 'How is pricing structured for clinical research groups?',
    answer:
      'Pricing for research studies is project-based and depends on study duration, participant numbers, and required data outputs. We align pricing with standard research funding models and can provide quotations compatible with NIHR, MRC, and industry-sponsored grant applications. Contact us to receive a tailored quote and supporting documentation for your ethics submission.',
  },
  {
    question: 'What training and support is provided?',
    answer:
      'All deployments include an onboarding programme covering clinical setup, device configuration, and dashboard training. NHS Trust pilots receive a dedicated implementation manager. Ongoing support is available via our clinical helpdesk (Monday–Friday, 8am–6pm). Enterprise customers receive 24/7 support with a guaranteed SLA.',
  },
  {
    question: 'Is RADAR approved as a medical device?',
    answer:
      'RADAR is CE-marked as Class IIa medical device software under the EU MDR, which continues to apply in Great Britain through the UKCA marking framework. Our software development and quality management processes are certified to ISO 13485. Clinical validation data is available on request.',
  },
  {
    question: 'How do patients interact with the platform?',
    answer:
      'Patients use a companion mobile app (iOS and Android) that receives data from their wearable device, displays their adherence progress, and delivers personalised reminders and educational content. The app is designed for accessibility and does not require patients to interpret clinical data — it simply guides them through their programme.',
  },
]

function FAQ() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Support
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
          Frequently Asked Questions
        </h1>
        <p className="mb-14 max-w-xl text-slate-600">
          Common questions from NHS clinical teams and research groups about the
          RADAR platform. Can&apos;t find what you need?{' '}
          <a href="#nhs-trial" className="text-sky-700 underline">
            Get in touch
          </a>
          .
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Accordion key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-medium text-lg text-slate-900">{question}</span>
        <ChevronDown
          size={20}
          className={`text-slate-400 transition-transform shrink-0 ml-4 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 leading-relaxed text-slate-600">{answer}</div>
      )}
    </div>
  )
}
