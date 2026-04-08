import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { ArrowRight, AlertTriangle, Lightbulb, Target } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-950 via-sky-900 to-teal-800 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-teal-400/20 border border-teal-400/40 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            About RADAR
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Closing the Gap Between<br />
            <span className="text-teal-400">Prescription & Practice</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-sky-100">
            RADAR was born from a simple observation: clinicians prescribe rehabilitation,
            but have no way to know if patients follow through at home.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-50 rounded-lg">
              <AlertTriangle size={28} className="text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Problem</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600">
                In orthopaedic care, patient adherence to post-operative rehabilitation and
                physiotherapy programmes is critical to successful outcomes. Yet studies consistently
                show that <strong className="text-slate-900">adherence rates to prescribed home exercise programmes
                can be as low as 30–50%</strong>.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Clinicians currently rely on patient self-reporting during follow-up appointments —
                often weeks apart — to gauge compliance. This creates a dangerous blind spot where
                non-adherence goes undetected until poor outcomes become apparent.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-2xl font-bold text-red-600 mb-1">30–50%</p>
                <p className="text-sm text-slate-600">Typical adherence rate to prescribed home exercise programmes</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-2xl font-bold text-red-600 mb-1">Weeks</p>
                <p className="text-sm text-slate-600">Average gap between follow-up appointments where non-adherence is detected</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-2xl font-bold text-red-600 mb-1">Self-reported</p>
                <p className="text-sm text-slate-600">Primary method clinicians use to assess compliance — prone to recall bias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-4 bg-slate-50 border-t border-b">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-teal-50 rounded-lg">
              <Lightbulb size={28} className="text-teal-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Solution</h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 mt-8 mb-10 max-w-3xl">
            RADAR replaces guesswork with objective, continuous data. By connecting validated
            wearable sensors to an intelligent monitoring platform, we give clinical teams
            real-time visibility into patient adherence — enabling early intervention before
            outcomes are compromised.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-sky-700 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Sense</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Wearable sensors capture objective adherence signals — movement, exercise completion,
                brace usage — throughout the patient's recovery journey.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-teal-700 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Analyse</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                RADAR processes raw sensor data into clinically meaningful adherence metrics,
                identifying patterns and deviations that require attention.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-sky-700 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Act</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Adaptive alerts notify clinical teams when intervention is needed, while patient-facing
                tools encourage sustained engagement with their treatment programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-sky-50 rounded-lg">
              <Target size={28} className="text-sky-700" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Mission</h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 mt-8 max-w-3xl mb-10">
            We believe every patient deserves the best chance of recovery — and every clinician
            deserves the tools to make that happen. RADAR's mission is to make real-time
            adherence monitoring the standard of care in orthopaedic rehabilitation, starting
            with the NHS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
            >
              Explore the Platform <ArrowRight size={18} />
            </Link>
            <Link
              to="/publications"
              className="px-8 py-3 border border-slate-300 hover:border-slate-400 font-semibold rounded-lg transition-colors text-slate-800"
            >
              View Publications
            </Link>
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
