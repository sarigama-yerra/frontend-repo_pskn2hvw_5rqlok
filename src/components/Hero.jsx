import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/70 backdrop-blur px-3 py-1 rounded-full w-max border border-slate-200">
            WordPress Developer • Modern UI • Performance First
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            I build fast, flexible WordPress websites that convert
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl">
            From custom themes to powerful page builders, I craft pixel-perfect experiences that are easy to manage and a joy to use.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-sm border border-slate-200 hover:bg-slate-50">
              Get a Quote
            </a>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            Trusted for: Elementor, Gutenberg, WooCommerce, ACF, SEO, Performance
          </div>
        </motion.div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
