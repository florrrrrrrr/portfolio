import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-[800px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Florent Martinez — home"
          className="text-sm font-semibold text-ink tracking-tight"
        >
          FM
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm transition-colors hover:text-ink ${
                isActive ? 'text-ink font-medium' : 'text-muted'
              }`
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm transition-colors hover:text-ink ${
                isActive ? 'text-ink font-medium' : 'text-muted'
              }`
            }
          >
            About
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-1 text-ink"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-6 p-1 text-ink"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-10">
            <NavLink
              to="/"
              end
              className="text-2xl font-medium text-ink"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </NavLink>
            <NavLink
              to="/about"
              className="text-2xl font-medium text-ink"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
