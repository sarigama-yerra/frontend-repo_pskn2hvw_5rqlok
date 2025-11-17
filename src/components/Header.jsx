import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-base text-slate-600 hover:text-slate-900 transition-colors"
    >
      {children}
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400" />
            <span className="font-semibold tracking-tight text-slate-900">WP Dev Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-3">
              <a href="mailto:hello@example.com" className="text-slate-600 hover:text-slate-900" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800">
              Let’s talk
            </a>
          </nav>

          <button className="md:hidden p-2 text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <NavLink href="#about" onClick={close}>About</NavLink>
            <div />
            <NavLink href="#projects" onClick={close}>Projects</NavLink>
            <div />
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
            <div className="pt-2 flex items-center gap-4">
              <a href="mailto:hello@example.com" className="text-slate-600 hover:text-slate-900" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
            <a href="#contact" onClick={close} className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800">
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
