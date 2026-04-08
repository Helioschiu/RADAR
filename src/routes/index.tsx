import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import {
  Activity,
  Wifi,
  Bell,
  ArrowRight,
  CheckCircle2,
  Building2,
  FlaskConical,
  Clock,
  LineChart,
  Cpu,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-950 via-sky-900 to-teal-800 text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_white_1px,_transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block bg-teal-400/20 border border-teal-400/40 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Digital Health Platform · Orthopaedic Care
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Real-Time Adherence.<br />
            <span className="text-teal-400">Better Outcomes.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-sky-100">
            RADAR monitors patient treatment adherence in real time using wearable sensors,
            enabling clinicians to intervene early and improve recovery across orthopaedic pathways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#nhs-trial"
              className="inline-flex items-center gap-2 px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg transition-colors"
            >
              Apply for NHS Trial <ArrowRight size={18} />
            </a>
            <Link
              to="/faq"
              className="px-8 py-3 border border-white/40 hover:border-white/70 font-semibold rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Built for those who care
          </h2>
          <p className="text-center mb-14 max-w-xl mx-auto text-slate-600">
            RADAR supports both frontline clinical teams and research organisations
            with tools tailored to their workflows.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <AudienceCard
              icon={<Building2 size={32} className="text-sky-700" />}
              title="NHS Trusts & Healthcare Providers"
              description="Deploy RADAR across your orthopaedic department to monitor patient adherence to post-operative rehabilitation, physiotherapy, and medication regimens — all without increasing clinical workload."
              bullets={[
                'Real-time dashboard for ward and community teams',
                'Automated alerts for non-adherence or adverse signals',
                'Integration with existing EPR/EHR systems via HL7 FHIR',
                'Free 6-month pilot programme for NHS Trusts',
              ]}
              cta="Apply for Free NHS Trial"
              ctaHref="#nhs-trial"
              accent="sky"
            />
            <AudienceCard
              icon={<FlaskConical size={32} className="text-teal-700" />}
              title="Clinical Research Groups"
              description="Power your orthopaedic clinical trials with objective, continuous adherence data. Replace self-reported outcomes with sensor-validated measurements that strengthen your evidence base."
              bullets={[
                'Validated adherence metrics for RCTs and observational studies',
                'Exportable datasets in standard formats (CSV, FHIR, CDISC)',
                'Customisable alert thresholds per protocol',
                'Project-based pricing aligned to study duration',
              ]}
              cta="Discuss Research Pricing"
              ctaHref="#pricing"
              accent="teal"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-50 border-t border-b">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Platform capabilities
          </h2>
          <p className="text-center mb-14 max-w-xl mx-auto text-slate-600">
            From sensor to clinical action — RADAR closes the loop on treatment adherence
            with a fully integrated, evidence-driven platform.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Cpu size={28} className="text-sky-700" />}
              title="Wearable Sensor Integration"
              description="Connects with validated orthopaedic wearables — including inertial measurement units, pressure sensors, and smart bracing — to capture objective adherence signals throughout the patient pathway."
            />
            <FeatureCard
              icon={<Activity size={28} className="text-sky-700" />}
              title="Real-Time Monitoring"
              description="Live adherence dashboards give clinical teams immediate visibility over patient populations. Trend analysis and configurable time-window summaries support both acute and community care settings."
            />
            <FeatureCard
              icon={<Bell size={28} className="text-sky-700" />}
              title="Adaptive Alerts"
              description="Intelligent alert logic surfaces only clinically meaningful deviations, reducing alert fatigue. Thresholds adapt to individual patient profiles and recovery stage, ensuring timely and relevant notifications."
            />
            <FeatureCard
              icon={<LineChart size={28} className="text-sky-700" />}
              title="Outcomes Analytics"
              description="Longitudinal adherence data is linked to functional outcomes, enabling Trusts and research teams to demonstrate clinical and economic value through robust, audit-ready reporting."
            />
            <FeatureCard
              icon={<Wifi size={28} className="text-sky-700" />}
              title="Seamless Connectivity"
              description="Bluetooth Low Energy device pairing, cellular fallback, and offline sync ensure data continuity regardless of patient location — at home, in clinic, or during physiotherapy sessions."
            />
            <FeatureCard
              icon={<Clock size={28} className="text-sky-700" />}
              title="Patient Engagement Tools"
              description="Companion mobile app delivers personalised exercise reminders, adherence progress feedback, and educational content, improving motivation without requiring clinician time."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Transparent, mission-aligned pricing
          </h2>
          <p className="text-center mb-14 max-w-xl mx-auto text-slate-600">
            We believe digital health innovation should be accessible. Our pricing
            reflects the realities of NHS procurement and research funding.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <PricingCard
              name="NHS Trust Pilot"
              price="Free"
              period="6-month trial"
              description="For NHS Trusts evaluating RADAR for departmental deployment."
              features={[
                'Up to 50 patients',
                'Full platform access',
                'Onboarding & training',
                'Dedicated implementation support',
                'NHS DSP Toolkit documentation',
                'Clinical outcomes reporting',
              ]}
              cta="Apply for Trial"
              ctaHref="#nhs-trial"
            />
            <PricingCard
              name="Research Study"
              price="Project-based"
              period="per study"
              description="For clinical research groups running trials with adherence outcomes."
              features={[
                'Unlimited study participants',
                'Protocol-specific configuration',
                'CDISC / FHIR data export',
                'Ethics documentation support',
                'Statistical analysis exports',
                'Priority support & SLA',
              ]}
              cta="Request a Quote"
              ctaHref="#nhs-trial"
              highlighted
            />
            <PricingCard
              name="Enterprise Deployment"
              price="Custom"
              period="annual licence"
              description="For Trusts and health systems deploying RADAR at scale."
              features={[
                'Unlimited patients & users',
                'EPR / EHR integration',
                'Multi-site management',
                'Dedicated account manager',
                'Advanced analytics suite',
                'SLA guarantee & 24/7 support',
              ]}
              cta="Talk to Our Team"
              ctaHref="#nhs-trial"
            />
          </div>
        </div>
      </section>

      {/* NHS Trial CTA */}
      <section id="nhs-trial" className="py-20 px-4 bg-gradient-to-br from-sky-950 to-teal-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-teal-400/20 border border-teal-400/40 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            NHS Free Trial Programme
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your orthopaedic pathway?
          </h2>
          <p className="text-sky-100 mb-10 max-w-xl mx-auto">
            Apply for the RADAR NHS Trust free trial. Our clinical implementation team
            will contact you within 2 working days to discuss your pathway and eligibility.
          </p>
          <form className="max-w-lg mx-auto space-y-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-sky-200 mb-1">First name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
                  placeholder="Dr. Jane"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-200 mb-1">Last name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-200 mb-1">NHS Trust / Organisation</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
                placeholder="e.g. Oxford University Hospitals NHS Foundation Trust"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-200 mb-1">Work email</label>
              <input
                type="email"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400"
                placeholder="j.smith@nhs.net"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-200 mb-1">Role</label>
              <select className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-teal-400 appearance-none">
                <option value="" className="text-slate-800">Select your role…</option>
                <option value="consultant" className="text-slate-800">Consultant Orthopaedic Surgeon</option>
                <option value="physio" className="text-slate-800">Physiotherapist / AHP</option>
                <option value="clinical-lead" className="text-slate-800">Clinical Lead / Director</option>
                <option value="research" className="text-slate-800">Clinical Researcher</option>
                <option value="digital-health" className="text-slate-800">Digital Health / Informatics</option>
                <option value="other" className="text-slate-800">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-200 mb-1">Tell us about your pathway (optional)</label>
              <textarea
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 resize-none"
                placeholder="e.g. TKR rehabilitation, ACL reconstruction post-op monitoring…"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Submit Application <ArrowRight size={18} />
            </button>
            <p className="text-xs text-sky-300 text-center">
              By submitting, you agree to RADAR's privacy policy. We never share your data with third parties.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 px-4 text-center text-sm text-slate-500 bg-slate-50">
        <p className="font-semibold text-slate-700 mb-1">RADAR — Real-time Adherence Detection &amp; Adaptive Response</p>
        <p>&copy; 2026 RADAR Digital Health Ltd. All rights reserved. · <Link to="/faq" className="underline">FAQ</Link></p>
        <p className="mt-2 text-xs text-slate-400">
          RADAR is a CE-marked medical device software. Always follow clinical guidelines and professional judgement when making patient care decisions.
        </p>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
      <div className="mb-4 p-2 inline-block bg-sky-50 rounded-lg">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-slate-900">{title}</h3>
      <p className="leading-relaxed text-slate-600">{description}</p>
    </div>
  )
}

function AudienceCard({
  icon,
  title,
  description,
  bullets,
  cta,
  ctaHref,
  accent,
}: {
  icon: React.ReactNode
  title: string
  description: string
  bullets: string[]
  cta: string
  ctaHref: string
  accent: 'sky' | 'teal'
}) {
  const borderClass = accent === 'sky' ? 'border-sky-200' : 'border-teal-200'
  const bgClass = accent === 'sky' ? 'bg-sky-50' : 'bg-teal-50'
  const btnClass =
    accent === 'sky'
      ? 'bg-sky-700 hover:bg-sky-600 text-white'
      : 'bg-teal-700 hover:bg-teal-600 text-white'
  const checkClass = accent === 'sky' ? 'text-sky-600' : 'text-teal-600'

  return (
    <div className={`p-8 rounded-xl border-2 ${borderClass} ${bgClass}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-8">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
            <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${checkClass}`} />
            {b}
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-colors ${btnClass}`}
      >
        {cta} <ArrowRight size={16} />
      </a>
    </div>
  )
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  ctaHref,
  highlighted,
}: {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`p-6 rounded-xl border flex flex-col ${
        highlighted
          ? 'border-teal-500 border-2 shadow-lg shadow-teal-100'
          : 'border-slate-200'
      } bg-white`}
    >
      {highlighted && (
        <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-semibold mb-1 text-slate-900">{name}</h3>
      <p className="text-3xl font-bold mb-0.5 text-slate-900">{price}</p>
      <p className="text-sm text-slate-400 mb-3">{period}</p>
      <p className="text-sm text-slate-600 mb-6">{description}</p>
      <ul className="space-y-2 text-sm flex-1 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-slate-700">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-teal-500" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={`w-full py-2.5 rounded-lg border font-semibold text-center block transition-colors ${
          highlighted
            ? 'bg-teal-600 hover:bg-teal-500 text-white border-teal-600'
            : 'border-slate-300 hover:border-slate-400 text-slate-800'
        }`}
      >
        {cta}
      </a>
    </div>
  )
}
