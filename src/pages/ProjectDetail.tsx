import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="max-w-4xl mx-auto px-6 sm:px-8 pt-24 sm:pt-32 pb-16">
      <Link
        to="/"
        className="text-sm text-muted hover:text-ink transition-colors"
      >
        ← Back to work
      </Link>

      <header className="mt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {project.label}
        </p>
        <h1 className="reveal mt-6 display text-4xl sm:text-6xl leading-[1.05]">
          {project.title}
        </h1>
      </header>

      {/* Hero image */}
      <div className="mt-12 rounded-2xl overflow-hidden bg-ink/5 aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      {/* Meta */}
      {project.content && (
        <dl className="mt-12 grid sm:grid-cols-3 gap-8 border-t border-b border-ink/10 py-8">
          {project.content.role && (
            <Meta label="Role" value={project.content.role} />
          )}
          {project.content.company && (
            <Meta label="Company" value={project.content.company} />
          )}
          {project.content.year && (
            <Meta label="Year" value={project.content.year} />
          )}
        </dl>
      )}

      {/* Overview */}
      <section className="mt-12 max-w-prose">
        <h2 className="font-display text-2xl tracking-[-0.01em]">Overview</h2>
        <p className="mt-4 text-lg leading-relaxed text-ink/85">
          {project.content?.overview ?? project.description}
        </p>

        <p className="mt-12 text-sm text-muted italic">
          More details about this case study coming soon. Add your own
          sections, images and writeup directly in{' '}
          <code className="not-italic font-mono text-ink/80">
            src/pages/ProjectDetail.tsx
          </code>
          .
        </p>
      </section>
    </article>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.18em] text-muted">
        {label}
      </dt>
      <dd className="mt-2 text-base">{value}</dd>
    </div>
  )
}
