import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/milestones')({
  component: Milestones,
})

const milestones = [
  {
    date: 'Q1 2023',
    title: 'Project Inception',
    description:
      'RADAR concept developed following clinical observation of low adherence rates in orthopaedic rehabilitation pathways. Initial research proposal submitted and approved.',
  },
  {
    date: 'Q3 2023',
    title: 'Sensor Validation Study Begins',
    description:
      'Commenced validation of inertial measurement unit (IMU) sensors for detecting and classifying prescribed physiotherapy exercises, achieving 92% classification accuracy.',
  },
  {
    date: 'Q1 2024',
    title: 'Platform Prototype Completed',
    description:
      'First working prototype of the RADAR platform connecting wearable devices to a clinical dashboard with real-time adherence visualisation.',
  },
  {
    date: 'Q2 2024',
    title: 'Patient Qualitative Study Published',
    description:
      'Published patient perspectives research in BMC Musculoskeletal Disorders, validating acceptability of wearable adherence monitoring among orthopaedic patients.',
  },
  {
    date: 'Q3 2024',
    title: 'Adaptive Alert Engine Developed',
    description:
      'Designed and evaluated the adaptive alert system, reducing clinically insignificant alerts by 64% while maintaining sensitivity to genuine non-adherence events.',
  },
  {
    date: 'Q4 2024',
    title: 'Platform Architecture Paper Presented',
    description:
      'Presented RADAR system architecture at ACM Conference on Digital Health, covering the end-to-end data pipeline and NHS interoperability design.',
  },
  {
    date: 'Q1 2025',
    title: 'Feasibility Study Completed',
    description:
      'Completed a 40-patient feasibility study demonstrating >95% data completeness and strong correlation between sensor-derived adherence metrics and functional outcomes.',
  },
  {
    date: 'Q2 2025',
    title: 'NHS Trust Pilot Programme Launched',
    description:
      'Opened applications for the free 6-month NHS Trust pilot programme, supporting up to 50 patients per Trust on chosen orthopaedic pathways.',
  },
  {
    date: 'Q2 2026',
    title: 'Multi-Site Expansion',
    description:
      'Planned expansion to additional NHS Trust sites, with enterprise deployment capabilities and advanced analytics suite for multi-site management.',
    upcoming: true,
  },
]

function Milestones() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-950 via-sky-900 to-teal-800 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-teal-400/20 border border-teal-400/40 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Our Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Milestones
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-sky-100">
            Key moments in RADAR's development from research concept to NHS-ready platform.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-200" />

            <div className="space-y-10">
              {milestones.map((milestone, i) => (
                <div key={i} className="relative flex gap-6">
                  <div className="shrink-0 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        milestone.upcoming
                          ? 'bg-sky-100 border-2 border-dashed border-sky-400'
                          : 'bg-teal-100'
                      }`}
                    >
                      <CheckCircle2
                        size={20}
                        className={milestone.upcoming ? 'text-sky-400' : 'text-teal-600'}
                      />
                    </div>
                  </div>
                  <div className="pb-2">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                        milestone.upcoming
                          ? 'text-sky-600 bg-sky-50'
                          : 'text-teal-600 bg-teal-50'
                      }`}
                    >
                      {milestone.date}
                      {milestone.upcoming && ' · Upcoming'}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
