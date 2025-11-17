export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} WP Dev Portfolio. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
