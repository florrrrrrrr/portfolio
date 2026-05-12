import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className="max-w-[800px] mx-auto px-6 pt-20 pb-24">
      {/* Hero */}
      <section className="mb-20">
        <h1
          className="font-bold leading-tight text-ink"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Hi 👋🏻 I&apos;m Florent, a decade designing products people actually
          use.
        </h1>
        <p className="mt-5 text-lg text-muted font-light max-w-[600px] leading-relaxed">
          Product Designer based in Barcelona — I build the thing that&apos;s
          actually needed, where user truth meets business strategy.
        </p>
      </section>

      {/* Projects */}
      <section className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  )
}
