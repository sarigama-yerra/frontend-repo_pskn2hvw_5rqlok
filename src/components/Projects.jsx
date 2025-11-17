import { motion } from 'framer-motion'
import { ExternalLink, WordPress } from 'lucide-react'

const projects = [
  {
    title: 'SaaS Marketing Site',
    tags: ['Gutenberg', 'ACF', 'Animations'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Creative Studio',
    tags: ['Elementor', 'Custom Widgets', 'GSAP'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Ecommerce Store',
    tags: ['WooCommerce', 'Stripe', 'SEO'],
    link: '#',
    cover: 'https://images.unsplash.com/photo-1528880931885-5b7bf0a6d39f?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-blue-600">PROJECTS</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">Selected work</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
            Hire me <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-blue-600">
                  <WordPress size={18} />
                  <span className="text-xs font-semibold">WordPress</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
