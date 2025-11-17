import { motion } from 'framer-motion'
import { Mail, User, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-t from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold tracking-wider text-blue-600">CONTACT</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">Let’s build something great</h2>
            <p className="mt-4 text-slate-600">Tell me about your goals, timeline, and budget. I’ll reply within 24 hours.</p>
            <div className="mt-8 space-y-4 text-slate-700">
              <p className="flex items-center gap-3"><Mail className="text-blue-600" size={18} /> hello@example.com</p>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700">Name</label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 px-3">
                  <User size={16} className="text-slate-400" />
                  <input type="text" className="w-full h-10 outline-none" placeholder="Your name" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-700">Email</label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 px-3">
                  <Mail size={16} className="text-slate-400" />
                  <input type="email" className="w-full h-10 outline-none" placeholder="you@company.com" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-700">Project Details</label>
              <div className="mt-1 flex items-start gap-2 rounded-lg border border-slate-200 px-3">
                <MessageSquare size={16} className="mt-2 text-slate-400" />
                <textarea rows="5" className="w-full outline-none py-2" placeholder="Tell me about your project..." />
              </div>
            </div>
            <button type="button" className="mt-6 inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
