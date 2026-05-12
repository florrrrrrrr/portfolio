import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="max-w-[800px] mx-auto px-6 pt-16 pb-24">
      <Link
        to="/"
        className="text-sm text-muted hover:text-ink transition-colors"
      >
        ← Back to work
      </Link>

      <p className="mt-12 text-xs uppercase tracking-[0.16em] text-muted">
        {project.label}
      </p>
      <h1
        className="mt-4 font-bold leading-tight text-ink"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
      >
        {project.title}
      </h1>
      <p className="mt-8 text-base text-muted leading-relaxed">
        Full case study coming soon.
      </p>
    </div>
  )
}
