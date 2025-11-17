import { motion } from 'framer-motion'
import { CheckCircle, Layers, Rocket, Wrench } from 'lucide-react'

const skills = [
  { icon: Layers, title: 'Custom Themes', desc: 'Clean, scalable code with advanced ACF and Gutenberg blocks.' },
  { icon: Rocket, title: 'Performance', desc: 'Core Web Vitals focused approach for faster load and better SEO.' },
  { icon: Wrench, title: 'Site Care', desc: 'Hosting, security hardening, backups, and monthly maintenance.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold tracking-wider text-blue-600">ABOUT</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">WordPress expert with a product mindset</h2>
            <p className="mt-4 text-slate-600 leading-7">
              I help startups and agencies ship beautiful, high-performing WordPress sites. I combine a design-first approach with developer rigor—so your site isn’t just stunning, it’s stable, SEO-friendly, and simple to manage.
            </p>
            <ul className="mt-6 space-y-3">
              {['Clean code, semantic HTML, accessible UI','WooCommerce setups that scale','Figma → WordPress with zero pixel drift','PageSpeed 90+ scores without hacks'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="text-green-600 shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {skills.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="text-blue-600" />
                <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
