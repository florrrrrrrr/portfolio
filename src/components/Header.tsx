import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/80 border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Florent Martinez — home"
          className="font-display text-xl tracking-tight"
        >
          <span className="italic">F</span>lorent <span className="italic">M</span>artinez
        </Link>

        <nav>
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `transition-colors hover:text-ink ${
                    isActive ? 'text-ink' : 'text-muted'
                  }`
                }
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors hover:text-ink ${
                    isActive ? 'text-ink' : 'text-muted'
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
