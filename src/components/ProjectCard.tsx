import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <p className="text-xs uppercase tracking-[0.16em] text-muted mb-4">
        {project.label}
      </p>
      <Link
        to={`/${project.slug}`}
        className="block group"
        aria-label={`View case study: ${project.title}`}
      >
        <div
          className="w-full aspect-[16/9] rounded-xl overflow-hidden"
          style={{ backgroundColor: project.color }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <h2 className="mt-6 text-[28px] sm:text-[32px] font-bold leading-tight text-ink">
          {project.title}
        </h2>
        <p className="mt-3 text-base text-muted leading-relaxed">
          {project.description}
        </p>
        <span className="mt-4 inline-block text-sm text-ink group-hover:underline">
          View project →
        </span>
      </Link>
    </article>
  )
}
