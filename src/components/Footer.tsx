export default function Footer() {
  return (
    <footer className="mt-32 border-t border-ink/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <p className="font-display text-5xl sm:text-7xl tracking-tight">
          Thank you<span className="text-accent">!</span>
        </p>
        <div className="mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 text-sm text-muted">
          <p>© {new Date().getFullYear()} Florent Martinez</p>
          <div className="flex gap-6">
            <a
              href="mailto:hello@florent-martinez.com"
              className="hover:text-ink transition-colors"
            >
              hello@florent-martinez.com
            </a>
            <a
              href="https://www.linkedin.com/in/florentmartinez/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
