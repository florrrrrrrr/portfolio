import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-24 sm:pt-32 pb-24">
        <p className="reveal text-sm uppercase tracking-[0.2em] text-muted">
          Product Designer
        </p>

        <h1 className="reveal reveal-delay-1 mt-6 display text-5xl sm:text-7xl lg:text-8xl leading-[1.02]">
          Hi <span className="inline-block">👋🏻</span> I&apos;m{' '}
          <span className="italic text-accent">Florent</span>, a decade designing
          products people actually use.
        </h1>

        <p className="reveal reveal-delay-2 mt-10 max-w-prose text-xl sm:text-2xl text-muted leading-snug font-display italic">
          &ldquo;I build the thing that&apos;s actually needed — where user truth
          meets business strategy.&rdquo;
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 space-y-32 sm:space-y-48 pb-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </section>
    </>
  )
}
