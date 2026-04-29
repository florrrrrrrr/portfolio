import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

type Props = {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  // Alternate layout: even-indexed projects align left, odd align right.
  const isOdd = index % 2 === 1

  return (
    <article className="group">
      <Link
        to={`/projects/${project.slug}`}
        className="block"
        aria-label={`View case study: ${project.title}`}
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl bg-ink/5 aspect-[16/10]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
            onError={(e) => {
              // Graceful fallback if image is missing
              const target = e.currentTarget
              target.style.display = 'none'
            }}
          />
          {/* Subtle vignette on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Text */}
        <div
          className={`mt-8 max-w-2xl ${isOdd ? 'sm:ml-auto sm:text-right' : ''}`}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {project.label}
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl leading-[1.05] tracking-[-0.02em]">
            {project.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            {project.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-0.5 transition-all group-hover:gap-3 group-hover:border-accent group-hover:text-accent">
            View project
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
  )
}
