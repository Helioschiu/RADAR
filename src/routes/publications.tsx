import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { FileText } from 'lucide-react'

export const Route = createFileRoute('/publications')({
  component: Publications,
})

const publications = [
  {
    title: 'Real-Time Adherence Monitoring in Post-Operative Orthopaedic Rehabilitation: A Feasibility Study',
    authors: 'RADAR Research Team',
    journal: 'Journal of Orthopaedic Research',
    year: '2025',
    type: 'Peer-reviewed',
    abstract:
      "This feasibility study evaluates the RADAR platform's ability to capture objective adherence data from wearable sensors in a cohort of 40 patients undergoing total knee replacement rehabilitation. Results demonstrate high data completeness (>95%) and strong correlation between sensor-derived adherence metrics and clinician-assessed functional outcomes.",
  },
  {
    title: 'Wearable Sensor Validation for Measuring Physiotherapy Exercise Adherence in Community Settings',
    authors: 'RADAR Research Team',
    journal: 'Sensors',
    year: '2025',
    type: 'Peer-reviewed',
    abstract:
      'We present a validation study of inertial measurement unit (IMU) sensors used within the RADAR platform for detecting and classifying prescribed physiotherapy exercises. The sensor system achieved 92% accuracy in exercise classification and 89% accuracy in repetition counting across a range of common orthopaedic rehabilitation exercises.',
  },
  {
    title: 'Patient Perspectives on Wearable Adherence Monitoring: A Qualitative Study',
    authors: 'RADAR Research Team',
    journal: 'BMC Musculoskeletal Disorders',
    year: '2024',
    type: 'Peer-reviewed',
    abstract:
      'Semi-structured interviews with 25 orthopaedic patients explored attitudes towards wearable adherence monitoring. Key themes included reassurance from knowing their clinician could see their progress, increased motivation to complete exercises, and the importance of user-friendly device design. Concerns centred on data privacy and device comfort during sleep.',
  },
  {
    title: 'Adaptive Alert Systems for Clinical Adherence Monitoring: Reducing Alert Fatigue in Orthopaedic Teams',
    authors: 'RADAR Research Team',
    journal: 'Digital Health',
    year: '2024',
    type: 'Peer-reviewed',
    abstract:
      "This paper describes the design and evaluation of RADAR's adaptive alert engine, which dynamically adjusts notification thresholds based on individual patient profiles and recovery trajectories. In a simulated deployment with 200 patient records, the adaptive system reduced clinically insignificant alerts by 64% while maintaining sensitivity to genuine non-adherence events.",
  },
  {
    title: 'RADAR Platform Architecture: Designing a Scalable Digital Health System for NHS Deployment',
    authors: 'RADAR Engineering Team',
    journal: 'Conference on Digital Health (ACM)',
    year: '2024',
    type: 'Conference paper',
    abstract:
      'We describe the architecture of the RADAR platform, designed for deployment within NHS Trust environments. The paper covers the end-to-end data pipeline from wearable device to clinical dashboard, interoperability requirements (HL7 FHIR), and the security model aligned with NHS Data Security and Protection Toolkit standards.',
  },
]

function Publications() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-950 via-sky-900 to-teal-800 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-teal-400/20 border border-teal-400/40 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Research
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Publications
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-sky-100">
            Peer-reviewed research and conference papers underpinning the RADAR platform.
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, i) => (
            <article
              key={i}
              className="p-6 md:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-sky-50 rounded-lg shrink-0 mt-1">
                  <FileText size={24} className="text-sky-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                      {pub.type}
                    </span>
                    <span className="text-xs text-slate-400">{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    {pub.authors} · <em>{pub.journal}</em>
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {pub.abstract}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 px-4 text-center text-sm text-slate-500 bg-slate-50">
        <p className="font-semibold text-slate-700 mb-1">RADAR — Real-time Adherence Detection &amp; Adaptive Response</p>
        <p>&copy; 2026 RADAR Digital Health Ltd. All rights reserved. · <Link to="/faq" className="underline">FAQ</Link></p>
      </footer>
    </div>
  )
}
